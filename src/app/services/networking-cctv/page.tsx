import type { Metadata } from "next";
import { Network, Camera, Wifi, MonitorSpeaker, Shield, Zap } from "lucide-react";
import { ServiceHero } from "@/components/service/service-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Networking & CCTV Solutions | Continuate IT Services",
  description: "Professional network infrastructure design and CCTV security systems. Complete connectivity and surveillance solutions for South African businesses.",
  keywords: [
    "network infrastructure",
    "CCTV installation",
    "IP cameras",
    "network design",
    "wireless solutions",
    "surveillance systems",
    "networking South Africa"
  ],
};

const benefits = [
  "Scalable Network Infrastructure",
  "High-Definition CCTV Systems", 
  "24/7 Remote Monitoring",
  "Professional Installation & Support"
];

const networkingServices = [
  {
    icon: <Network className="w-6 h-6" />,
    title: "Network Design & Implementation",
    description: "Custom network architecture designed for your business needs with scalable infrastructure and optimal performance."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Wireless Solutions",
    description: "Enterprise-grade wireless networks with seamless coverage, guest access, and advanced security features."
  },
  {
    icon: <MonitorSpeaker className="w-6 h-6" />,
    title: "Network Monitoring",
    description: "Proactive network monitoring and management to ensure optimal performance and minimize downtime."
  }
];

const cctvServices = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "IP Camera Systems",
    description: "High-definition IP cameras with advanced features like motion detection, night vision, and mobile access."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Access Control Integration",
    description: "Integrated access control systems combining CCTV monitoring with biometric and card-based entry."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Smart Analytics",
    description: "AI-powered video analytics for intelligent monitoring, facial recognition, and automated alerts."
  }
];

const packages = [
  {
    name: "Small Business",
    description: "Essential networking and security for small offices",
    features: [
      "Basic network setup (up to 20 devices)",
      "4-8 IP cameras installation",
      "Basic network monitoring", 
      "Guest Wi-Fi setup",
      "Remote viewing access",
      "6 months support"
    ],
    price: "From R25,000"
  },
  {
    name: "Professional",
    description: "Comprehensive solution for growing businesses",
    features: [
      "Advanced network infrastructure (up to 50 devices)",
      "8-16 HD IP cameras with analytics",
      "Wireless network with multiple access points",
      "Network security and firewall",
      "Cloud storage and backup",
      "12 months support with monitoring"
    ],
    price: "From R65,000",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Full-scale infrastructure for large organizations",
    features: [
      "Enterprise network design (unlimited devices)",
      "16+ 4K cameras with advanced analytics",
      "Redundant network infrastructure",
      "Advanced access control integration",
      "Custom integrations and APIs",
      "24/7 monitoring and support"
    ],
    price: "Custom Quote"
  }
];

export default function NetworkingCCTVPage() {
  return (
    <>
      <ServiceHero
        title="Networking & CCTV"
        subtitle="Complete Infrastructure Solutions"
        description="Professional network infrastructure and CCTV security systems that provide reliable connectivity and comprehensive surveillance for your business premises."
        benefits={benefits}
        icon={<Network className="w-6 h-6" />}
      />

      {/* Services Overview */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Complete Infrastructure Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From network design to surveillance systems, we provide end-to-end infrastructure 
            solutions that keep your business connected and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Networking Services */}
          <div>
            <div className="bg-black text-white rounded-lg p-6 mb-8">
              <Network className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Network Infrastructure</h3>
              <p className="text-gray-300">Reliable, scalable networking solutions</p>
            </div>
            
            <div className="space-y-6">
              {networkingServices.map((service, index) => (
                <Card key={index} className="hover-lift border border-gray-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CCTV Services */}
          <div>
            <div className="bg-black text-white rounded-lg p-6 mb-8">
              <Camera className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-2">CCTV & Surveillance</h3>
              <p className="text-gray-300">Advanced security monitoring systems</p>
            </div>
            
            <div className="space-y-6">
              {cctvServices.map((service, index) => (
                <Card key={index} className="hover-lift border border-gray-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Packages */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Complete Solution Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Integrated networking and CCTV packages designed for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`hover-lift relative ${pkg.popular ? 'border-blue-500 border-2' : 'border border-gray-200'} bg-white`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-black">{pkg.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/quote">
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Features Showcase */}
      <Section padding="xl" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Advanced Features & Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Remote Access & Monitoring",
                description: "Access your network and CCTV systems from anywhere using mobile apps and web portals."
              },
              {
                title: "Scalable Infrastructure",
                description: "Solutions that grow with your business, easily expandable as your needs evolve."
              },
              {
                title: "Professional Installation",
                description: "Certified technicians ensure proper installation with minimal business disruption."
              },
              {
                title: "Ongoing Support",
                description: "Comprehensive maintenance and support to keep your systems running optimally."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" background="black" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get a comprehensive assessment of your networking and security needs. 
            Our experts will design a solution that fits your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get Infrastructure Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Schedule Site Survey
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}