import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Pricelist | Continuate IT Services",
  description: "Transparent pricing for IT managed services, networking & CCTV, cybersecurity, biometrics, automation, and office setups.",
};

const pricing = [
  {
    category: "IT Managed Services",
    items: [
      { name: "Starter Plan", price: "R1,499 / month", details: "Up to 5 devices, remote support" },
      { name: "Business Plan", price: "R3,999 / month", details: "Up to 20 devices, remote + on-site" },
      { name: "Enterprise Plan", price: "Custom", details: "Tailored SLAs, 24/7 coverage" },
    ],
  },
  {
    category: "Networking & CCTV",
    items: [
      { name: "SMB Network Setup", price: "From R7,500", details: "Router, switch, Wi‑Fi setup" },
      { name: "CCTV 4‑Cam Package", price: "From R9,900", details: "4x 4MP cams, NVR, install" },
      { name: "Site Survey", price: "R1,200", details: "Credited if you proceed" },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Security Audit", price: "From R6,500", details: "Vulnerability review + report" },
      { name: "EDR per Device", price: "R120 / month", details: "Managed endpoint security" },
      { name: "Email Security", price: "R35 / user / month", details: "Spam/phishing protection" },
    ],
  },
  {
    category: "Biometric Solutions",
    items: [
      { name: "Access Control Kit", price: "From R8,500", details: "Controller, reader, software" },
      { name: "Time & Attendance", price: "From R5,900", details: "Fingerprint/Face terminal" },
    ],
  },
  {
    category: "Automation Services",
    items: [
      { name: "Workflow Automation", price: "From R12,000", details: "Design + implementation" },
      { name: "Monitoring & Alerts", price: "R450 / month", details: "System health dashboards" },
    ],
  },
  {
    category: "Office Setups",
    items: [
      { name: "New Office Fit‑out", price: "From R15,000", details: "Cabling, Wi‑Fi, endpoints" },
      { name: "Workstation Setup", price: "From R1,200 each", details: "Join domain, apps, security" },
    ],
  },
];

export default function PricelistPage() {
  return (
    <>
      <Section padding="xl" background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">Service Pricelist</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Transparent, no‑surprise pricing. Final quotes vary by scope and site conditions.
          </p>
        </div>
      </Section>

      <Section padding="lg" background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricing.map((group) => (
            <Card key={group.category} className="border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">{group.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-black">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.details}</div>
                    </div>
                    <div className="text-black font-semibold whitespace-nowrap">{item.price}</div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button asChild className="w-full">
                    <Link href="/quote">Get Detailed Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="xl" background="black" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need a tailored package?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Tell us your requirements and we’ll craft a package that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}


