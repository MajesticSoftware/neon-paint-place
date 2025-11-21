import type { Metadata } from "next";
import "./globals.css";
import "./components.css";
import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://neon-paint-place.vercel.app'),
  title: {
    default: "Neon Paint Place | Baltimore's #1 Glow-in-the-Dark Art Experience",
    template: "%s | Neon Paint Place"
  },
  description: "Baltimore's premier immersive glow-in-the-dark art experience. Splatter Paint, Sip & Paint, Spin Art, VR Painting, Private Parties, and more! Located downtown at 307 West Baltimore Street.",
  keywords: [
    "neon paint",
    "glow in the dark painting",
    "Baltimore art experience",
    "splatter paint Baltimore",
    "sip and paint Baltimore",
    "paint party Baltimore",
    "things to do in Baltimore",
    "date night Baltimore",
    "birthday party Baltimore",
    "team building Baltimore",
    "UV paint",
    "blacklight painting",
    "spin art",
    "VR painting"
  ],
  authors: [{ name: "Neon Paint Place" }],
  creator: "Neon Paint Place",
  publisher: "Neon Paint Place",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neon-paint-place.vercel.app",
    siteName: "Neon Paint Place",
    title: "Neon Paint Place | Baltimore's #1 Glow-in-the-Dark Art Experience",
    description: "Crazy, Colorful, Connection. Experience Baltimore's premier glow-in-the-dark art studio with splatter paint, sip & paint, spin art, and more!",
    images: [
      {
        url: "/images/_MG_5643.JPG",
        width: 1200,
        height: 630,
        alt: "Neon Paint Place - Glow in the Dark Art Experience"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Paint Place | Baltimore's #1 Glow-in-the-Dark Art Experience",
    description: "Crazy, Colorful, Connection. Experience Baltimore's premier glow-in-the-dark art studio!",
    images: ["/images/_MG_5643.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://neon-paint-place.vercel.app",
  },
  category: "entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ff00ff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <PromoBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Neon Paint Place",
              "image": "https://neon-paint-place.vercel.app/images/_MG_5643.JPG",
              "@id": "https://neon-paint-place.vercel.app",
              "url": "https://neon-paint-place.vercel.app",
              "telephone": "+16673548923",
              "priceRange": "$35-$75",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "307 West Baltimore Street",
                "addressLocality": "Baltimore",
                "addressRegion": "MD",
                "postalCode": "21201",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.2904,
                "longitude": -76.6122
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "22:00"
              },
              "sameAs": [
                "https://www.facebook.com/neonpaintplace",
                "https://www.instagram.com/neonpaintplace"
              ],
              "description": "Baltimore's premier immersive glow-in-the-dark art experience featuring splatter paint, sip & paint, spin art, VR painting, and private parties."
            })
          }}
        />
      </body>
    </html>
  );
}
