// import { Button } from "@headlessui/react";
// import Link from "next/link";
// import  Image  from "next/image";
// import CustomSwiper from "../CustomSwiper/CustomSwiper";
// export default function HouseType  () {
//     return (
//         <section className="max-w-full mx-auto ">
//         <div className="py-6 px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Custom Home Card */}
//             <div className="relative ">
//               <Image
//                 src="/demo/images/part01.jpg"
//                 alt="Custom Home"
//                 className="object-cover"
//               />
//               <div className="absolute top-0 left-0 lg:p-8 p-3 text-white z-10">
//                 <h2 className="lg:text-3xl font-bold mb-4">Custom Home</h2>
//                 <p className="mb-6">
//                   designed to meet your unique needs and preferences.
//                 </p>
//                 <div className="space-y-6">
//                   <Link href="/modals">
//                     <Button color="secondary" className="mr-2">
//                       visite products
//                     </Button>
//                   </Link>
//                   <Link href="/modals">
//                     <Button color="success">How it works →</Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Tiny House Card */}
//             <div className="relative ">
//               <Image
//                 src="/demo/images/part01.jpg"
//                 alt="Tiny House"
//                 className="object-cover"
//               />
//               <div className="absolute top-0 left-0 lg:p-8 p-3 text-white z-10">
//                 <h2 className="lg:text-3xl font-bold mb-4">Tiny House</h2>
//                 <p className="mb-6">
//                   perfect for those looking to downsize or simplify their lives.
//                 </p>
//                 <div className="space-y-6">
//                   <Link href="/modals">
//                     <Button color="secondary" className="mr-2">
//                       visite products
//                     </Button>
//                   </Link>
//                   <Link href="/modals">
//                     <Button color="success">How it works →</Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <CustomSwiper
//           className="py-6"
//           slideNum={1}
//           navigation={false}
//           pagination
//           autoplay={true}
//           loop={true}
//         >
//           {["VCH01", "VTH64", "VTH256", "VTHT150", "VTHS200", "VTHL460"].map(
//             (item, index) => (
//               <div className="swiper-slide">
//                 <h2 className="text-4xl	 text-center">{item}</h2>
//                 <img
//                   className="box-border w-full h-auto mb-4"
//                   src="/demo/images/part01.jpg"
//                 />
//               </div>
//             )
//           )}
//         </CustomSwiper>
//       </section>
// }