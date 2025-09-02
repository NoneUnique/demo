// pages/testimonials.js
import Image from 'next/image';
import Head from 'next/head';

const testimonials = [
  {
    text: "The seamless integration of form and function has fundamentally transformed our workflow. Every interaction demonstrates meticulous attention to detail.",
    author: "Alex Thompson",
    role: "Product Lead, TechNova",
    image: "/images/1.png"
  },
  {
    text: "From initial concept to final execution, the collaborative process exceeded all expectations. The results have set a new benchmark in our industry.",
    author: "Sarah Chen",
    role: "Creative Director, Studio Alpha",
    image: "/images/1.png"
  },
  {
    text: "A masterclass in user-centered design thinking. The solutions implemented have driven measurable improvements across all key performance metrics.",
    author: "Michael Zhou",
    role: "CTO, FutureLabs",
    image: "/images/1.png"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Client Voices - Brand Name</title>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Client Perspectives</h1>
          <p className="text-xl text-gray-600">Authentic experiences from industry leaders</p>
        </div>
      </section>

      {/* Testimonials Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {testimonials.map((item, index) => (
          <section 
            key={index}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32 items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Image Section */}
            {index % 2 === 0&& <div className="relative w-full aspect-video md:aspect-square rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.author}
                fill
                className="object-cover"
              />
            </div>}

            {/* Text Content */}
            <div className={`relative md:py-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              {/* Left Quote */}
              {index % 2 !== 0 && (
                <span className="absolute -top-4 left-0 text-8xl text-gray-200 font-serif">“</span>
              )}

              {/* Right Quote */}
              {index % 2 === 0 && (
                <span className="absolute -top-4 right-0 text-8xl text-gray-200 font-serif">”</span>
              )}
  
              <blockquote className="text-xl leading-relaxed text-black mb-8">
                {item.text}
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-md text-gray-500">{item.author}</p>
              </div>
            </div>
            {index % 2 !== 0&& <div className="relative w-full aspect-video md:aspect-square rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.author}
                fill
                className="object-cover"
              />
            </div>}
          </section>
        ))}
      </div>
    </>
  );
}