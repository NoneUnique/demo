"use client";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import CustomSwiper from "@/components/CustomSwiper/CustomSwiper";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import Hero from "@/components/heroContainer";
import { Partner } from "@/components/Partner";
import { motion } from "framer-motion";
import RoadmapSection from "@/components/Tech/TechContent";
import { Technical } from "@/components/Tech/Technical";
import SectionTitle from "@/components/SectionTitle/sectionTitle";
import TechMaterial from "@/components/Tech/TechMaterial";
import LogoCloud from "@/components/Logo/logoCloud";
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

const materials = [
  {
    title: "Doors & Windows",
    brands: ["Orient Sundar", "New Future"],
    features: [
      { icon: "✔️", text: "Thermal-break design" },
      { icon: "✔️", text: "Fireproof/anti-theft features" },
    ],
  },
  {
    title: "Interior/Exterior Finishes",
    brands: ["New Pearl", "LILJL"],
    features: [
      { icon: "✔️", text: "Dual-layer ceramic coating" },
      { icon: "✔️", text: "Hidden functionality design" },
    ],
  },
  {
    title: "Roofing & Waterproofing",
    brands: ["Tantao", "Schluter"],
    features: [
      { icon: "🌞", text: "Solar tiles (BIPV integration)" },
      { icon: "🛡️", text: "Rigid bituminous/polymer membranes" },
    ],
  },
  {
    title: "Stone Applications",
    applications: ["Flooring", "Countertops", "Feature walls"],
    features: [
      {
        icon: "💎",
        items: ["Natural quartz/marble", { subtext: "Superior durability" }],
      },
      {
        icon: "⚡",
        items: ["Smart integration", { subtext: "Heated floor systems" }],
      },
    ],
  },
];
const slides = [
  {
    imgSrc: "/demo/images/part01.jpg",
    alt: "HVAC & Air Management",
    title: "HVAC & Air Management",
    description: [
      "Components: Ecoflow batteries, solar tiles. Floor heating (Schluter DITRA-HEAT): Crack-resistant electric heating for tiles.",
      "Benefits: Constant temperature, humidity, oxygen, cleanliness, and silence.",
    ],
  },
  {
    imgSrc: "/demo/images/part01.jpg",
    alt: "Energy & Storage",
    title: "Energy & Storage",
    description: [
      "Components: Ecoflow batteries, solar tiles.",
      "Advantages: Off-grid energy storage for 24/7 power supply. Reduced electricity costs, government incentives (e.g., U.S. ITC tax credits).",
    ],
  },
  {
    imgSrc: "/demo/images/part01.jpg",
    alt: "Smart Home Integration",
    title: "Smart Home Integration",
    description: [
      "Components: Ecoflow batteries, solar tiles.",
      "Advantages: Off-grid energy storage for 24/7 power supply. Reduced electricity costs, government incentives (e.g., U.S. ITC tax credits).",
    ],
  },
  {
    imgSrc: "/demo/images/part01.jpg",
    alt: "Water Systems",
    title: "Water Systems",
    description: [
      "Components: Ecoflow batteries, solar tiles. Floor heating (Schluter DITRA-HEAT): Crack-resistant electric heating for tiles.",
      "Benefits: Constant temperature, humidity, oxygen, cleanliness, and silence.",
    ],
  },
];
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <section className="mt-16">
        <SectionTitle title={technology.title}></SectionTitle>
        <Technical></Technical>
      </section>
      <section className="mt-16">
        <TechMaterial />
      </section>
        <section className="mt-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 px-4 py-4 sm:px-6 lg:max-w-7xl  lg:px-8 relative">
          
          <CustomSwiper
            slideNum={3}
            pagination={true}
            navigation={false}
            autoplay={true}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 }, // 小屏幕显示1个
              1024: { slidesPerView: 3 }, // 大屏幕显示3个
            }}
          >
            {slides.map((slide, index) => (
              <div className="swiper-slide cursor-pointer" key={index}>
                <div className="mb-4  w-full">
                  <img
                    className="box-border w-full h-auto rounded-lg"
                    src={slide.imgSrc}
                    alt={slide.alt}
                  />
                </div>
               
                <div>
                  <h2 className="text-md">{slide.title}</h2>
                  {slide.description.map((text, idx) => (
                    <p className="text-xs text-gray-600" key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </CustomSwiper>
          </div>
      </section>
      <section className="mt-16 py-16 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start your project today</h2>
          <p className="mb-8">Innovative financing options coming soon</p>
          <a
            href="/financing"
            className="bg-white text-emerald-600 px-8 py-3 rounded-full inline-block hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="mt-16">
        <SectionTitle title="Our Partner"/>
        <LogoCloud />
      </section>
    </div>
  );
}
