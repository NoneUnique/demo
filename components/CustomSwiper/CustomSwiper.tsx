// 修改后的CustomSwiper组件
"use client";
import React, { ReactNode, useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperProps {
  children: ReactNode;
  slideNum?: number; // 同时显示的幻灯片数量
  className?: string;
  navigation?: boolean; // 是否显示导航箭头
  pagination?: boolean; // 是否显示分页器
  loop?: boolean; // 是否循环播放
  autoplay?: boolean | number; // 自动播放间隔(ms)
  centeredSlides?: boolean; // 是否居中显示
  spaceBetween?: number; // 幻灯片间距
  breakpoints?: Record<number, { slidesPerView: number }>; // 响应式断点
}

export default function CustomSwiper({
  children,
  slideNum = 1,
  className = '',
  navigation = true,
  pagination = false,
  loop = false,
  autoplay = false,
  centeredSlides = false,
  spaceBetween = 30,
  breakpoints,
}: SwiperProps) {
  const swiperRef = useRef<SwiperCore>();
  // 自动播放配置
  const autoplayConfig = typeof autoplay === 'boolean' 
    ? (autoplay ? { delay: 3000 } : false)
    : { delay: autoplay };
  // 新增分页样式配置
  const customPagination = pagination ? {
    clickable: true,
    // renderBullet: (index: number, className: string) => {
    //   return `<span class="${className} !w-2 !h-2 !bg-gray/30 !transition-all !duration-300 hover:!bg-gray/50"></span>`;
    // },
  } : false;

  return (
    <div className={`relative ${className}`}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slideNum}
        loop={loop}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        autoplay={autoplayConfig}
        breakpoints={breakpoints || {
          640: { slidesPerView: Math.min(2, slideNum) },
          1024: { slidesPerView: slideNum },
        }}
        navigation={false}
        // navigation={navigation ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false}
        pagination={true}

      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide className='pb-10' key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* 修改后的导航箭头 */}
      {navigation && (
        <>
          <button
            className="swiper-button-prev absolute top-1/2 md:-left-14 -left-6 z-10 -translate-y-1/2 p-2 hover:!bg-black/10 transition-all duration-300 rounded-full backdrop-blur-sm"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="swiper-button-next absolute top-1/2 md:-right-14 -right-6 z-10 -translate-y-1/2 p-2 hover:!bg-black/10 transition-all duration-300 rounded-full backdrop-blur-sm"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* 添加自定义分页样式 */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: white !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #000 !important;
        }
        .swiper-pagination {
        bottom: 0!important;}
      `}</style>
    </div>
  );
}