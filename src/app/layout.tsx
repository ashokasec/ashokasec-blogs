import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Provider from "@/components/customs/provider";
import Navbar from "@/components/customs/navbar";
import Footer from "@/components/customs/footer";
import Analytics from "@/components/analytics/analytics";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Blogs | @ashokasec",
  description:
    "Explore exclusively crafted posts related to development & security by ashokasec.",
  alternates: {
    canonical: "https://blog.ashokasec.com",
  },
  keywords: [
    "development blog",
    "security blog",
    "personal blog",
    "ashokasec",
    "nextjs",
    "nextjs blog website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <Analytics />
      </head>
      <body style={inter.style}>
        <Provider>
          <NextTopLoader showSpinner={false} color="#1968ff" />
          <div className="min-h-screen flex flex-col justify-between">
            <div>
              <Navbar />
              <main className="max-w-3xl mx-auto px-3 md:px-0 overflow-x-hidden">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
