import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexova Constructions | Residential & Commercial Construction",

  description:
    "Nexova Constructions is a specialist main contractor delivering residential, commercial projects. Explore our services and projects.",

  metadataBase: new URL("https://www.nexovaconstructions.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nexova Constructions",
    description:
      "Specialist main contractor delivering residential, commercial projects.",
    url: "https://www.nexovaconstructions.com",
    siteName: "Nexova Constructions",
    type: "website",
  },

  icons: {
    icon: [
      { url: "/faviconsss.ico", sizes: "any" },
      { url: "/faviconsss.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/faviconsss.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexova Constructions",
  alternateName: ["Nexova", "NexovaConstructions"],
  url: "https://www.nexovaconstructions.com",
};

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisProvider from "@/components/common/LenisProvider";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
