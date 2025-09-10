import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, CheckCircle, Users } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coverage Areas - Nationwide IT Services | Continuate IT Services",
  description: "Comprehensive IT services coverage across South Africa. Local support teams in major cities with nationwide remote support capabilities.",
  keywords: [
    "IT services coverage South Africa",
    "nationwide IT support",
    "local IT services",
    "South African IT coverage",
    "regional IT support"
  ],
};

const provinces = [
  {
    name: "Gauteng",
    cities: ["Johannesburg", "Pretoria", "Sandton", "Centurion", "Midrand", "Kempton Park"],
    mainOffice: true,
    contact: {
      phone: "+27 (0)11 123 4567",
      email: "gauteng@continuate.co.za"
    },
    services: ["All Services", "24/7 On-site Support", "Emergency Response"]
  },
  {
    name: "Western Cape",
    cities: ["Cape Town", "Stellenbosch", "Paarl", "Somerset West", "Bellville"],
    contact: {
      phone: "+27 (0)21 456 7890",
      email: "westerncape@continuate.co.za"
    },
    services: ["All Services", "On-site Support", "Regional Coordination"]
  },
  {
    name: "KwaZulu-Natal",
    cities: ["Durban", "Pietermaritzburg", "Pinetown", "Westville", "Umhlanga"],
    contact: {
      phone: "+27 (0)31 789 0123",
      email: "kzn@continuate.co.za"
    },
    services: ["All Services", "On-site Support", "Coastal Coverage"]
  },
  {
    name: "Eastern Cape",
    cities: ["Port Elizabeth", "East London", "Uitenhage", "King William's Town"],
    contact: {
      phone: "+27 (0)41 234 5678",
      email: "easterncape@continuate.co.za"
    },
    services: ["Managed Services", "Remote Support", "Scheduled On-site"]
  },
  {
    name: "Free State",
    cities: ["Bloemfontein", "Welkom", "Kroonstad", "Bethlehem"],
    contact: {
      phone: "+27 (0)51 345 6789",
      email: "freestate@continuate.co.za"
    },
    services: ["Remote Support", "Scheduled On-site", "Emergency Response"]
  },
  {
    name: "Mpumalanga",
    cities: ["Nelspruit", "Witbank", "Middelburg", "Secunda"],
    contact: {
      phone: "+27 (0)13 456 7890",
      email: "mpumalanga@continuate.co.za"
    },
    services: ["Remote Support", "Scheduled On-site", "Mining Sector Specialists"]
  },
  {
    name: "Limpopo",
    cities: ["Polokwane", "Tzaneen", "Mokopane", "Thohoyandou"],
    contact: {
      phone: "+27 (0)15 567 8901",
      email: "limpopo@continuate.co.za"
    },
    services: ["Remote Support", "Scheduled On-site", "Agricultural IT"]
  },
  {
    name: "North West",
    cities: ["Rustenburg", "Potchefstroom", "Klerksdorp", "Mahikeng"],
    contact: {
      phone: "+27 (0)18 678 9012",
      email: "northwest@continuate.co.za"
    },
    services: ["Remote Support", "Scheduled On-site", "Mining Support"]
  },
  {
    name: "Northern Cape",
    cities: ["Kimberley", "Upington", "Springbok", "De Aar"],
    contact: {
      phone: "+27 (0)53 789 0123",
      email: "northerncape@continuate.co.za"
    },
    services: ["Remote Support", "Scheduled On-site", "Satellite Solutions"]
  }
];

const serviceTypes = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "On-site Support",
    description: "Local technicians available for installations, maintenance, and emergency support.",
    availability: "Major metropolitan areas"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Remote Support",
    description: "24/7 remote assistance and monitoring services available nationwide.",
    availability: "All locations"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Emergency Response",
    description: "Rapid response teams for critical IT issues and system failures.",
    availability: "Within 4 hours in major cities"
  }
];

const stats = [
  { value: "9/9", label: "Provinces Covered", description: "Complete South African coverage" },
  { value: "50+", label: "Cities Served", description: "Major urban centers" },
  { value: "24/7", label: "Remote Support", description: "Always available nationwide" },
  { value: "<4hrs", label: "Response Time", description: "Average emergency response" }
];

export default function CoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Nationwide IT Services Coverage
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Professional IT services across all nine South African provinces with local support teams, 
            nationwide remote capabilities, and rapid emergency response.
          </p>
        </div>
      </Section>

      {/* Coverage Stats */}
      <Section padding="lg" background="white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift border border-gray-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service Types */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Service Delivery Models
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible service delivery options to ensure you get the support you need, 
            regardless of your location in South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceTypes.map((service, index) => (
            <Card key={index} className="hover-lift border border-gray-200 bg-white">
              <CardHeader>
                <div className="bg-black text-white rounded-lg p-3 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-600 font-medium">Availability</div>
                  <div className="text-blue-800">{service.availability}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Provincial Coverage */}
      <Section padding="xl" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Provincial Coverage Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our regional teams provide comprehensive IT services across all South African provinces 
            with local expertise and nationwide coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {provinces.map((province, index) => (
            <Card 
              key={index} 
              className={`hover-lift border ${province.mainOffice ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-black">{province.name}</CardTitle>
                  {province.mainOffice && (
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      Head Office
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Major Cities Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {province.cities.map((city, cityIndex) => (
                      <span 
                        key={cityIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-t border-gray-200">
                  <div>
                    <div className="font-medium text-black mb-1 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone
                    </div>
                    <div className="text-gray-600 text-sm">{province.contact.phone}</div>
                  </div>
                  <div>
                    <div className="font-medium text-black mb-1 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </div>
                    <div className="text-gray-600 text-sm">{province.contact.email}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2">Available Services</h4>
                  <div className="space-y-2">
                    {province.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Special Coverage */}
      <Section padding="xl" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Specialized Coverage Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide specialized IT services for unique geographical and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Remote & Rural Areas",
              description: "Satellite internet solutions and remote support for rural businesses and farms.",
              features: ["Satellite connectivity", "Remote monitoring", "Scheduled site visits"]
            },
            {
              title: "Mining & Industrial Sites",
              description: "Specialized IT infrastructure for harsh industrial environments.",
              features: ["Ruggedized hardware", "Industrial networking", "24/7 monitoring"]
            },
            {
              title: "Border & Port Areas",
              description: "Secure IT solutions for border crossings and port facilities.",
              features: ["High-security systems", "Multi-site connectivity", "Compliance solutions"]
            }
          ].map((area, index) => (
            <Card key={index} className="hover-lift border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">{area.title}</CardTitle>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Response Times */}
      <Section padding="lg" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black text-center mb-8">
              Guaranteed Response Times
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 1 Hour</div>
                <div className="font-semibold text-gray-800 mb-1">Critical Emergencies</div>
                <div className="text-gray-600 text-sm">Major metropolitan areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">&lt; 4 Hours</div>
                <div className="font-semibold text-gray-800 mb-1">Standard Support</div>
                <div className="text-gray-600 text-sm">All provincial centers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">&lt; 24 Hours</div>
                <div className="font-semibold text-gray-800 mb-1">Remote Areas</div>
                <div className="text-gray-600 text-sm">Rural and specialized sites</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" background="black" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get Local IT Support Anywhere in South Africa
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you're in a major city or remote location, our nationwide coverage 
            ensures you get the IT support you need when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/quote">
                Get Local Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Find Local Office
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}