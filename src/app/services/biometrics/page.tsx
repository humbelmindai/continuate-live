import type { Metadata } from "next";
import { Fingerprint, Clock, Users, Smartphone, Shield, TrendingUp } from "lucide-react";
import { ServiceHero } from "@/components/service/service-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biometric Solutions | Continuate IT Services",
  description: "Advanced biometric access control systems for enhanced security and time management. Fingerprint readers, facial recognition, and HR system integration.",
  keywords: [
    "biometric systems",
    "fingerprint access control",
    "facial recognition",
    "time and attendance",
    "access control systems",
    "biometric security",
    "HR system integration"
  ],
};

const benefits = [
  "Enhanced Security & Access Control",
  "Accurate Time & Attendance", 
  "Seamless HR System Integration",
  "Reduced Administrative Overhead"
];

const biometricSolutions = [
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Fingerprint Access Control",
    description: "Advanced fingerprint recognition systems for secure access control with fast, accurate identification."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Facial Recognition Systems",
    description: "AI-powered facial recognition technology for contactless access control and visitor management."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time & Attendance Management",
    description: "Comprehensive time tracking solutions with automated payroll integration and detailed reporting."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Access Control",
    description: "Smartphone-based access control with biometric verification and remote management capabilities."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Multi-Factor Authentication",
    description: "Enhanced security with combined biometric and traditional authentication methods."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Analytics & Reporting",
    description: "Detailed access analytics, attendance reports, and security insights for better decision making."
  }
];

const applications = [
  {
    title: "Office Buildings",
    description: "Secure access control for corporate offices with visitor management and time tracking.",
    features: ["Employee access control", "Visitor management", "Meeting room booking", "Time & attendance"]
  },
  {
    title: "Manufacturing Facilities",
    description: "Industrial-grade biometric systems for secure production environments.",
    features: ["Shift management", "Safety compliance", "Equipment access", "Production tracking"]
  },
  {
    title: "Healthcare Facilities",
    description: "HIPAA-compliant biometric solutions for medical facilities and patient data protection.",
    features: ["Patient data security", "Staff access control", "Medicine cabinet access", "Compliance reporting"]
  },
  {
    title: "Educational Institutions",
    description: "Student and staff management systems with parent communication features.",
    features: ["Student attendance", "Campus security", "Parent notifications", "Exam security"]
  }
];

const packages = [
  {
    name: "Basic Access",
    description: "Essential biometric access control for small businesses",
    features: [
      "Single door access control",
      "Up to 100 user database",
      "Basic reporting",
      "Fingerprint recognition",
      "Installation and setup"
    ],
    price: "From R15,000"
  },
  {
    name: "Professional System",
    description: "Comprehensive biometric solution for growing businesses",
    features: [
      "Multi-door access control",
      "Up to 500 user database",
      "Time & attendance tracking",
      "HR system integration",
      "Mobile app access",
      "Advanced reporting",
      "12 months support"
    ],
    price: "From R45,000",
    popular: true
  },
  {
    name: "Enterprise Solution",
    description: "Full-scale biometric management for large organizations",
    features: [
      "Unlimited doors and users",
      "Facial recognition technology",
      "Advanced analytics dashboard",
      "Multi-site management",
      "API integrations",
      "24/7 monitoring",
      "Custom development"
    ],
    price: "Custom Pricing"
  }
];

export default function BiometricsPage() {
  return (
    <>
      <ServiceHero
        title="Biometric Solutions"
        subtitle="Advanced Access Control Systems"
        description="Secure your premises and streamline workforce management with advanced biometric technologies including fingerprint recognition, facial identification, and integrated time tracking systems."
        benefits={benefits}
        icon={<Fingerprint className="w-6 h-6" />}
      />

      {/* Biometric Solutions */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Complete Biometric Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From basic access control to comprehensive workforce management, 
            our biometric solutions provide enhanced security and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {biometricSolutions.map((solution, index) => (
            <Card key={index} className="hover-lift border border-gray-200">
              <CardHeader>
                <div className="bg-black text-white rounded-lg p-3 w-fit mb-4">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Applications */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Industry Applications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our biometric solutions are tailored for various industries with specific 
            requirements for security, compliance, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">{app.title}</CardTitle>
                <p className="text-gray-600">{app.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solution Packages */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Biometric System Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the biometric solution that best fits your security needs and budget requirements.
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
                      <Fingerprint className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
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

      {/* Features & Benefits */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Why Choose Our Biometric Systems?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "99.9% Accuracy Rate",
                description: "Advanced algorithms ensure accurate identification with minimal false positives or negatives."
              },
              {
                title: "Fast Recognition Speed",
                description: "Sub-second identification for seamless user experience without bottlenecks."
              },
              {
                title: "POPIA Compliant",
                description: "Full compliance with South African data protection regulations and privacy laws."
              },
              {
                title: "Scalable Architecture",
                description: "Systems that grow with your business from single door to enterprise-wide deployment."
              },
              {
                title: "Integration Ready",
                description: "Seamless integration with existing HR, payroll, and security management systems."
              },
              {
                title: "24/7 Monitoring",
                description: "Round-the-clock system monitoring with proactive maintenance and support."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover-lift">
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
            Ready to Enhance Your Security?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Upgrade to advanced biometric access control and time management systems. 
            Get a free consultation and customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get System Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}