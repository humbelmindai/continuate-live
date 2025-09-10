"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  bgPattern?: string;
}

export function ServiceHero({ 
  title, 
  subtitle, 
  description, 
  benefits, 
  icon,
  bgPattern = "default"
}: ServiceHeroProps) {
  return (
    <Section padding="xl" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Tech-based Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.03'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M40 40h40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      {/* Subtle grid lines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium mb-6">
                <div className="mr-2">{icon}</div>
                Professional IT Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                {title}
                <span className="block text-gray-600 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {subtitle}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
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
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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
                    Get Service Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-lift">
                  <Link href="/contact">
                    Speak to Expert
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="bg-black text-white rounded-xl p-8 mb-6 text-center">
                  <div className="text-6xl mb-4">{icon}</div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div className="space-y-3">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}