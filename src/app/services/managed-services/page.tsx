import type { Metadata } from "next";
import { Monitor, Clock, Shield, Headphones, TrendingUp, AlertTriangle } from "lucide-react";
import { ServiceHero } from "@/components/service/service-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Managed Services - 24/7 Support & Monitoring | Continuate IT Services",
  description: "Professional IT managed services with 24/7 monitoring, proactive maintenance, help desk support, and strategic IT consulting for South African businesses.",
  keywords: [
    "IT managed services",
    "24/7 IT support",
    "IT monitoring",
    "help desk services",
    "IT consulting",
    "proactive IT maintenance",
    "managed IT South Africa"
  ],
};

const serviceFeatures = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "24/7 System Monitoring",
    description: "Continuous monitoring of your IT infrastructure to detect and resolve issues before they impact your business operations."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Help Desk Support",
    description: "Dedicated help desk with certified technicians providing fast resolution to user issues and technical queries."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Proactive Maintenance",
    description: "Regular system updates, patches, and maintenance to keep your infrastructure secure and running optimally."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Continuous performance monitoring and optimization to ensure maximum efficiency and productivity."
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Incident Response",
    description: "Rapid response to critical incidents with escalation procedures and comprehensive resolution tracking."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Strategic Planning",
    description: "Long-term IT strategy development and technology roadmap planning aligned with your business goals."
  }
];

const benefits = [
  "Reduce IT costs by up to 40%",
  "99.9% uptime guarantee", 
  "Predictable monthly IT expenses",
  "Access to enterprise-level expertise",
  "Focus on core business activities",
  "Scalable solutions that grow with you"
];

const serviceLevels = [
  {
    name: "Essential",
    description: "Basic monitoring and support for small businesses",
    features: [
      "Business hours support (8x5)",
      "Basic system monitoring",
      "Email and phone support",
      "Monthly system reports",
      "Patch management"
    ],
    price: "From R2,500/month"
  },
  {
    name: "Professional",
    description: "Comprehensive managed services for growing businesses",
    features: [
      "24/7 monitoring and support",
      "Proactive maintenance",
      "Priority response times",
      "Advanced security monitoring",
      "Quarterly business reviews",
      "Strategic IT planning"
    ],
    price: "From R7,500/month",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Full-scale IT management for large organizations",
    features: [
      "Dedicated account manager",
      "Custom SLA agreements",
      "Advanced analytics and reporting",
      "Compliance management",
      "Disaster recovery planning",
      "24/7 on-site support options"
    ],
    price: "Custom pricing"
  }
];

export default function ManagedServicesPage() {
  return (
    <>
      <ServiceHero
        title="IT Managed Services"
        subtitle="Complete IT Management Solutions"
        description="Comprehensive IT support and management services that keep your business running smoothly while you focus on growth. Our expert team monitors, maintains, and optimizes your technology infrastructure 24/7."
        benefits={benefits}
        icon={<Monitor className="w-6 h-6" />}
      />

      {/* Service Features */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Comprehensive IT Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our managed services cover every aspect of your IT infrastructure, 
            from day-to-day support to strategic planning and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceFeatures.map((feature, index) => (
            <Card key={index} className="hover-lift border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="bg-black text-white rounded-lg p-4 w-fit mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service Levels */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Choose Your Service Level
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible managed service plans designed to meet the unique needs 
            and budgets of businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceLevels.map((level, index) => (
            <Card 
              key={index} 
              className={`hover-lift transition-all duration-300 ${
                level.popular 
                  ? 'border-2 border-black bg-white shadow-lg' 
                  : 'border border-gray-200 bg-white'
              }`}
            >
              <CardContent className="p-8">
                {level.popular && (
                  <div className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-black mb-4">
                  {level.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                
                <div className="text-3xl font-bold text-black mb-6">
                  {level.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full ${level.popular ? '' : 'variant-outline'}`}
                  variant={level.popular ? 'default' : 'outline'}
                >
                  <Link href="/quote">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section padding="xl" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to implementing and managing your IT infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "Comprehensive evaluation of your current IT infrastructure and needs" },
              { step: "2", title: "Planning", desc: "Strategic roadmap development with clear milestones and objectives" },
              { step: "3", title: "Implementation", desc: "Seamless deployment and integration with minimal business disruption" },
              { step: "4", title: "Optimization", desc: "Continuous monitoring, maintenance, and performance improvement" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
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
            Ready to Transform Your IT Management?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let our experts assess your current IT infrastructure and design a 
            managed services solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get Free Assessment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Speak to Consultant
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}