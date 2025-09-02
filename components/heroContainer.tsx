// components/Hero.tsx
"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 -mt-16"
      style={{
        backgroundImage: "url(/images/2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 灰色蒙层 */}
      <div className="absolute inset-0 bg-black/50" /> {/* 添加50%透明度的黑色蒙层 */}

      {/* 主内容容器 */}
      <div className="max-w-6xl w-full mx-auto relative z-10"> {/* 添加z-index保证内容在蒙层之上 */}
        {/* 上半部标题 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-thin text-white mb-4"> {/* 文字改为白色 */}
            Redefining Modern Living
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"> {/* 文字改为浅灰色 */}
            Where innovative design meets sustainable architecture
          </p>
        </motion.div>

        {/* 下半部分割布局 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className=" flex items-center"
          >
            <div className="max-w-md space-y-6">
              <h3 className="text-2xl font-semibold text-white"> {/* 文字改为白色 */}
                Experience the Difference
              </h3>
              <p className="text-gray-200 leading-relaxed"> {/* 文字改为浅灰色 */}
                Discover homes crafted with precision, blending cutting-edge 
                technology with timeless aesthetics. Our eco-friendly solutions 
                ensure a healthier living environment for future generations.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg 
                hover:bg-blue-700 transition-colors duration-300">
                Explore Collections
              </button>
            </div>
          </motion.div>
        </div>

        {/* 移动端分割线 */}
        <div className="md:hidden my-8 w-full h-px bg-gray-400" /> {/* 调整颜色 */}
      </div>

      {/* 移除原来的渐变背景装饰 */}
    </section>
  );
};

export default Hero;