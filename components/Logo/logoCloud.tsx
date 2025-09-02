"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    height: 2,
    href: "https://en.alrunsd.com/",
    name: "alrunsd",
    path: "/partner/alrunsd.png",
  },
  {
    height: 1,
    href: "http://www.liljl-home.com/",
    name: "liljl",
    path: "/partner/liljl.png",
  },
  {
    height: 1.5,
    href: "https://www.newpearl-global.com/",
    name: "newpearl",
    path: "/partner/newpearl.png",
  },
  {
    height: 1,
    href: "https://pyure.com/",
    name: "pyure",
    path: "/partner/pyure.png",
  },
  {
    height: 1.5,
    href: "https://www.tantaoenergy.com",
    name: "tantaoenergy",
    path: "/partner/tantaoenergy.png",
  },
  {
    height: 1,
    href: "https://www.uponor.com/en-us",
    name: "uponor",
    path: "/partner/uponor.png",
  },
  {
    height: 1,
    href: "https://zehnderamerica.com/",
    name: "zehnder",
    path: "/partner/zehnder.png",
  },
  {
    height: 1,
    href: "https://www.tece.com/en",
    name: "tece",
    path: "/partner/tece.svg",
  },
  {
    height: 1,
    href: "https://vaagentimbers.com/",
    name: "vaagen",
    path: "/partner/vaagen.svg",
  },
  {
    height: 1,
    href: "https://www.schluter.com/schluter-us/en_US/",
    name: "schluter",
    path: "/partner/schluter.png",
  },

  //   { url: "https://ext.same-assets.com/3151828093/437204515.svg", alt: "HubSpot" },
  //   { url: "https://ext.same-assets.com/3151828093/2284759871.svg", alt: "Lacoste" },
  //   { url: "https://ext.same-assets.com/3151828093/1565682079.svg", alt: "Postclick" },
  //   { url: "https://ext.same-assets.com/3151828093/3511503405.png", alt: "LaunchDarkly" },
  //   { url: "https://ext.same-assets.com/3151828093/3221810184.svg", alt: "Remote" },
  //   { url: "https://ext.same-assets.com/3151828093/1302118060.svg", alt: "MetaLab" },
  //   { url: "https://ext.same-assets.com/3151828093/1943851552.svg", alt: "Atlassian" },
  //   { url: "https://ext.same-assets.com/3151828093/1239896064.svg", alt: "Juniper" },
  //   { url: "https://ext.same-assets.com/3151828093/1067117222.svg", alt: "Braze" },
  //   { url: "https://ext.same-assets.com/3151828093/1042292452.svg", alt: "Gtmhub" },
  //   { url: "https://ext.same-assets.com/3151828093/95138211.svg", alt: "Greenhouse" },
  //   { url: "https://ext.same-assets.com/3151828093/2507477457.svg", alt: "Brex" },
  //   { url: "https://ext.same-assets.com/3151828093/1392457090.svg", alt: "Fit Fab Fun" },
];

const LogoCloud = () => {
  return (
    <div className="bg-loom-lightGray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 justify-items-center mt-12 mb-24">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              className="group block w-24 md:w-32" // 移动宽度到外层
            >
              <div className={`relative aspect-video h-8`}>
                {" "}
                {/* 使用宽高比容器 */}
                <Image
                  src={logo.path}
                  alt={logo.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
