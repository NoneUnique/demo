// components/StepChart.tsx
import Image from 'next/image';
import React from 'react';

interface StepChartItem {
  title: string;
  description?: string;
  time?: string;
  side?: string | null;
  image?: {
    src: string;
    alt: string;
    aspectRatio: string;
    position?: 'left' | 'right';
  };
}

interface StepChartProps {
  items: StepChartItem[];
}

const StepChart: React.FC<StepChartProps> = ({ items }) => {
  const getPositionClass = (side?: string | null) => {
    switch (side) {
      case 'left':
        return 'items-end mr-[50%] pr-9 text-right';
      case 'right':
        return 'items-start ml-[50%] pl-9';
      case 'center':
        return 'items-center mx-auto text-center';
      case 'final':
        return 'items-center mx-auto text-center pb-32 pt-32';
      default:
        return 'items-start ml-[50%] pl-9';
    }
  };

  const renderDecorations = (item: StepChartItem, index: number) => {
    if (item.side === 'final' || index === items.length - 1) {
      return (
        <div className="absolute top-[60px] w-3.5 h-3.5 bg-black rounded-full" />
      );
    }

    return (
      <>
        {item.side !== 'center' && (
          <div className={`absolute top-[55px] w-3.5 h-3.5 bg-black rounded-full 
            ${item.side === 'left' ? '-right-1.5' : '-left-2'}`}
          />
        )}
        {index < items.length - 1 && item.side !== 'center' && (
          <div className={`absolute top-[75px] w-1.5 h-[calc(100%-30px)] bg-black  rounded-xl
            ${item.side === 'left' ? '-right-1 -translate-x-1/4	' : '-left-1 '}`}
          />
        )}
        {item.side === 'center' && (
          <svg className="relative top-7 -left-6" 
            width="53" height="439" viewBox="0 0 53 439" fill="none">
            <path
              d="M50 436C50 436 50 281.9 50 219.5C50 192.976 46.5 175 41.4424 163.504M50 3.5V116C50 138.431 46.5 151 41.4424 163.504M41.4424 163.504C29.1216 135.5 3 144.927 3 162C3 179.073 29.5 188 41.4424 163.504Z"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </>
    );
  };

  const renderImage = (image: StepChartItem['image']) => {
    if (!image) return null;
    
    return (
      <div className={`relative w-4/5 ${image.position === 'right' ? 'translate-x-[calc(100%+72px)]' : 'translate-x-[calc(-100%-72px)]'}`}>
        <Image
          src={"/demo"+image.src}
          alt={image.alt}
          width={550}
          height={image.aspectRatio === '550/680' ? 680 : 360}
          className="rounded shadow-lg bg-gray-100 object-cover"
          style={{ aspectRatio: image.aspectRatio }}
        />
      </div>
    );
  };

  return (
    <div className="bg-beige">
      <ul className={`flex flex-col p-0 list-none `}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`relative flex flex-col ${item.side === 'center' ? 'pt-24' : 'py-20'}  ${getPositionClass(item.side)}`}
          >
            {item.time && (
              <time className={`absolute  ${item.side === 'center' ? 'top-[65px]' :item.side === 'final' ? 'top-[85px]' : 'top-[45px]'} border-1.5 border-black rounded-lg px-3.5 py-2 text-xs font-medium tracking-wide uppercase`}
              >
                {item.time}
              </time>
            )}

            <h2 className={`mb-2  leading-7 ${item.side === 'center' ? 
              'pt-4' : ''} ${item.side === 'final' ? 
              'text-blue-600 text-3xl font-light' : 'font-book text-xl'}`}>
              {item.title}
            </h2>
            
            <p className={`${item.side === 'final' ? 
              'text-black/40 text-6xl font-light w-[70%]' : 
              'text-black/60 text-lg leading-6 w-[20vw]'}`}>
              {item.description}
            </p>

            {item.image && renderImage(item.image)}
            {renderDecorations(item, index)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepChart;