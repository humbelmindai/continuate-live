"use client";

import { Clock, Shield, Users, Award, Headphones, Globe } from "lucide-react";
import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Expert Support",
    description: "Round-the-clock monitoring and support to keep your systems running smoothly, with emergency response available nationwide."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Advanced cybersecurity solutions and best practices to protect your business from evolving digital threats."
  },
  {
    icon: Users,
    title: "Certified Professionals",
    description: "Our team holds industry-leading certifications and continuously updates skills to deliver cutting-edge solutions."
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Proven track record of delivering successful IT projects across various industries throughout South Africa."
  },
  {
    icon: Headphones,
    title: "Proactive Approach",
    description: "We identify and resolve issues before they impact your business, ensuring maximum uptime and productivity."
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "Comprehensive service coverage across all major South African cities with local support teams."
  }
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section padding="xl" background="white">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Unorthodox Thinking, Proven Results
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 1000+ devices under management and a 99.9% uptime guarantee, we prove that
              great IT doesn't have to break the bank. Our innovative, unorthodox approaches make enterprise-grade technology accessible to businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reasons.slice(0, 3).map((reason) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                  className="flex items-start group"
                >
                  <div className="bg-black text-white rounded-lg p-3 mr-4 group-hover:bg-gray-800 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side - Additional Reasons */}
        <div className="mt-12 lg:mt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reasons.slice(3).map((reason) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                  className="flex items-start group"
                >
                  <div className="bg-black text-white rounded-lg p-3 mr-4 group-hover:bg-gray-800 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 rounded-2xl p-8"
          >
            <h4 className="font-semibold text-black mb-4">Trusted by Industry Leaders</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-black">1000+</div>
                <div className="text-sm text-gray-600">Devices Managed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">9</div>
                <div className="text-sm text-gray-600">Provinces</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}