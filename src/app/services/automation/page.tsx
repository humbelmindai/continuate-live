import type { Metadata } from "next";
import { Zap, Home, Lightbulb, Thermometer, Wifi, Cog } from "lucide-react";
import { ServiceHero } from "@/components/service/service-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Office Automation & IoT Solutions | Continuate IT Services",
  description: "Smart office automation and IoT solutions to streamline business processes, improve efficiency, and create intelligent work environments.",
  keywords: [
    "office automation",
    "IoT solutions",
    "smart office",
    "building automation",
    "process automation",
    "workflow optimization",
    "intelligent systems"
  ],
};

const benefits = [
  "Increased Operational Efficiency",
  "Reduced Energy Costs", 
  "Improved Employee Productivity",
  "Enhanced Security & Monitoring"
];

const automationSolutions = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Smart Building Management",
    description: "Integrated building automation systems for HVAC, lighting, security, and energy management."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Intelligent Lighting Systems",
    description: "Automated lighting control with motion sensors, daylight harvesting, and energy optimization."
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Climate Control Automation",
    description: "Smart HVAC systems with automated temperature control and energy efficiency optimization."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "IoT Device Integration",
    description: "Comprehensive IoT network setup with sensor monitoring and automated responses."
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Process Automation",
    description: "Workflow automation solutions to streamline repetitive tasks and improve productivity."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Energy Management Systems",
    description: "Smart energy monitoring and management to reduce costs and environmental impact."
  }
];

const automationTypes = [
  {
    category: "Office Environment",
    solutions: [
      "Automated lighting and blinds",
      "Smart meeting room booking",
      "Environmental monitoring",
      "Visitor management systems"
    ],
    benefits: "30% reduction in energy costs, improved employee comfort"
  },
  {
    category: "Security & Access",
    solutions: [
      "Automated door access control",
      "Smart surveillance systems",
      "Intrusion detection automation",
      "Emergency response systems"
    ],
    benefits: "Enhanced security, 24/7 monitoring, rapid incident response"
  },
  {
    category: "Facilities Management",
    solutions: [
      "Predictive maintenance systems",
      "Asset tracking and management",
      "Automated reporting",
      "Equipment monitoring"
    ],
    benefits: "Reduced maintenance costs, improved equipment lifespan"
  },
  {
    category: "Workflow Optimization",
    solutions: [
      "Document automation",
      "Approval workflow systems",
      "Data collection automation",
      "Reporting automation"
    ],
    benefits: "50% time savings on routine tasks, improved accuracy"
  }
];

const packages = [
  {
    name: "Smart Starter",
    description: "Basic automation for small offices",
    features: [
      "Smart lighting control (5 zones)",
      "Basic climate control",
      "Energy monitoring dashboard",
      "Mobile app control",
      "Installation and setup"
    ],
    price: "From R35,000"
  },
  {
    name: "Professional Automation",
    description: "Comprehensive automation for growing businesses",
    features: [
      "Full building automation system",
      "Advanced IoT device integration",
      "Custom workflow automation",
      "Energy optimization",
      "Analytics and reporting",
      "12 months support"
    ],
    price: "From R85,000",
    popular: true
  },
  {
    name: "Enterprise Solution",
    description: "Full-scale automation for large organizations",
    features: [
      "Custom automation platform",
      "Multi-site management",
      "AI-powered optimization",
      "Advanced analytics",
      "API integrations",
      "24/7 monitoring and support"
    ],
    price: "Custom Pricing"
  }
];

export default function AutomationPage() {
  return (
    <>
      <ServiceHero
        title="Office Automation"
        subtitle="Smart IoT Solutions"
        description="Transform your workspace with intelligent automation systems that optimize energy usage, enhance security, and streamline operations for maximum efficiency and productivity."
        benefits={benefits}
        icon={<Zap className="w-6 h-6" />}
      />

      {/* Automation Solutions */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Complete Automation Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From smart lighting to comprehensive building management systems, 
            our automation solutions create intelligent, efficient work environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationSolutions.map((solution, index) => (
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

      {/* Automation Categories */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Automation by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how automation can transform different aspects of your business operations 
            with measurable improvements in efficiency and cost savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automationTypes.map((type, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">{type.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {type.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-green-50 rounded-lg p-4 mt-4">
                  <div className="text-sm text-green-600 font-medium mb-1">Expected Benefits</div>
                  <div className="text-green-800 text-sm">{type.benefits}</div>
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
            Automation Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the automation solution that matches your business needs and growth plans.
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
                    Best Value
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
                      <Zap className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
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

      {/* ROI & Benefits */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Measurable Benefits & ROI
            </h2>
            <p className="text-lg text-gray-600">
              Our automation solutions deliver tangible benefits with rapid return on investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: "30%",
                label: "Energy Cost Reduction",
                description: "Average energy savings through smart automation"
              },
              {
                metric: "50%",
                label: "Time Savings",
                description: "Reduction in manual administrative tasks"
              },
              {
                metric: "18 Months",
                label: "Average ROI Period",
                description: "Typical payback period for automation investment"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover-lift">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold text-black mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              Additional Business Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Improved employee satisfaction and comfort",
                "Enhanced security and safety monitoring",
                "Predictive maintenance and reduced downtime",
                "Better compliance and reporting capabilities",
                "Increased property value and marketability",
                "Scalable solutions that grow with your business"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{benefit}</span>
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Transform your workplace with intelligent automation systems. 
            Get a free consultation and discover how much you can save with smart automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get Automation Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Schedule Assessment
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}