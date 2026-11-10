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
    icon: "/Mask group.svg",
    apple: "/Mask group.svg",
  },
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
