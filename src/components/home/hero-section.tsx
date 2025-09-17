"use client";

import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  "24/7 Expert Support",
  "Nationwide Coverage", 
  "Industry-Leading Security",
  "White-label Partnerships Available"
];

const stats = [
  { value: "1000+", label: "Devices Managed" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
  { value: "15+", label: "Years Experience" }
];

export function HeroSection() {
  return (
    <Section padding="none" className="relative overflow-hidden">
      {/* Homepage Image Background */}
      <div className="absolute inset-0">
        <Image 
          src="/homepageimage.png" 
          alt="IT Services Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            {/* Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  Making Enterprise IT Affordable & Accessible
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                  Affordable & Accessible IT
                  <span className="block text-gray-600">With Unorthodox Thinking</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  We believe great IT should be affordable and accessible to everyone. Through unorthodox thinking
                  and innovative approaches, we deliver enterprise-grade solutions that keep your business secure, efficient, and ahead of the competition.
                </p>

                {/* Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="group hover-lift">
                    <Link href="/quote">
                      Get Free Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover-lift">
                    <Link href="/services">
                      Explore Services
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/homepageimage.png" 
                    alt="IT Services Professional working on server infrastructure"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay gradient for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 3, 0, -3, 0] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg"
                >
                  <Shield className="w-6 h-6" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -3, 0, 3, 0] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1 
                  }}
                  className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full p-3 shadow-lg"
                >
                  <CheckCircle className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}