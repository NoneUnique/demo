// pages/showrooms.jsx
import { Image } from "@heroui/image";
const showrooms = [
  {
    id: "industry",
    title: "City of Industry",
    image: "https://assets.codepen.io/1159990/tokyo.jpg",
    details: {
      address: "15610 Valley Blvd, City of Industry, CA 91744",
      phone: "+1 626-456-7890",
      hours: "Mon-Fri: 9AM - 6PM\nSat: 10AM - 5PM",
      features: ["5000+ sqft", "Free Parking", "VR Experience"],
    },
  },
  {
    id: "irvine",
    title: "Irvine",
    image: "https://assets.codepen.io/1159990/tokyo.jpg",
    details: {
      address: "17011 Murphy Ave, Irvine, CA 92614",
      phone: "+1 949-789-1234",
      hours: "Mon-Sat: 10AM - 7PM\nSun: 11AM - 5PM",
      features: ["Smart Home Demo", "Cafe Lounge", "Eco Materials"],
    },
  },
];

export default function ShowroomsPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {showrooms.map((showroom) => (
          <section key={showroom.id} className="group relative">
            {/* 桌面端标题布局 */}
            <h2 className="hidden md:block absolute top-1/3 left-0 -translate-y-1/2 z-10 w-[45%] pr-8 text-4xl lg:text-5xl font-bold z-20 text-gray-900">
              {showroom.title}
            </h2>

            {/* 移动端标题 */}
            <h2 className="md:hidden text-3xl font-bold text-gray-900 mb-6 z-20	">
              {showroom.title}
            </h2>

            {/* 图片容器 */}
            <div className="relative md:w-[90%] md:ml-auto aspect-[4/3] rounded-2xl overflow-hidden">
              {/* <Image
                src={showroom.image}
                alt={showroom.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 90vw"
              /> */}
              <Image
                src={showroom.image}
                className="object-cover"
                width="100%"
                radius="md"

              />
            </div>

            {/* 详细信息模块 */}
            <div className=" mt-8 md:mt-12">
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm">
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-2">
                    address
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {showroom.details.address}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-700 mb-2">
                      bussiness time
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {showroom.details.hours}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-700 mb-2">
                      contact
                    </h3>
                    <p className="text-gray-600">{showroom.details.phone}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-emerald-700 mb-2"></h3>
                  <div className="flex flex-wrap gap-2">
                    {showroom.details.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
