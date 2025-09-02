import React from 'react';
import SectionTitle from '../SectionTitle/sectionTitle';

const materials = [
  {
    title: "Doors & Windows",
    features: [
      { icon: "✔️", text: "Thermal-break design" },
      { icon: "✔️", text: "Fireproof/anti-theft features" },
    ],
  },
  {
    title: "Interior/Exterior Finishes",
    features: [
      { icon: "✔️", text: "Dual-layer ceramic coating" },
      { icon: "✔️", text: "Hidden functionality design" },
    ],
  },
  {
    title: "Roofing & Waterproofing",
    features: [
      { icon: "✔️", text: "Solar tiles (BIPV integration)" },
      { icon: "✔️", text: "Rigid bituminous/polymer membranes" },
    ],
  },
  {
    title: "Stone Applications",
    features: [
      {
        icon: "✔️",
        text: "Natural quartz/marble (Superior durability)",
      },
      {
        icon: "✔️",
        text: "Smart integration (Heated floor systems)",
      },
    ],
  },
];

const TechMaterial = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <SectionTitle color='text-white' title={'Building Materials'} desc='Our partner with leading brands to provide high-quality materials for your project'/>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {materials.map((material, index) => (
              <div key={index} className="rounded-lg bg-white/5 p-8 shadow-md">
                <h3 className="text-xl font-semibold text-white mb-4">{material.title}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {material.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-300">
                      <span className="mr-2 text-xl">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMaterial;