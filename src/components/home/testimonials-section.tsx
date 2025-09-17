"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: "1",
    quote: "Continuate transformed our IT infrastructure completely. Their proactive approach saved us from multiple potential disasters, and their 24/7 support gives us complete peace of mind.",
    author: "Sarah Mitchell",
    position: "IT Director",
    company: "Johannesburg Manufacturing Co.",
    rating: 5,
    avatar: "SM"
  },
  {
    id: "2", 
    quote: "The cybersecurity assessment they conducted revealed vulnerabilities we never knew existed. Their team implemented comprehensive protection that has kept us secure for over 2 years.",
    author: "David Chen",
    position: "CEO",
    company: "Cape Town Financial Services",
    rating: 5,
    avatar: "DC"
  },
  {
    id: "3",
    quote: "Their white-label partnership program allowed us to expand our service offerings dramatically. Excellent support and training throughout the entire process.",
    author: "Michael Roberts",
    position: "Managing Director", 
    company: "Pretoria Tech Solutions",
    rating: 5,
    avatar: "MR"
  },
  {
    id: "4",
    quote: "Outstanding CCTV and access control implementation. The biometric systems work flawlessly and the mobile monitoring gives us control from anywhere.",
    author: "Lisa Thompson",
    position: "Operations Manager",
    company: "Durban Logistics Hub",
    rating: 5,
    avatar: "LT"
  },
  {
    id: "5",
    quote: "Best IT support we've ever had. Response times are incredible and they always explain everything in terms we can understand. Highly recommend!",
    author: "James Parker",
    position: "Business Owner",
    company: "Bloemfontein Retail Group",
    rating: 5,
    avatar: "JP"
  },
  {
    id: "6",
    quote: "The office automation they implemented has revolutionized how we work. Everything is seamlessly integrated and our productivity has increased by 40%.",
    author: "Amanda Foster",
    position: "Operations Director",
    company: "Port Elizabeth Consulting",
    rating: 5,
    avatar: "AF"
  }
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses across South Africa 
            say about their experience with Continuate IT Services.
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
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <Card className="h-full hover-lift bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-gray-300" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-black text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-6">
            Join Hundreds of Satisfied Clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}