export const metadata = {
  title: "About Us | Nivro Technologies - Digital Solutions Experts",
  description:
    "Learn about Nivro Technologies - a passionate team of developers, designers, and project managers specializing in website development, mobile apps, custom software, CRM systems, and e-commerce solutions. We transform ideas into powerful digital solutions.",
  keywords: [
    "about Nivro Technologies",
    "web development company",
    "mobile app development team",
    "custom software developers",
    "CRM development experts",
    "e-commerce solutions",
    "digital transformation",
    "technology consulting",
    "software development company",
    "Nivro Technologies team"
  ],
  openGraph: {
    title: "About Us | Nivro Technologies - Digital Solutions Experts",
    description:
      "Learn about Nivro Technologies - transforming ideas into powerful digital solutions. Experienced team specializing in web development, mobile apps, and custom software.",
    url: "https://nivrotechnologies.com/about",
    siteName: "Nivro Technologies",
    type: "website",
    images: [
      {
        url: "https://nivrotechnologies.com/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Nivro Technologies Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nivro Technologies",
    description:
      "Learn about Nivro Technologies - transforming ideas into powerful digital solutions.",
    images: ["https://nivrotechnologies.com/images/og-about.jpg"],
  },
  alternates: {
    canonical: "https://nivrotechnologies.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AboutLayout({ children }) {
  return children;
}

