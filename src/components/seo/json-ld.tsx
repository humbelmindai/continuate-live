import { CONTACT_INFO } from "@/lib/constants/navigation";

interface JsonLdProps {
  type?: 'Organization' | 'LocalBusiness' | 'Service' | 'WebSite';
  data?: Record<string, unknown>;
}

export function JsonLd({ type = 'Organization', data = {} }: JsonLdProps) {
  const baseData = {
    Organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Continuate IT Services",
      "description": "Professional IT managed services, networking, CCTV, cybersecurity, and automation solutions for businesses across South Africa.",
      "url": "https://continuate.co.za",
      "logo": "https://continuate.co.za/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.phone.primary,
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "ZA"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address.street,
        "addressLocality": CONTACT_INFO.address.city,
        "addressRegion": CONTACT_INFO.address.province,
        "postalCode": CONTACT_INFO.address.postal,
        "addressCountry": "ZA"
      },
      "foundingDate": "2009",
      "numberOfEmployees": "50-100",
      "sameAs": [
        CONTACT_INFO.social.linkedin,
        CONTACT_INFO.social.facebook,
        CONTACT_INFO.social.twitter
      ]
    },
    LocalBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Continuate IT Services",
      "image": "https://continuate.co.za/logo.png",
      "priceRange": "$$",
      "telephone": CONTACT_INFO.phone.primary,
      "email": CONTACT_INFO.email.general,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT_INFO.address.street,
        "addressLocality": CONTACT_INFO.address.city,
        "addressRegion": CONTACT_INFO.address.province,
        "postalCode": CONTACT_INFO.address.postal,
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.2041",
        "longitude": "28.0473"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      "serviceArea": {
        "@type": "Country",
        "name": "South Africa"
      }
    },
    Service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IT Managed Services",
      "provider": {
        "@type": "Organization",
        "name": "Continuate IT Services"
      },
      "serviceType": "Information Technology Services",
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "availableLanguage": "English",
        "servicePhone": CONTACT_INFO.phone.primary,
        "serviceUrl": "https://continuate.co.za"
      }
    },
    WebSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Continuate IT Services",
      "url": "https://continuate.co.za",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://continuate.co.za/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  };

  const jsonLd = {
    ...baseData[type],
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}