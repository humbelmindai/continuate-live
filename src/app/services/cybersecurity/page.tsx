import type { Metadata } from "next";
import { Shield, AlertTriangle, Lock, Eye, FileCheck, Users } from "lucide-react";
import { ServiceHero } from "@/components/service/service-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | Continuate IT Services",
  description: "Advanced cybersecurity services to protect your business from cyber threats. Security assessments, firewall management, and comprehensive risk management.",
  keywords: [
    "cybersecurity services",
    "security assessment",
    "firewall management",
    "threat protection",
    "compliance consulting",
    "incident response",
    "cybersecurity South Africa"
  ],
};

const benefits = [
  "Advanced Threat Protection",
  "24/7 Security Monitoring", 
  "Compliance Management",
  "Incident Response Support"
];

const securityServices = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security Assessments",
    description: "Comprehensive security audits to identify vulnerabilities and develop strategic protection plans."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Firewall Management",
    description: "Advanced firewall configuration and management to protect against external threats and unauthorized access."
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Threat Detection & Response",
    description: "Real-time threat monitoring with automated response systems and expert incident management."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Security Monitoring",
    description: "24/7 security operations center monitoring with immediate threat response and detailed reporting."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Compliance Management",
    description: "Ensure compliance with industry standards like POPIA, ISO 27001, and other regulatory requirements."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Security Awareness Training",
    description: "Comprehensive staff training programs to build a security-conscious culture in your organization."
  }
];

const threatTypes = [
  {
    name: "Malware & Ransomware",
    description: "Protection against malicious software and ransomware attacks",
    impact: "99.9% threat detection rate"
  },
  {
    name: "Phishing & Social Engineering",
    description: "Advanced email security and user training to prevent social engineering attacks",
    impact: "95% reduction in successful phishing attempts"
  },
  {
    name: "Data Breaches",
    description: "Comprehensive data protection and breach prevention strategies",
    impact: "Zero data breaches for protected clients"
  },
  {
    name: "Insider Threats",
    description: "User behavior monitoring and access control to prevent internal security risks",
    impact: "100% of insider threats detected and mitigated"
  }
];

const packages = [
  {
    name: "Essential Security",
    description: "Basic security protection for small businesses",
    features: [
      "Basic firewall management",
      "Antivirus and anti-malware",
      "Email security filtering",
      "Monthly security reports",
      "Business hours support"
    ],
    price: "From R4,500/month"
  },
  {
    name: "Advanced Security",
    description: "Comprehensive security for growing businesses",
    features: [
      "Advanced threat detection",
      "24/7 security monitoring",
      "Security incident response",
      "Vulnerability assessments",
      "Staff security training",
      "Compliance support"
    ],
    price: "From R12,500/month",
    popular: true
  },
  {
    name: "Enterprise Security",
    description: "Full-scale security management for large organizations",
    features: [
      "Dedicated security analyst",
      "Custom security policies",
      "Advanced compliance management",
      "Penetration testing",
      "24/7 incident response",
      "Executive security briefings"
    ],
    price: "Custom Pricing"
  }
];

export default function CybersecurityPage() {
  return (
    <>
      <ServiceHero
        title="Cybersecurity Solutions"
        subtitle="Advanced Threat Protection"
        description="Comprehensive cybersecurity services to protect your business from evolving cyber threats. From security assessments to 24/7 monitoring, we provide multilayered protection for your digital assets."
        benefits={benefits}
        icon={<Shield className="w-6 h-6" />}
      />

      {/* Security Services */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Comprehensive Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our multilayered approach to cybersecurity provides complete protection 
            against modern cyber threats and ensures business continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityServices.map((service, index) => (
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

      {/* Threat Protection */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Advanced Threat Protection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your business against the most common and dangerous cyber threats 
            with our proven security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {threatTypes.map((threat, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">{threat.name}</h3>
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                    Protected
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {threat.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Protection Impact</div>
                  <div className="font-semibold text-black">{threat.impact}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Security Packages */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Choose Your Security Level
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible cybersecurity packages designed to protect businesses of all sizes 
            from basic threats to advanced persistent threats.
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
                    Recommended
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
                      <Shield className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/quote">
                    Get Protected
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Security Process */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Security Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to implementing comprehensive cybersecurity protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Security Assessment", desc: "Comprehensive evaluation of current security posture and vulnerabilities" },
              { step: "2", title: "Strategy Development", desc: "Custom security strategy and policy development based on your business needs" },
              { step: "3", title: "Implementation", desc: "Deployment of security solutions with minimal business disruption" },
              { step: "4", title: "Monitoring & Response", desc: "Continuous monitoring with rapid incident response and regular updates" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            Don't Wait for a Cyber Attack
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Protect your business before it's too late. Get a free cybersecurity assessment 
            and discover your vulnerabilities before cybercriminals do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Free Security Assessment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Emergency Response
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}