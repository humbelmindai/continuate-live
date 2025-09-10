import { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Pricelist",
        href: "/pricelist"
      },
      {
        label: "IT Managed Services",
        href: "/services/managed-services"
      },
      {
        label: "Networking & CCTV",
        href: "/services/networking-cctv"
      },
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity"
      },
      {
        label: "Biometric Solutions",
        href: "/services/biometrics"
      },
      {
        label: "Automation Services",
        href: "/services/automation"
      },
      {
        label: "Office Setups",
        href: "/services/office-setups"
      }
    ]
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Coverage",
    href: "/coverage"
  },
  {
    label: "Partners",
    href: "/partners"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

export const FOOTER_NAV = {
  services: {
    title: "Services",
    items: [
      { label: "IT Managed Services", href: "/services/managed-services", external: false },
      { label: "Networking & CCTV", href: "/services/networking-cctv", external: false },
      { label: "Cybersecurity", href: "/services/cybersecurity", external: false },
      { label: "Biometric Solutions", href: "/services/biometrics", external: false },
      { label: "Automation", href: "/services/automation", external: false },
      { label: "Office Setups", href: "/services/office-setups", external: false }
    ]
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: "/about", external: false },
      { label: "Our Team", href: "/about#team", external: false },
      { label: "Coverage Areas", href: "/coverage", external: false },
      { label: "Case Studies", href: "/case-studies", external: false },
      { label: "Careers", href: "/careers", external: false }
    ]
  },
  partners: {
    title: "Partners",
    items: [
      { label: "White-label Program", href: "/partners", external: false },
      { label: "Partner Benefits", href: "/partners#benefits", external: false },
      { label: "Apply Now", href: "/partners/apply", external: false },
      { label: "Partner Portal", href: "/partners/portal", external: true }
    ]
  },
  support: {
    title: "Support",
    items: [
      { label: "Contact Us", href: "/contact", external: false },
      { label: "Get Quote", href: "/quote", external: false },
      { label: "Support Portal", href: "/support", external: true },
      { label: "Emergency Contact", href: "/emergency", external: false },
      { label: "Documentation", href: "/docs", external: true }
    ]
  }
};

export const CONTACT_INFO = {
  phone: {
    primary: "0105004335",
    emergency: "+27 (0)82 123 4567"
  },
  email: {
    general: "info@continuate.co.za",
    sales: "sales@continuate.co.za",
    support: "support@continuate.co.za",
    partners: "partners@continuate.co.za"
  },
  address: {
    street: "123 Business Avenue",
    suburb: "Sandton",
    city: "Johannesburg",
    province: "Gauteng",
    postal: "2196",
    country: "South Africa"
  },
  social: {
    linkedin: "https://linkedin.com/company/continuate-it-services",
    facebook: "https://facebook.com/continuateIT",
    twitter: "https://twitter.com/continuateIT"
  },
  hours: {
    business: "Monday - Friday: 08:00 - 17:00",
    support: "24/7 Support Available",
    emergency: "24/7 Emergency Response"
  }
} as const;