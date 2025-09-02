// components/PartnersSection.tsx
import Image from 'next/image';
import React from 'react';

interface Partner {
  href: string;
  name: string;
  path: string;
}

interface PartnersSectionProps {
  partners?: Partner[];
}
const list = [
  { href: "https://en.alrunsd.com/","name": "alrunsd", "path": "/demo/images/alrunsd.png" },
  { href: "http://www.liljl-home.com/","name": "liljl", "path": "/demo/images/liljl.png" },
  { href: "https://www.newpearl-global.com/","name": "newpearl", "path": "/demo/images/newpearl.png" },
  { href: "https://pyure.com/","name": "pyure", "path": "/demo/images/pyure.png" },
  { href: "www.tantaoenergy.com","name": "tantaoenergy", "path": "/demo/images/tantaoenergy.png" },
  { href: "https://www.uponor.com/en-us","name": "uponor", "path": "/demo/images/uponor.png" },
  { href: "https://zehnderamerica.com/","name": "zehnder", "path": "/demo/images/zehnder.jpg" },
  { href: "https://www.tece.com/en","name": "tece", "path": "/demo/images/tece.svg" },
  { href: "https://vaagentimbers.com/","name": "vaagen", "path": "/demo/images/vaagen.svg" },
  { href: "https://www.schluter.com/schluter-us/en_US/","name": "schluter", "path": "/demo/images/schluter.svg" },

]
export const Partner = ({ partners=list }: PartnersSectionProps) => {
  // 处理透明背景图片的品牌列表
  const brandsWithLightLogo = ['tece', 'schluter', 'vaagen', 'liljl'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center mb-12 text-gray-800">
          Trusted Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner) => {
            // 判断是否需要深色背景
            const needsDarkBg = brandsWithLightLogo.includes(partner.name);
            
            return (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div className={`relative w-full h-32 p-6 rounded-xl shadow-sm
                  ${needsDarkBg ? 'bg-gray-800' : 'bg-white'} 
                  flex items-center justify-center`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.path}
                      alt={`${partner.name} logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className={`${
                        needsDarkBg ? 'filter brightness-0 invert' : ''
                      } opacity-90 group-hover:opacity-100 transition-opacity`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'text-center text-gray-600 font-medium';
                        fallback.textContent = partner.name;
                        target.parentNode?.appendChild(fallback);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-gray-200/50 group-hover:border-gray-300 transition-all" />
                </div>
                <span className="mt-4 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {formatBrandName(partner.name)}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 格式化品牌名称显示
const formatBrandName = (name: string) => {
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// // 使用示例
// const PARTNERS = [
//   // 保持原始数据不变...
// ];

// const HomePage = () => {
//   return (
//     <div>
//       <PartnersSection partners={PARTNERS} />
//     </div>
//   );
// };