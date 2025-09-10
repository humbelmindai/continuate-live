"use client";

import { ArrowRight, Monitor, Network, Shield, Fingerprint, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { SERVICES } from "@/lib/constants/services";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap = {
  monitor: Monitor,
  network: Network,
  shield: Shield,
  fingerprint: Fingerprint,
  zap: Zap,
  server: Server,
};

export function ServicesOverview() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section padding="xl" background="gray">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From managed services to cutting-edge automation, we provide complete IT solutions 
            that help South African businesses thrive in the digital age.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {SERVICES.map((service) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          
          return (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className={`h-full hover-lift transition-all duration-300 border-2 ${
                service.featured ? 'border-black bg-white' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <CardContent className="p-8">
                  {service.featured && (
                    <div className="inline-flex items-center rounded-full bg-black text-white px-3 py-1 text-xs font-medium mb-4">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className="bg-black text-white rounded-lg p-3 mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500 ml-5">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6">
            Every business is unique. Let our experts design a tailored IT solution 
            that perfectly fits your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hover-lift">
              <Link href="/quote">
                Get Custom Quote
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link href="/contact">
                Speak to Expert
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}