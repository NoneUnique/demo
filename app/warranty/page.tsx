// app/warranty/page.tsx
import {
  CheckBadgeIcon,
  ClockIcon,
  PhoneIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import CtaSection from "@/components/CtaSection";
import HowItWorks from "@/components/HowItWork";

const WarrantyPage = () => {
  const coverageItems = [
    {
      title: "Structural Warranty",
      duration: "25 years",
      icon: CheckBadgeIcon,
      details: [
        "Foundation integrity",
        "Load-bearing walls and foundation",
        "Roof structure system",
      ],
    },
    {
      title: "System Warranty",
      duration: "10 years",
      icon: ClockIcon,
      details: ["HVAC system", "Electrical wiring system", "Plumbing system"],
    },
    {
      title: "Material Craftsmanship",
      duration: "5 years",
      icon: LifebuoyIcon,
      details: [
        "Exterior wall materials",
        "Window and door seals",
        "Interior finishes",
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Issue Reporting",
      description:
        "Submit warranty claims via online form or customer service hotline",
    },
    {
      step: 2,
      title: "Diagnosis Assessment",
      description:
        "Arrange for a professional engineer to inspect on-site within 48 hours",
    },
    {
      step: 3,
      title: "Plan Confirmation",
      description: "Provide a written repair plan and timeline",
    },
    {
      step: 4,
      title: "Repair Execution",
      description: "Use original parts for standardized repairs",
    },
  ];

  const faqs = [
    {
      question: "Does the warranty cover damages caused by natural disasters?",
      answer:
        "Our standard warranty covers material craftsmanship defects, and we offer additional insurance options for force majeure events.",
    },
    {
      question: "How can I verify my warranty eligibility?",
      answer:
        "All warranty rights are tied to property ownership and can be verified through our online system.",
    },
    {
      question: "Do second-hand owners enjoy the same warranty?",
      answer:
        "Yes, our warranty rights transfer with the property, and subsequent owners enjoy the remaining warranty period.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Residential Quality Assurance Program
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            We provide industry-leading comprehensive warranty protection for
            all newly built homes, ensuring your investment is safe and
            worry-free.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Warranty Coverage */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warranty Coverage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our tiered warranty system provides comprehensive protection, from
              structural foundations to finishing details.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverageItems.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <item.icon className="h-12 w-12 text-gray-600 mb-6" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm w-fit mb-4">
                  Coverage Period: {item.duration}
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center text-gray-600"
                    >
                      <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <HowItWorks
          title="Warranty Service Process"
          features={processSteps}
          imageUrl={"/demo/images/2.png"} dark         ></HowItWorks>
        {/* Frequently Asked Questions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pt-8">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="ml-2 transform group-open:rotate-180 transition-transform">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Module */}
        <CtaSection
          title="Need Immediate Assistance?"
          description="Our warranty service team is on standby 24/7."
          buttonText="Contact Support"
          icon={<PhoneIcon className="h-8 w-8 text-white" />}
        />
      </main>
    </div>
  );
};

export default WarrantyPage;
