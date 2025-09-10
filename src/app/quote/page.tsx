import type { Metadata } from "next";
import { Calculator, CheckCircle, Clock, Shield } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Get Free IT Services Quote | Continuate IT Services",
  description: "Request a free, detailed quote for IT managed services, networking, cybersecurity, and automation solutions. Professional assessment and transparent pricing.",
  keywords: [
    "IT services quote",
    "free IT assessment", 
    "IT services pricing",
    "managed services quote",
    "IT consultation South Africa"
  ],
};

const quoteProcess = [
  {
    step: "1",
    title: "Submit Request",
    description: "Tell us about your IT needs and current challenges through our detailed form."
  },
  {
    step: "2", 
    title: "Free Assessment",
    description: "Our experts will evaluate your requirements and conduct a comprehensive IT assessment."
  },
  {
    step: "3",
    title: "Custom Proposal",
    description: "Receive a detailed, tailored proposal with transparent pricing and implementation timeline."
  },
  {
    step: "4",
    title: "Consultation",
    description: "Review the proposal with our team and refine the solution to perfectly match your needs."
  }
];

const benefits = [
  {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    text: "No obligation, completely free assessment"
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-500" />,
    text: "Detailed quote within 24 business hours"
  },
  {
    icon: <Shield className="w-5 h-5 text-purple-500" />,
    text: "Transparent pricing with no hidden costs"
  },
  {
    icon: <Calculator className="w-5 h-5 text-orange-500" />,
    text: "Custom solutions tailored to your budget"
  }
];

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Get Your Free IT Services Quote
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Professional IT solutions tailored to your business needs. Get a comprehensive, 
            no-obligation quote from South Africa's leading IT services provider.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                {benefit.icon}
                <span className="ml-3 text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote Form and Process */}
      <Section padding="xl" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quote Form */}
          <div>
            <ContactForm
              title="Request Your Quote"
              description="Provide details about your IT needs and we'll create a custom solution."
              submitButtonText="Request Quote"
            />
          </div>

          {/* Process and Additional Info */}
          <div className="space-y-8">
            {/* Quote Process */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                How Our Quote Process Works
              </h2>
              <div className="space-y-6">
                {quoteProcess.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  What's Included in Your Quote
                </h3>
                <ul className="space-y-3">
                  {[
                    "Comprehensive IT infrastructure assessment",
                    "Detailed breakdown of recommended services",
                    "Transparent pricing for all components",
                    "Implementation timeline and milestones",
                    "ROI analysis and cost-benefit breakdown",
                    "Ongoing support and maintenance options",
                    "Scalability planning for future growth",
                    "Compliance and security recommendations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <div className="bg-black text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Our Quote Guarantee</h3>
              <p className="text-gray-300 text-sm mb-4">
                We stand behind our quotes with complete transparency and professionalism:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  No hidden fees or surprise charges
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Fixed pricing valid for 30 days
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Detailed explanation of all costs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  No obligation to proceed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Areas */}
      <Section padding="lg" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            Popular Quote Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Managed IT Services",
                description: "Complete IT management and support",
                features: ["24/7 monitoring", "Help desk support", "Proactive maintenance"]
              },
              {
                title: "Cybersecurity Solutions", 
                description: "Comprehensive security protection",
                features: ["Security assessments", "Firewall management", "Compliance support"]
              },
              {
                title: "Network & Infrastructure",
                description: "Modern, scalable IT infrastructure",
                features: ["Network design", "CCTV systems", "Server installations"]
              }
            ].map((category, index) => (
              <Card key={index} className="hover-lift bg-white border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-1">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Looking for something specific? Our experts can create custom solutions 
              for any IT challenge your business faces.
            </p>
          </div>
        </div>
      </Section>

      {/* Emergency Contact */}
      <Section padding="lg" background="black" className="text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Immediate Support?
          </h2>
          <p className="text-gray-300 mb-6">
            Can't wait for a quote? Our emergency support team is available 24/7 
            for critical IT issues that need immediate attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white text-black px-6 py-3 rounded-lg">
              <div className="text-sm font-medium">Emergency Hotline</div>
              <div className="text-lg font-bold">+27 (0)82 123 4567</div>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">
              <div className="text-sm font-medium">General Inquiries</div>
              <div className="text-lg font-bold">+27 (0)11 123 4567</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}