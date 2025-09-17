import type { Metadata } from "next";
import { Handshake, TrendingUp, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White-label IT Partnership Program | Continuate IT Services",
  description: "Join our white-label IT services partnership program. Expand your service offerings with our comprehensive IT solutions and expert support team.",
  keywords: [
    "white-label IT services",
    "IT partnership program",
    "reseller program",
    "IT services partner",
    "white-label partnership",
    "IT business opportunity"
  ],
};

// Partnership benefits are now defined in partnershipBenefits array below

const partnershipBenefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Grow Your Revenue",
    description: "Add comprehensive IT services to your offerings and increase recurring revenue streams."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Support Team",
    description: "Access to our experienced technicians and support staff to deliver services under your brand."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Service Quality",
    description: "Leverage our 15+ years of experience and established service delivery processes."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Full White-label Solution",
    description: "Complete branding flexibility - services delivered under your company name and branding."
  }
];

const partnerTypes = [
  {
    type: "IT Consultants",
    description: "Expand beyond consulting into managed services",
    benefits: [
      "Add recurring revenue streams",
      "Offer complete IT solutions",
      "Focus on strategy while we handle delivery",
      "Scale without hiring technical staff"
    ]
  },
  {
    type: "Marketing Agencies",
    description: "Offer comprehensive IT services to your clients",
    benefits: [
      "Become a full-service technology partner",
      "Increase client retention and value",
      "Cross-sell IT services to existing clients",
      "Additional revenue without technical overhead"
    ]
  },
  {
    type: "Business Consultants",
    description: "Add IT expertise to your business solutions",
    benefits: [
      "Provide complete digital transformation",
      "Support business process improvements with IT",
      "Offer integrated business and IT solutions",
      "Increase project scope and value"
    ]
  },
  {
    type: "Independent Resellers",
    description: "Start your IT services business with our platform",
    benefits: [
      "Proven business model and processes",
      "Complete technical infrastructure",
      "Sales and marketing support",
      "Fast market entry"
    ]
  }
];

const services = [
  "IT Managed Services",
  "Network Infrastructure",
  "Cybersecurity Solutions", 
  "CCTV & Surveillance",
  "Biometric Systems",
  "Office Automation",
  "Server & Workstation Setup",
  "Cloud Solutions",
  "Backup & Recovery",
  "Help Desk Support",
  "24/7 Monitoring",
  "Emergency Response"
];

const partnershipLevels = [
  {
    name: "Authorized Partner",
    description: "Entry-level partnership for new partners",
    requirements: [
      "Basic IT knowledge",
      "Existing client base",
      "Commitment to service quality",
      "Complete partner training"
    ],
    benefits: [
      "20% commission on all services",
      "Partner training program",
      "Marketing materials and support",
      "Technical support included"
    ]
  },
  {
    name: "Preferred Partner",
    description: "Advanced partnership with enhanced benefits",
    requirements: [
      "12+ months as Authorized Partner",
      "R500k+ annual revenue",
      "Customer satisfaction > 95%",
      "Technical certification completion"
    ],
    benefits: [
      "25% commission on all services",
      "Priority technical support",
      "Co-branded marketing campaigns",
      "Dedicated account manager",
      "Advanced training modules"
    ],
    popular: true
  },
  {
    name: "Premium Partner",
    description: "Top-tier partnership for established partners",
    requirements: [
      "24+ months partnership history",
      "R2M+ annual revenue",
      "Regional market leadership",
      "Advanced certifications"
    ],
    benefits: [
      "30% commission on all services",
      "Exclusive territory rights",
      "Custom service packages",
      "Joint business planning",
      "Executive relationship management"
    ]
  }
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            White-label IT Partnership Program
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Expand your business with our comprehensive white-label IT services. 
            Leverage our expertise, infrastructure, and support team to grow your revenue and serve your clients better.
          </p>
        </div>
      </Section>

      {/* Partnership Benefits */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join South Africa's leading IT services provider and offer world-class solutions 
            under your own brand with our complete white-label program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnershipBenefits.map((benefit, index) => (
            <Card key={index} className="hover-lift border border-gray-200">
              <CardHeader>
                <div className="bg-black text-white rounded-lg p-3 w-fit mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Partner Types */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Perfect for These Business Types
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our white-label program is designed for various business types looking 
            to expand their service offerings with professional IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partnerTypes.map((partner, index) => (
            <Card key={index} className="hover-lift border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">{partner.type}</CardTitle>
                <p className="text-gray-600">{partner.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Available */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Complete Service Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offer your clients a comprehensive range of IT services under your brand, 
            all backed by our technical expertise and support infrastructure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium text-black">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership Levels */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Partnership Levels & Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Progressive partnership levels with increasing benefits and support 
            as your business grows with our program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnershipLevels.map((level, index) => (
            <Card 
              key={index} 
              className={`hover-lift relative ${level.popular ? 'border-blue-500 border-2' : 'border border-gray-200'} bg-white`}
            >
              {level.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-black">{level.name}</CardTitle>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-black mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {level.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Success Metrics */}
      <Section padding="lg" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black text-center mb-8">
              Partnership Program Success
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "50+", label: "Active Partners" },
                { metric: "R50M+", label: "Partner Revenue Generated" },
                { metric: "95%", label: "Partner Satisfaction" },
                { metric: "3x", label: "Average Revenue Growth" }
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

      {/* Application Process */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              How to Become a Partner
            </h2>
            <p className="text-lg text-gray-600">
              Simple 4-step process to join our white-label partnership program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Apply", 
                desc: "Submit your partnership application with business details and goals" 
              },
              { 
                step: "2", 
                title: "Evaluation", 
                desc: "Our team reviews your application and assesses partnership fit" 
              },
              { 
                step: "3", 
                title: "Training", 
                desc: "Complete our comprehensive partner training and certification program" 
              },
              { 
                step: "4", 
                title: "Launch", 
                desc: "Start offering white-label IT services with our full support" 
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

      {/* CTA Section */}
      <Section padding="xl" background="black" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Partnership Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join South Africa's leading white-label IT services program and transform 
            your business with comprehensive IT solutions and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Apply for Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Schedule Partnership Discussion
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}