"use client";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import PreviousButton from '../CustomButton/left';
import NextButton from '../CustomButton/right';
import ArrowButton from '../CustomButton/ArrowButton';

const technology = {
    title: "VCH Architectural Technology",
    desc: "Innovative, Sustainable, and Smart Building Solutions. \nAt VCH, we are revolutionizing architectural technology with cutting-edge structural systems, eco-friendly materials, and smart home solutions that enhance comfort, efficiency, and sustainability. Our advanced construction technologies integrate strength, design flexibility, and environmental responsibility, setting new standards in modern building practices.",
    data: [
      {
        title: "CLT (Cross-Laminated Timber)",
        list: [
          "Strength & Structural Performance – High load-bearing capacity with exceptional stability.",
          "Sustainability & Environmental Benefits – Renewable material with a reduced carbon footprint.",
          "Faster & Cost-Effective Construction – Prefabrication allows rapid assembly, reducing labor costs.",
          "Fire Resistance – Inherent charring properties provide superior fire protection.",
          "Thermal & Acoustic Performance – Natural insulation for enhanced energy efficiency and comfort.",
          "Design Flexibility & Aesthetic Appeal – Modern, natural, and customizable solutions.",
          "Health & Well-Being Benefits – Creates a warm and comfortable indoor environment.",
        ],
      },
      {
        title: "Modular Wall System",
        list: [
          "Fire-Rated Structural Sheathing Panel – Ensuring superior fire safety.",
          "Easy Fixing Method – Quick and efficient installation process.",
          "Moisture & Water Resistant – Protects against humidity and weather conditions.",
          "Breathable & Mould Resistant – Improves indoor air quality and durability.",
          "Impact Resistant – Withstands harsh environments and daily wear.",
        ],
      },
      {
        title: "Advanced Window Systems",
        list: [
          "Lightweight & Strong – Engineered for durability without compromising aesthetics.",
          "Corrosion Resistant – Designed for longevity in all climates.",
          "Low Maintenance – Hassle-free upkeep for a superior experience.",
          "Security & Safety – Reinforced construction for peace of mind.",
        ],
      },
      {
        title: "Roof Sprinkler System",
        list: [
          "Fire Protection – Rapid response fire suppression.",
          "Temperature Control – Helps maintain structural integrity.",
          "Dust & Pollution Control – Enhances air quality around the property.",
          "Structural Protection – Prevents heat damage and prolong.",
        ],
      },
    ],
  };

  export const Technical = () => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
    // 动画配置
    const listVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.1
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 }
    };
  
    const handleSlideChange = (index: number) => {
      setActiveIndex(index);
      setIsAccordionOpen(false);
    };
  
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 px-4 py-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 relative">
          {/* 移动端导航按钮 */}
          <div className="lg:hidden flex justify-end items-center w-full absolute top-4">
            <div className="flex gap-2">
                <div  onClick={() => swiperRef.current?.slidePrev()}>
                <ArrowButton
               
               disabled={activeIndex === 0}
               extraClass={`rotate-180 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
             />
                </div>
              <div onClick={() => swiperRef.current?.slideNext()}>
              <ArrowButton
                
                disabled={activeIndex === technology.data.length - 1}
                extraClass={activeIndex === technology.data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
              />
              </div>
            
            </div>
          </div>
  
  
          {/* 桌面端描述 */}
          <div className="">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-xl tracking-tight text-gray-900 sm:text-2xl">
                  {technology.data[activeIndex].title}
                </h2>
                <motion.dl
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-8"
                >
                  {technology.data[activeIndex].list.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="pt-2"
                    >
                      <dt className="text-xs text-gray-900 pb-1 border-b border-gray-200">
                        {item.split('–')[0].trim()}
                      </dt>
                      <dd className="mt-1 text-xs text-gray-500">
                        {item.split('–')[1].trim()}
                      </dd>
                    </motion.div>
                  ))}
                </motion.dl>
              </motion.div>
            </AnimatePresence>
          </div>
  
          {/* 轮播区域 */}
          <div className="relative">
            <Swiper
              ref={swiperRef}
              onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="rounded-lg"
            >
              {technology.data.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full aspect-[4/3] relative">
                    <Image
                      src="/demo/images/1.png"
                      alt={tech.title}
                      fill
                      className="object-cover rounded-lg max-h-[600px]"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
  
            {/* 桌面端分页指示器 */}
            <div className="flex gap-4 justify-center mt-6">
              {technology.data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-gray-900 px-4' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };