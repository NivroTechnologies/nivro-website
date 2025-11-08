import localFont from "next/font/local";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";

export const supreme = localFont({
  src: [
    { path: "../fonts/Supreme-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Supreme-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-heading",
});

export const generalSans = localFont({
  src: [
    { path: "../fonts/GeneralSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/GeneralSans-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-body",
});

export const metadata = {
  title: "Web & App Development | Nivro Technologies",
  description:
    "Nivro Technologies offers website development, mobile app development, custom CRM, and cloud software at affordable prices. Modern UI, fast performance, and scalable solutions.",
  keywords: [
    "website development",
    "mobile app development",
    "cross platform development",
    "custom eCommerce",
    "CRM software",
    "cloud software",
    "affordable web design",
    "Nivro Technologies",
  ],
  openGraph: {
    title: "Nivro Technologies | Website & App Development",
    description:
      "Affordable end-to-end website, app, and software development solutions with modern UI and performance.",
    url: "https://nivrotechnologies.com",
    siteName: "Nivro Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivro Technologies",
    description:
      "Affordable, scalable web and mobile app development with latest UI trends.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${supreme.variable} ${generalSans.variable}`}>
      <body className="antialiased relative">
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}