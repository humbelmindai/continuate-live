import type { Metadata } from "next";
import { Users, Award, Shield, TrendingUp, Clock } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Continuate IT Services - South Africa's IT Experts",
  description: "Learn about Continuate IT Services, South Africa's leading IT solutions provider with over 15 years of experience serving businesses nationwide with professional IT services.",
  keywords: [
    "about Continuate IT Services",
    "South Africa IT company",
    "IT services company history",
    "professional IT team",
    "IT expertise South Africa"
  ],
};

const stats = [
  { value: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
  { value: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { value: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
  { value: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
];

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security First",
    description: "We prioritize the security and integrity of your IT infrastructure, implementing best practices and staying ahead of evolving threats."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Partnership",
    description: "We build long-term relationships with our clients, becoming a trusted extension of their team rather than just a service provider."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Continuous Innovation",
    description: "We stay at the forefront of technology trends, continuously updating our skills and solutions to provide cutting-edge services."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence in Delivery",
    description: "We commit to delivering exceptional service quality, meeting deadlines, and exceeding expectations in every project we undertake."
  }
];

const timeline = [
  {
    year: "2009",
    title: "Founded in Johannesburg",
    description: "Started as a small IT consulting firm with a vision to provide enterprise-grade IT services to South African businesses."
  },
  {
    year: "2012", 
    title: "Expanded Service Portfolio",
    description: "Added managed services, cybersecurity, and networking solutions to serve a broader range of business needs."
  },
  {
    year: "2015",
    title: "Nationwide Presence",
    description: "Established offices and partnerships across major South African cities to provide local support nationwide."
  },
  {
    year: "2018",
    title: "White-label Program Launch",
    description: "Launched our white-label partnership program, enabling other IT providers to expand their service offerings."
  },
  {
    year: "2021",
    title: "Digital Transformation Focus",
    description: "Expanded into automation, IoT, and advanced cybersecurity to help businesses navigate digital transformation."
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as one of South Africa's leading IT service providers with over 500 satisfied clients nationwide."
  }
];

const team = [
  {
    name: "Michael Stevens",
    position: "Chief Executive Officer",
    bio: "15+ years in IT leadership with expertise in strategic technology planning and business transformation.",
    certifications: ["MBA", "CISSP", "PMP"]
  },
  {
    name: "Sarah Johnson", 
    position: "Chief Technology Officer",
    bio: "Expert in enterprise architecture and cybersecurity with deep knowledge of South African IT landscape.",
    certifications: ["CISA", "CISSP", "Microsoft Certified"]
  },
  {
    name: "David Nkomo",
    position: "Head of Operations",
    bio: "Specializes in service delivery and client relationship management with 12+ years of operational excellence.",
    certifications: ["ITIL Expert", "Six Sigma", "PMP"]
  },
  {
    name: "Lisa Chen",
    position: "Cybersecurity Director", 
    bio: "Leading cybersecurity expert with extensive experience in threat analysis and security implementation.",
    certifications: ["CISSP", "CEH", "CISM"]
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            About Continuate IT Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            For over 15 years, we've been South Africa's trusted partner for professional IT services, 
            helping businesses grow, secure their operations, and achieve their technology goals.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section padding="lg" background="white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift border border-gray-200">
              <CardContent className="p-6">
                <div className="bg-black text-white rounded-lg p-3 w-fit mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to becoming South Africa's leading IT services provider
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Continuate IT Services was founded in 2009 with a simple but powerful vision: to provide 
                South African businesses with access to enterprise-grade IT services that were previously 
                only available to large corporations. Starting from a small office in Johannesburg, our 
                founders recognized the growing need for reliable, professional IT support in the rapidly 
                digitalizing South African business landscape.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                What began as a small consulting firm has grown into one of South Africa's most trusted 
                IT service providers. Today, we serve over 500 clients across all provinces, from small 
                startups to large enterprises, providing comprehensive IT solutions that drive business 
                growth and operational excellence.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our success is built on three fundamental principles: delivering exceptional service quality, 
                building long-term partnerships with our clients, and staying at the forefront of technology 
                innovation. These principles have guided us through tremendous growth while maintaining the 
                personal touch and commitment to excellence that our clients value most.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and define our commitment to our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="hover-lift border border-gray-200">
              <CardContent className="p-8">
                <div className="bg-black text-white rounded-lg p-4 w-fit mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth and evolution as South Africa's IT services leader
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-black text-white rounded-full px-4 py-2 text-sm font-bold mr-6 flex-shrink-0 mt-1">
                  {item.year}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section padding="xl" background="white" id="team">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals leading Continuate IT Services and 
            driving innovation in South African IT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover-lift border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <div className="text-gray-500 mb-4">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map((cert, certIndex) => (
                    <span 
                      key={certIndex} 
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" background="black" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience the Continuate Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join over 500 South African businesses who trust us with their IT infrastructure. 
            Discover how our expertise can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}