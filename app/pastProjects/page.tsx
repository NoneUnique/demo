// app/projects/past-projects/page.tsx
import { BuildingOffice2Icon, CalendarIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline'

const PastProjectsPage = () => {
  const projects = [
    {
      title: "Oceanview Passive Residence",
      location: "Malibu, CA",
      year: "2022",
      features: ["Net-Zero Energy", "Solar Integration", "Natural Ventilation"],
      description: "Luxury coastal home achieving LEED Platinum certification",
      image: "/projects/oceanview.jpg"
    },
    {
      title: "Urban Green Townhomes",
      location: "Seattle, WA",
      year: "2021",
      features: ["Rooftop Gardens", "Rainwater Harvesting", "Smart Home System"],
      description: "High-density sustainable housing in city center",
      image: "/projects/urban-green.jpg"
    },
    {
      title: "Mountain Retreat Estate",
      location: "Aspen, CO",
      year: "2020",
      features: ["Geothermal Heating", "Local Material Sourcing", "Wildlife Preservation"],
      description: "Energy-positive retreat in sensitive ecosystem",
      image: "/projects/mountain-retreat.jpg"
    },
    // Add more projects...
  ]

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <header className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built to Inspire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring our legacy of sustainable innovation through completed projects
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-100 rounded-t-xl relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                {/* Metadata */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li 
                      key={feature}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-600"
                    >
                      <SparklesIcon className="h-4 w-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's collaborate to create your sustainable dream home
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </main>
    </div>
  )
}

export default PastProjectsPage