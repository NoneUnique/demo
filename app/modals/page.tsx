import { title } from "@/components/primitives";
import SectionTitle from "@/components/SectionTitle/sectionTitle";
import StepChart from "@/components/Steps/StepChart";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
const products = [
  {
    id: "vch01",
    badge: "CUSTOM",
    type: "CUSTOM HOME",
    title: "VCH01",
    image: "/images/2.png",
    specs: [
      { label: "Area", value: "240㎡" },
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "3" },
    ],
    price: "￥6,800,000",
  },
  {
    id: "vth64",
    badge: "TINY",
    type: "TINY HOUSE",
    title: "VTH64",
    image: "/images/2.png",
    specs: [
      { label: "Area", value: "64㎡" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "1" },
    ],
    price: "￥298,000",
  },
];
const howItWork = {
  title: "How it work",
  desc: "From configuration to completion in as few  months.",
};
const steps = [
  { title: "Site Visit", side: "right" },
  { title: "Sign Off", side: "left" },
  { title: "Design", time: "6 month" },
  { title: "Permit", time: "6 month", side: "left" },
  { title: "Site Prep", time: "3 month" },
  { title: "Transport", time: "1 month", side: "center" },
  { title: "Crane In", time: "1 month" },
  { title: "Exterior and Interior Assembly", time: "3 month", side: "left" },
  { title: "Finish Works", time: "3 month", side: "final" },
];
const steps2 = [
  { title: "Site Visit" },
  { title: "Sign Off" },
  { title: "Manufacturing", duration: "3 month" },
  { title: "Transport", duration: "1 month" },
  { title: "Crane In", duration: "1 month" },
  { title: "Exterior and Interior Assembly", duration: "1 week" },
];
export default function ModalsPage() {
  return (
    <main className="container mx-auto px-4  w-full">
      {/* 产品网格容器 */}
      <section className="md:py-12 ">
        <SectionTitle
          title={howItWork.title}
          desc={howItWork.desc}
        ></SectionTitle>
        <StepChart items={steps}></StepChart>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 px-4 py-1 text-sm font-medium text-emerald-700 rounded-full shadow-sm">
                  {product.badge}
                </span>
              </div>

              <div className="p-6">
                <div className="text-sm  text-emerald-600 mb-2">
                  {product.type}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className="text-gray-900 font-medium">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-emerald-600">
                    {product.price}
                  </div>
                  <Link
                    href={`/modalsDetail?${product.id}`}
                    className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Show More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
