// components/Header.tsx
"use client";
import { useState, Fragment, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ContactModal from "./contactModal";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState({ mobile: false, modal: false });
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const whiteBgPath = ["/", "/index"];
  const shouldWhiteBg = whiteBgPath.includes(pathname);

  const navigationItems = useMemo(
    () => [
      {
        name: "LEARN",
        isCustom: true,
        dropdown: [
          { name: "Our Story", path: "ourStory" },
          { name: "Testimonials", path: "testimonials" },
          { name: "Past Projects", path: "pastProjects" },
          { name: "Warranty", path: "warranty" },
        ],
      },
      { name: "BUILD A HOME", path: "/modals" },
      // { name: "SHOWROOMS", path: "/showrooms" },
      { name: "FINANCING", path: "/financing" },
      { name: "CONTACT US", path: "/contact" },
    ],
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0); // 页面刷新后滚动到顶部
  }, []);

  // 新增 effect 以在路径变化时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0); // 页面跳转后滚动到顶部
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () =>
    setMenuState((prev) => ({ ...prev, mobile: !prev.mobile }));
  const toggleModal = () =>
    setMenuState((prev) => ({ ...prev, modal: !prev.modal }));

  return (
    <header className={` shadow-sm`}>
      <Dialog
        as="div"
        open={menuState.mobile}
        onClose={toggleMobileMenu}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 py-2">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="lg:hidden flex-1 text-center">
              <span className="text-xs">VIEKO PASSIVE HOUSE</span>
            </div>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {navigationItems.map((item) => (
                <div key={item.name} className="py-3">
                  {item.dropdown ? (
                    <div className="space-y-4">
                      <button
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === item.name ? null : item.name
                          )
                        }
                        className="flex w-full items-center justify-between text-sm"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="space-y-4 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={`/${subItem.path}`}
                              onClick={toggleMobileMenu}
                              className="block py-2 text-gray-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.path} onClick={toggleMobileMenu} className="block py-2 text-sm">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="py-6">
                <div className="flex flex-col space-y-4">
                  <button
                    className="w-full rounded-lg bg-blue-600 py-3 text-white"
                    onClick={toggleModal}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <div className="bg-black">
        <div className="top-header lg:hidden mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-white">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden"
          >
            <Bars3Icon className="h-6 w-6 " />
          </button>
          <div className="lg:hidden flex-1 text-center">
            <span className="text-xs">VIEKO PASSIVE HOUSE</span>
          </div>
        </div>
      </div>

      <div
        className={`hidden lg:block fixed ${isScrolled ? "top-0 bg-black" : "top-4"} ${activeSubmenu || !shouldWhiteBg ? "bg-black" : ""} z-20 min-w-full  px-4 py-4`}
      >
        <div className="flex items-center justify-between mx-auto max-w-7xl ">
          <div className="flex flex-col">
            <Link href="/" className="text-xs text-white">
              VIEKO PASSIVE HOUSE
            </Link>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="group"
                onMouseEnter={() =>
                  item.dropdown && setActiveSubmenu(item.name)
                }
                onMouseLeave={() => item.dropdown && setActiveSubmenu(null)}
              >
                <button
                  className={`flex items-center space-x-1 text-xs font-light transition-colors ${isScrolled ? "text-white hover:text-gray-300" : "text-white hover:text-gray-300"}`}
                >
                  <Link href={item.path || "#"}>{item.name}</Link>
                  {item.dropdown && <ChevronDownIcon className="h-4 w-4" />}
                </button>
                {item.dropdown && (
                  <Transition
                    show={activeSubmenu === item.name}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                  >
                    <div className="absolute left-0 right-0 top-full w-screen bg-white shadow-lg z-10">
                      <div className="mx-auto max-w-full px-4 py-8 bg-black text-white">
                        {item.isCustom ? (
                          <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-6">
                              <div className="border-b pb-4">
                                <h3 className="text-2xl font-light">
                                  About VOD
                                </h3>
                                <p className="mt-2">
                                  Learn about how we're unlocking invaluable
                                  access to new homes in some of the nation's
                                  coolest neighborhoods.
                                </p>
                              </div>
                              <div className="space-y-4">
                                <Link
                                  href="/modals"
                                  className="font-sm border rounded-full py-2 px-4"
                                >
                                  How it works
                                </Link>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                              <div className="space-y-4">
                                <ul className="space-y-3 text-xs">
                                  {[
                                    { name: "Our Story", path: "ourStory" },
                                    {
                                      name: "Testimonials",
                                      path: "testimonials",
                                    },
                                  ].map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={`/${subItem.path}`}
                                        className="hover:text-gray-300"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-4">
                                <ul className="space-y-3 text-xs">
                                  {[
                                    {
                                      name: "Past Projects",
                                      path: "pastProjects",
                                    },
                                    { name: "Warranty", path: "warranty" },
                                  ].map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={`/${subItem.path}`}
                                        className="hover:text-gray-300"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid gap-8">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.path || "#"}
                                className="text-lg text-gray-800 hover:text-gray-600"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Transition>
                )}
              </div>
            ))}
            <div className="hidden items-center space-x-4 lg:flex">
              <button
                className={`rounded-lg px-6 py-2 text-sm transition-colors ${isScrolled || whiteBgPath ? "bg-white text-black hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-700"}`}
                onClick={toggleModal}
              >
                Get started
              </button>
            </div>
          </nav>
        </div>
      </div>
      <ContactModal isOpen={menuState.modal} onClose={toggleModal} />
    </header>
  );
};

export default Header;
