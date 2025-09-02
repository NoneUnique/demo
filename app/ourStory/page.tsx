// pages/ourstory.js
import Image from 'next/image';
import Head from 'next/head';

export default function OurStory() {
  const commitments = [
    {title: 'Ethical Sourcing', desc: 'Responsible material selection' },
    {title: 'Sustainability', desc: 'Carbon neutral by 2025' },
    {title: 'Quality Focus', desc: 'Rigorous quality control' },
    {title: 'Community', desc: 'Supporting local artisans' }
  ];

  const alternatingContent = [
    {
      title: 'BUILDING THE FUTURE WITH VPH',
      text: "At VPH, we are committed to reshaping the future of construction with innovative, sustainable, and intelligent architectural technologies. Our solutions enhance energy efficiency, safety, and design excellence while creating comfortable and modern living spaces. Whether it's structural integrity, smart home automation, or eco-friendly materials, VPH delivers cutting-edge solutions tailored to tomorrow's needs. ",
      image: '/images/part1.webp',
      bg: 'white'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Story - Brand Name</title>
      </Head>

      {/* Founding Story Section */}
      <section className="py-4 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="md:w-1/2">
              <Image
                src="/images/part1.webp"
                alt="Founder"
                width={600}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Founder</h2>
              <p className="text-gray-600 mb-4">
              Sun Chao, the founder of Vieko Passive House, graduated from Southeast University in China in 2003. He then pursued further studies in the United Kingdom, earning a master's degree in International Business from the University of Dundee. Upon returning to China in 2005, he established Shanghai Shuohong Industrial Co., Ltd., specializing in air conditioning and electromechanical engineering. In 2012, he expanded his focus to the research of insulation technology and passive house construction. In 2018, he relocated to Irvine, California, where he continued pioneering advancements in sustainable building materials. In 2025, his vision will come to life with the construction of the first Vieko Passive House in Newport Beach, California, marking a significant milestone in the evolution of energy-efficient and eco-conscious architecture.
              </p>
              <p className="text-gray-600">
                "We believe in creating products that stand the test of time, both in quality and design."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-black text-white py-6 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4 text-center">Our Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((item, index) => (
              <div key={index} className="text-center p-2">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      {alternatingContent.map((section, index) => (
        <section 
          key={index} 
          className={`py-16 md:py-24 ${section.bg === 'black' ? 'bg-black text-white' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image Section */}
              <div className="md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
              
              {/* Text Content */}
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.title}</h2>
                <p className={section.bg === 'black' ? 'text-gray-300' : 'text-gray-600'}>
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}