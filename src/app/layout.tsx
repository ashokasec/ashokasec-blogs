import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Provider from "@/components/customs/provider";

export const metadata: Metadata = {
  title: "Blogs | @ashokasec",
  description: "Blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body style={inter.style}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
