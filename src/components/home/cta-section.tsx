"use client";

import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { CONTACT_INFO } from "@/lib/constants/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <Section padding="xl" background="black" className="text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get started with a free consultation and discover how our expert team can 
            help your business achieve its technology goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Button asChild size="lg" variant="secondary" className="group hover-lift">
            <Link href="/quote">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black hover-lift">
            <Link href="/contact">
              Schedule Consultation
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <h3 className="text-xl font-semibold mb-6">Need Immediate Assistance?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full p-4 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-sm text-gray-300 mb-2">Call Us Now</div>
              <div className="font-semibold">{CONTACT_INFO.phone.primary}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full p-4 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-sm text-gray-300 mb-2">Email Us</div>
              <div className="font-semibold">{CONTACT_INFO.email.general}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-black rounded-full p-4 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-sm text-gray-300 mb-2">Emergency Support</div>
              <div className="font-semibold">{CONTACT_INFO.phone.emergency}</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            24/7 emergency support available for critical system issues
          </p>
        </motion.div>
      </div>
    </Section>
  );
}