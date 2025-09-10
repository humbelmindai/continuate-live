import type { Metadata } from "next";
import { ServicesOverview } from "@/components/home/services-overview";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "IT Services - Comprehensive Solutions | Continuate IT Services",
  description: "Explore our comprehensive range of IT services including managed services, networking, CCTV, cybersecurity, biometrics, and automation solutions across South Africa.",
  keywords: [
    "IT services South Africa",
    "managed IT services",
    "networking solutions", 
    "CCTV installation",
    "cybersecurity services",
    "biometric systems",
    "office automation",
    "IT support Johannesburg"
  ],
  openGraph: {
    title: "IT Services - Comprehensive Solutions | Continuate IT Services",
    description: "Explore our comprehensive range of IT services including managed services, networking, CCTV, cybersecurity, biometrics, and automation solutions across South Africa.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Professional IT Services
            <span className="block text-gray-600">Tailored for Your Business</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            From small businesses to large enterprises, we provide comprehensive IT solutions 
            that drive growth, enhance security, and streamline operations across South Africa.
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Additional Info Section */}
      <Section padding="lg" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6 text-center">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Comprehensive Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer end-to-end IT services from initial consultation and system design 
                  to implementation, ongoing support, and strategic planning for future growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Local Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  With over 15 years of experience in the South African market, we understand 
                  local business needs, compliance requirements, and infrastructure challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Scalable Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our services grow with your business. Whether you're a startup or an enterprise, 
                  our solutions scale to meet your evolving technology requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock monitoring and support ensure your systems stay operational 
                  with minimal downtime and maximum productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}