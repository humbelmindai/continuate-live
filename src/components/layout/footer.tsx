"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FOOTER_NAV, CONTACT_INFO } from "@/lib/constants/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest IT insights, security updates, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-black px-3 py-2 rounded font-bold text-xl">
                C
              </div>
              <div>
                <div className="font-bold text-xl">Continuate</div>
                <div className="text-sm text-gray-400 -mt-1">IT Services</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading South African IT services provider offering comprehensive managed services, 
              networking, cybersecurity, and automation solutions for businesses nationwide.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.suburb}, {CONTACT_INFO.address.city} {CONTACT_INFO.address.postal}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.phone.primary}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.email.general}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.hours.support}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Link
                href={CONTACT_INFO.social.linkedin}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={CONTACT_INFO.social.facebook}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href={CONTACT_INFO.social.twitter}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(FOOTER_NAV).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© {currentYear} Continuate IT Services. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4 md:mt-0">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>in Johannesburg, South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}