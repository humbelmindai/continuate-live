import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "managed-services",
    title: "IT Managed Services",
    description: "Comprehensive IT support and management for your business operations with 24/7 monitoring and proactive maintenance.",
    features: [
      "24/7 System Monitoring",
      "Proactive Maintenance",
      "Help Desk Support",
      "Cloud Migration Services",
      "IT Strategy Consulting",
      "Performance Optimization"
    ],
    icon: "monitor",
    href: "/services/managed-services",
    category: "managed",
    featured: true
  },
  {
    id: "networking-cctv",
    title: "Networking & CCTV",
    description: "Professional network infrastructure design and CCTV security systems for complete connectivity and surveillance solutions.",
    features: [
      "Network Design & Implementation",
      "Wi-Fi Solutions",
      "IP Camera Installation",
      "Video Management Systems",
      "Remote Monitoring",
      "Access Control Integration"
    ],
    icon: "network",
    href: "/services/networking-cctv",
    category: "networking",
    featured: true
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business from cyber threats with comprehensive risk assessment and management.",
    features: [
      "Security Assessments",
      "Firewall Management",
      "Antivirus Solutions",
      "Security Awareness Training",
      "Compliance Consulting",
      "Incident Response"
    ],
    icon: "shield",
    href: "/services/cybersecurity",
    category: "security",
    featured: true
  },
  {
    id: "biometrics",
    title: "Biometric Solutions",
    description: "Advanced biometric access control systems for enhanced security and seamless user authentication.",
    features: [
      "Fingerprint Access Systems",
      "Facial Recognition",
      "Time & Attendance Systems",
      "HR System Integration",
      "Multi-factor Authentication",
      "Mobile Access Control"
    ],
    icon: "fingerprint",
    href: "/services/biometrics",
    category: "biometrics"
  },
  {
    id: "automation",
    title: "Automation Services",
    description: "Smart office automation and IoT solutions to streamline your business processes and improve efficiency.",
    features: [
      "Smart Office Solutions",
      "IoT Implementation",
      "Process Automation",
      "Energy Management Systems",
      "Workflow Optimization",
      "Integration Services"
    ],
    icon: "zap",
    href: "/services/automation",
    category: "automation"
  },
  {
    id: "office-setups",
    title: "Office Setups",
    description: "Complete office IT infrastructure setup including servers, workstations, and network configuration.",
    features: [
      "Server Installation & Configuration",
      "Workstation Setup",
      "Software Deployment",
      "Network Infrastructure",
      "Backup Solutions",
      "Documentation & Training"
    ],
    icon: "server",
    href: "/services/office-setups",
    category: "office"
  }
];

export const SERVICE_CATEGORIES = {
  managed: "IT Managed Services",
  networking: "Networking & Security",
  security: "Cybersecurity",
  automation: "Automation",
  biometrics: "Biometric Systems",
  office: "Office Solutions"
} as const;