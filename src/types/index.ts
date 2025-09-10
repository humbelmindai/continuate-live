// Core types for the application

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
  featured?: boolean;
  category: 'managed' | 'networking' | 'security' | 'automation' | 'biometrics' | 'office';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  company?: string;
  website?: string;
}

export interface QuoteRequest extends ContactForm {
  timeline: string;
  budget: string;
  requirements: string[];
  urgency: 'low' | 'medium' | 'high' | 'critical';
}

export interface Partnership {
  name: string;
  email: string;
  phone: string;
  company: string;
  experience: string;
  location: string;
  services: string[];
  motivation: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  certifications: string[];
}

export interface CoverageArea {
  province: string;
  cities: string[];
  contact: {
    phone: string;
    email: string;
  };
  services: Service['category'][];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  services: Service['category'][];
  image?: string;
  testimonial?: Pick<Testimonial, 'quote' | 'author' | 'position'>;
}

// Form validation states
export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

// SEO Meta types
export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit?: Record<string, unknown>;
  hover?: Record<string, unknown>;
  tap?: Record<string, unknown>;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}