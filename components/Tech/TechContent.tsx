"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RoadmapSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 轮播数据配置
  const slides = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1302525652/2081383372.png',
      buttonText: 'Claim Rewards',
      link: 'https://market.winnfthero.io/activity/gratefulrewards',
      title: 'Grateful Rewards is now online',
      description: 'Exclusive airdrop benefit for WIN NFT HORSE players is now available. Join WIN NFT HERO and claim your rewards now!'
    },
    {
      id: 2,
      image: 'https://hero.staticnft.io/market/assets/img/banner/horse.png',
      buttonText: 'Join Season II',
      link: 'https://market.winnfthero.io/activity/leaderboard/stats',
      title: 'PvP Season II Hot Online',
      description: 'PvP Season II has began! Battle with your Heroes and win big'
    }
  ];

  return (
    <section className="relative pt-16 hero-gradient min-h-screen overflow-hidden">
      <div className="bg-primary-purple py-16 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 左侧内容区域 */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                <span className="hero-text-gradient">WIN NFT HERO</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                {slides[activeIndex]?.description}
              </p>

              <div className="mt-4">
                <Link
                  href={slides[activeIndex]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-primary-cyan hover:bg-cyan-hover text-black font-bold px-8 py-4 md:px-10 md:py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/30">
                    {slides[activeIndex]?.buttonText}
                  </Button>
                </Link>
              </div>
            </div>

            {/* 右侧轮播区域 */}
            <div className="space-y-8">
              {/* 编号和标题部分 */}
              <div className="flex items-center mb-6 space-x-4">
                <div className="bg-primary-cyan text-black font-bold py-2 px-6 rounded-full text-2xl min-w-[60px] text-center">
                  {String(activeIndex + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl text-white uppercase font-bold leading-tight">
                  FIGHT
                  <br />
                  AND WIN
                </h3>
              </div>

              <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {slides[activeIndex]?.title}
              </h4>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                speed={800}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.custom-pagination',
                  bulletClass: 'swiper-bullet',
                  bulletActiveClass: 'swiper-bullet-active',
                  renderBullet: (index, className) => {
                    return `<span class="${className}"></span>`;
                  }
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                className="relative group"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative aspect-video rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                      <Image
                        src={"/demo"+slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}

                {/* 自定义导航按钮 */}
                <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </div>

                <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* 自定义分页器 */}
                <div className="custom-pagination flex justify-center gap-2 mt-6" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;