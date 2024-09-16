import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Provider from "@/components/customs/provider";
import Navbar from "@/components/customs/navbar";
import Footer from "@/components/customs/footer";

export const metadata: Metadata = {
  title: "Blogs | @ashokasec",
  description: "Explore exclusively crafted posts related to development & security by ashokasec.",
  keywords: ["development blog", "security blog", "personal blog", "ashokasec", "nextjs", "nextjs blog website"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body style={inter.style}>
        <Provider>
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
