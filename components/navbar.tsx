"use client";
import { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { siteConfig } from '@/config/site';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 锁定body滚动
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
            Logo
          </a>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-6">
            {siteConfig.navItems.map((item) => (
              item.subMenu ? (
                <Dropdown key={item.name} placement="bottom-start" >
                  <DropdownTrigger>
                    <div className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                      {item.name}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </DropdownTrigger>

                  <DropdownMenu className="!min-w-[200px] !p-2 !rounded-xl !shadow-xl border border-gray-100">
                    {item.subMenu.map((subItem) => (
                      <DropdownItem
                        key={subItem.name}
                        href={subItem.href}
                        className="!px-4 !py-2.5 !text-gray-700 hover:!bg-gray-50 !rounded-lg transition-colors"
                      >
                        {subItem.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端全屏菜单 */}
      <div
        className={`md:hidden fixed inset-0 h-screen transition-all duration-300 ${
          isMobileMenuOpen
            ? 'visible opacity-100 bg-black/30 backdrop-blur-sm'
            : 'invisible opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-16 bottom-0 left-0 w-full bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overflow-y-auto h-full pb-8">
            {siteConfig.navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (!item.subMenu) setIsMobileMenuOpen(false);
                    if (item.subMenu) {
                      e.preventDefault();
                      setOpenSubMenu(openSubMenu === item.name ? null : item.name);
                    }
                  }}
                  className="block px-6 py-4 text-gray-800 hover:bg-gray-50 text-lg"
                >
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    {item.subMenu && (
                      <svg
                        className={`w-5 h-5 transform transition-transform ${
                          openSubMenu === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </a>

                {item.subMenu && openSubMenu === item.name && (
                  <div className="pl-6 bg-gray-50">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-3 text-gray-700 hover:bg-gray-100 text-base"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// 布局组件

export default Navbar;