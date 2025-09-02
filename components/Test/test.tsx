"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote: "Loom enables us to maximize our impact as a distributed company by helping us collaborate and share ideas more easily.",
    author: "Andrew Reynolds",
    title: "Design Lead, MetaLab",
    logo: "https://ext.same-assets.com/3151828093/1302118060.svg",
    image: "https://cdn.sanity.io/images/pvn35iyy/production/f57ca9121468be3af345bdbf9412545b9662f532-320x360.webp"
  },
  {
    quote: "Loom has been the light of my life since you showed me it. I never tire of hearing this from folks. Not even an investor... yet.",
    author: "Alexis Ohanian",
    title: "Founder, SevenSevenSix",
    logo: "https://ext.same-assets.com/3151828093/909903924.svg",
    image: "https://cdn.sanity.io/images/pvn35iyy/production/d281e170c57ef87909bf333ae72cbaf89174c17e-400x400.jpg"
  },
  {
    quote: "Loom allows me to connect more personally with people without having to do 75 different one-on-one calls, which is just impossible at scale.",
    author: "Katie Burke",
    title: "Chief People Officer, HubSpot",
    logo: "https://ext.same-assets.com/3151828093/437204515.svg",
    image: "https://cdn.sanity.io/images/pvn35iyy/production/b51f9779f1e1e2422ed56403f6ee9f557e2d5935-400x456.webp"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-loom-lightGray relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 mb-6 md:mb-0">
                <Image
                  src={testimonials[activeIndex].logo}
                  alt={`${testimonials[activeIndex].author}'s company logo`}
                  width={130}
                  height={40}
                  style={{ objectFit: 'contain' }}
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <blockquote className="text-xl md:text-2xl text-loom-purple mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-loom-purple">{testimonials[activeIndex].author}</p>
                  <p className="text-loom-gray text-sm">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-loom-purple w-6' : 'bg-loom-gray'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
