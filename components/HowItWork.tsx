import Image from 'next/image';
import { ReactNode } from 'react';

type FeatureItem = {
  // icon: ReactNode;
  step?: string | number;
  title: string;
  description: string;
};

type HowItWorksProps = {
  title?: string;
  subtitle?: string;
  dark: boolean;
  highlight?: string;
  features: FeatureItem[];
  
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  imageUrl: string;
};
const HowItWorks = ({
  title = "How It Works",
  subtitle = "An Enterprise Solution",
  highlight = "Produce faster",
  dark=true,
  features,
  primaryButton,
  secondaryButton,
  imageUrl
}: HowItWorksProps) => {
  return (
    <section className={`overflow-hidden ${dark ? 'bg-gray-900 text-white' : 'bg-white'} py-8 sm:py-16`}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        
        {/* 文字内容区块 */}
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            {/* 标题部分 */}
            <h2 className={`text-base font-semibold leading-7 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              {highlight}
            </h2>
            <p className={`mt-2 text-3xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
              {title}
            </p>
            <p className={`mt-6 text-lg leading-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>

            {/* 步骤列表 */}
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
              {features.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <p className={`inline font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    <span className={`absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      dark 
                        ? 'bg-black border-white text-white' 
                        : 'bg-white border-gray-900 text-gray-900'
                    } text-sm font-bold`}>
                      {feature.step}
                    </span>
                    {feature.title}
                  </p>
                  <p className={` ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* 按钮部分 */}
          <div className="mt-10 flex items-center gap-x-6">
            {primaryButton && (
              <button
                onClick={primaryButton.onClick}
                className={`rounded-md ${
                  dark 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors`}
              >
                {primaryButton.text}
              </button>
            )}
            {secondaryButton && (
              <button
                onClick={secondaryButton.onClick}
                className={`text-sm font-semibold leading-6 ${
                  dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {secondaryButton.text} <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </div>

        {/* 图片区块 */}
        <div className={`relative max-w-none rounded-xl shadow-xl overflow-hidden ${
          dark ? 'ring-gray-600/20' : 'ring-gray-400/20'
        } ring-1`}>
          <Image
            src={"/demo"+imageUrl}
            alt="Workflow demonstration"
            fill
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default HowItWorks;