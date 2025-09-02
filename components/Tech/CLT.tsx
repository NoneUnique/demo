export default function CLTSection() {
  const specs = [
    {
      title: 'Strength & Structural Performance',
      description: 'High load-bearing capacity with exceptional stability.',
    },
    {
      title: 'Sustainability & Environmental Benefits',
      description: 'Renewable material with a reduced carbon footprint.',
    },
    {
      title: 'Faster & Cost-Effective Construction',
      description: 'Prefabrication allows rapid assembly, reducing labor costs.',
    },
    {
      title: 'Fire Resistance',
      description: 'Inherent charring properties provide superior fire protection.',
    },
    {
      title: 'Thermal & Acoustic Performance',
      description: 'Natural insulation for enhanced energy efficiency and comfort.',
    },
    {
      title: 'Design Flexibility & Aesthetic Appeal',
      description: 'Modern, natural, and customizable solutions.',
    },
    {
      title: 'Health & Well-Being Benefits',
      description: 'Creates a warm and comfortable indoor environment.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 md:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            CLT (Cross-Laminated Timber)
          </h2>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {specs.map((spec, index) => (
            <div 
              key={index}
              className="border-t border-gray-200 pt-4"
            >
              <dt className="font-medium text-gray-900">{spec.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">{spec.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}