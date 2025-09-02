"use client";
import { MouseEvent, ReactNode } from "react";

type CtaSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  icon?: ReactNode;
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const CtaSection = ({
  title = "Didn't find the tool you were looking for?",
  description = "We're constantly working to improve and expand our toolset to meet your needs. If you have a specific tool in mind that you couldn't find, please let us know.",
  buttonText = "Request Tool",
  icon,
  onButtonClick,
}: CtaSectionProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onButtonClick?.(e);
    // 可以在这里添加默认处理逻辑
  };

  return (
    <div className="relative overflow-hidden border-b w-full dark:border-gray-700 dark:bg-gray-900">
      <div className="px-6 py-8 sm:px-6 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-center text-black sm:text-4xl dark:text-white">
            {title}
          </h2>

          {description && (
            <p className="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug dark:text-gray-300">
              {description}
            </p>
          )}

          <div className="flex items-center justify-center mt-6 sm:mt-10 gap-x-6">
            <button
              onClick={handleClick}
              className="flex items-center justify-center gap-2 min-w-[130px] rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] hover:text-gray-200 dark:bg-white dark:text-black dark:hover:text-gray-700 px-8"
            >
              {icon && <span className="w-5 h-5">{icon}</span>}
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 z-10 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#gradient)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1d4ed8" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CtaSection;
