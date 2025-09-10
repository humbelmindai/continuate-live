import type { Metadata } from "next";
import { Server, Monitor, HardDrive, Wifi, Users, CheckCircle } from "lucide-react";
import { ServiceHero } from "@/components/service/service-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Office IT Setups | Continuate IT Services",
  description: "Professional office IT infrastructure setup including servers, workstations, networking, and software deployment for new offices and relocations.",
  keywords: [
    "office IT setup",
    "server installation",
    "workstation deployment",
    "network infrastructure",
    "office relocation IT",
    "new office setup",
    "IT infrastructure deployment"
  ],
};

const benefits = [
  "Complete IT Infrastructure Setup",
  "Minimal Business Disruption", 
  "Professional Installation & Configuration",
  "Comprehensive Testing & Documentation"
];

const setupServices = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "Server Installation & Configuration",
    description: "Professional server setup with operating system installation, security configuration, and backup solutions."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Workstation Deployment",
    description: "Complete workstation setup with software installation, user profiles, and security configurations."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Network Infrastructure",
    description: "Structured cabling, switch configuration, wireless network setup, and internet connectivity."
  },
  {
    icon: <HardDrive className="w-6 h-6" />,
    title: "Data Migration & Backup",
    description: "Secure data migration from existing systems with comprehensive backup and recovery solutions."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Training & Support",
    description: "Staff training on new systems with comprehensive documentation and ongoing support."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Testing & Quality Assurance",
    description: "Thorough system testing, performance optimization, and quality assurance before go-live."
  }
];

const officeTypes = [
  {
    type: "New Office Setup",
    description: "Complete IT infrastructure for new business locations",
    timeline: "2-3 weeks",
    includes: [
      "Site survey and planning",
      "Network infrastructure installation",
      "Server and workstation deployment",
      "Software installation and configuration",
      "Security system setup",
      "Staff training and documentation"
    ]
  },
  {
    type: "Office Relocation",
    description: "Seamless IT migration to new premises",
    timeline: "1-2 weeks",
    includes: [
      "Pre-move planning and coordination",
      "Equipment inventory and labeling",
      "Secure data backup and migration",
      "Physical equipment relocation",
      "Network reconstruction and testing",
      "System restoration and validation"
    ]
  },
  {
    type: "Office Expansion",
    description: "IT infrastructure scaling for business growth",
    timeline: "1 week",
    includes: [
      "Capacity planning and assessment",
      "Additional workstation setup",
      "Network infrastructure expansion",
      "Server capacity upgrades",
      "Software license management",
      "Integration testing"
    ]
  }
];

const packages = [
  {
    name: "Small Office",
    description: "Perfect for startups and small businesses (5-15 employees)",
    features: [
      "Basic server setup",
      "Up to 15 workstations",
      "Network infrastructure",
      "Wireless network setup",
      "Basic security configuration",
      "Email and file sharing setup",
      "2 weeks implementation"
    ],
    price: "From R75,000"
  },
  {
    name: "Professional Office",
    description: "Comprehensive setup for growing businesses (15-50 employees)",
    features: [
      "Advanced server configuration",
      "Up to 50 workstations",
      "Structured cabling system",
      "Advanced network security",
      "Backup and disaster recovery",
      "Custom software deployment",
      "Staff training included"
    ],
    price: "From R180,000",
    popular: true
  },
  {
    name: "Enterprise Office",
    description: "Full-scale setup for large organizations (50+ employees)",
    features: [
      "Multiple server deployment",
      "Unlimited workstations",
      "Enterprise network architecture",
      "Advanced security systems",
      "Cloud integration services",
      "24/7 monitoring setup",
      "Project management included"
    ],
    price: "Custom Pricing"
  }
];

export default function OfficeSetupsPage() {
  return (
    <>
      <ServiceHero
        title="Office IT Setups"
        subtitle="Complete Infrastructure Deployment"
        description="Professional office IT setup services for new locations, relocations, and expansions. From servers to workstations, we handle every aspect of your IT infrastructure deployment."
        benefits={benefits}
        icon={<Server className="w-6 h-6" />}
      />

      {/* Setup Services */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Complete Office IT Setup Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial planning to final testing, we provide comprehensive IT setup services 
            that ensure your new office is fully operational from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {setupServices.map((service, index) => (
            <Card key={index} className="hover-lift border border-gray-200">
              <CardHeader>
                <div className="bg-black text-white rounded-lg p-3 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Office Types */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Office Setup Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored IT setup solutions for different business scenarios with 
            optimized timelines and minimal operational disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {officeTypes.map((office, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">{office.type}</CardTitle>
                <p className="text-gray-600 mb-4">{office.description}</p>
                <div className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full w-fit">
                  Timeline: {office.timeline}
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {office.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Setup Packages */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Office Setup Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive office IT setup packages designed for businesses of all sizes.
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
                      <Server className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
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

      {/* Implementation Process */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach that ensures successful office IT setup with minimal disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Planning", 
                desc: "Site survey, requirements analysis, and detailed project planning with timeline" 
              },
              { 
                step: "2", 
                title: "Procurement", 
                desc: "Equipment sourcing, software licensing, and pre-configuration preparation" 
              },
              { 
                step: "3", 
                title: "Installation", 
                desc: "Professional installation, configuration, and integration of all systems" 
              },
              { 
                step: "4", 
                title: "Validation", 
                desc: "Comprehensive testing, user training, and final documentation delivery" 
              }
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

      {/* Success Metrics */}
      <Section padding="lg" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black text-center mb-8">
              Our Setup Success Record
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "200+", label: "Offices Set Up" },
                { metric: "99%", label: "On-Time Completion" },
                { metric: "100%", label: "Client Satisfaction" },
                { metric: "24hrs", label: "Average Go-Live Time" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" background="black" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Planning a New Office or Relocation?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let our experts handle your office IT setup from start to finish. 
            Get a detailed project plan and quote for your office IT requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get Project Quote
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