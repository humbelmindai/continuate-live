import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO } from "@/lib/constants/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Get Expert IT Support | Continuate IT Services",
  description: "Contact Continuate IT Services for professional IT support, consultation, and solutions. Multiple ways to reach us including 24/7 emergency support across South Africa.",
  keywords: [
    "contact IT support",
    "IT consultation South Africa",
    "emergency IT support",
    "Continuate IT Services contact",
    "IT services Johannesburg contact"
  ],
};

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Support",
    description: "Speak directly with our experts",
    primary: CONTACT_INFO.phone.primary,
    secondary: "Business hours: Mon-Fri 8AM-5PM",
    action: `tel:${CONTACT_INFO.phone.primary}`
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Emergency Support",
    description: "24/7 critical system support",
    primary: CONTACT_INFO.phone.emergency,
    secondary: "Available 24/7 for urgent issues",
    action: `tel:${CONTACT_INFO.phone.emergency}`
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Support",
    description: "Detailed inquiries and documentation",
    primary: CONTACT_INFO.email.general,
    secondary: "Response within 2 business hours",
    action: `mailto:${CONTACT_INFO.email.general}`
  }
];

const officeInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.suburb}, ${CONTACT_INFO.address.city} ${CONTACT_INFO.address.postal}`
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Business Hours",
    value: CONTACT_INFO.hours.business
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Support Hours",
    value: CONTACT_INFO.hours.support
  }
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Contact Our IT Experts
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Ready to transform your business with professional IT solutions? 
            Get in touch for a consultation, quote, or immediate support.
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section padding="lg" background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover-lift border border-gray-200 text-center">
              <CardContent className="p-8">
                <div className="bg-black text-white rounded-lg p-4 w-fit mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="font-semibold text-black mb-2">
                  {method.primary}
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  {method.secondary}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={method.action}>
                    Contact Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form and Office Info */}
      <Section padding="xl" background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">
                Visit Our Office
              </h2>
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {officeInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4 mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <div className="font-medium text-black mb-1">
                            {info.label}
                          </div>
                          <div className="text-gray-600">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Service Coverage
              </h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 mb-4">
                  We provide comprehensive IT services across South Africa with local support teams in:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Johannesburg", "Cape Town", "Durban", "Pretoria",
                    "Port Elizabeth", "Bloemfontein", "East London", "Polokwane",
                    "Nelspruit", "Kimberley", "Rustenburg", "Potchefstroom"
                  ].map((city) => (
                    <div key={city} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {city}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Don't see your area? Contact us - we provide remote support nationwide 
                    and can arrange on-site visits for most locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">
                Need Immediate Help?
              </h3>
              <div className="space-y-3">
                <Button asChild size="lg" className="w-full">
                  <Link href="/quote">
                    Get Free Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href={`tel:${CONTACT_INFO.phone.emergency}`}>
                    Emergency Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg" background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your response times?",
                answer: "We respond to all inquiries within 2 business hours. Emergency support is available 24/7 with response times under 1 hour for critical issues."
              },
              {
                question: "Do you provide on-site support?",
                answer: "Yes, we provide on-site support across South Africa. Our technicians can visit your premises for installations, maintenance, and complex troubleshooting."
              },
              {
                question: "What areas do you service?",
                answer: "We service all major cities and towns across South Africa. Remote support is available nationwide, with on-site services in major metropolitan areas."
              },
              {
                question: "How do I get a quote?",
                answer: "You can request a quote through our online form, call us directly, or schedule a consultation. We provide detailed, no-obligation quotes within 24 hours."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-black mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}