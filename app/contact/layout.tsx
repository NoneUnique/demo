import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import { siteConfig } from "@/config/site";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid gap-12 md:grid-cols-2">
          {/* 左侧联系信息 */}
          <div className="space-y-8">
            <div className="border-b pb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
                Contact Support
              </h1>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  If you have been affected by the LA fires and need support,
                  our dedicated Build Specialist will connect with you within
                  24 hours:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Designated email:</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Direct line:</p>
                      <a
                        href={`tel:${siteConfig.tel}`}
                        className="text-gray-900 hover:text-blue-600 text-xl font-semibold transition-colors"
                      >
                        {siteConfig.tel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <PhoneIcon className="h-6 w-6 text-green-600" />
                Sales Support
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Available:</p>
                    <p className="text-gray-600">
                      Mon-Fri 9am–5pm (PST, MST, CT)<br />
                      <span className="text-sm">24/7 emergency support</span>
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${siteConfig.tel}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call {siteConfig.tel}
                </a>
              </div>
            </div>
          </div>

          {/* 右侧联系表单 */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}