import React from "react";
import Navbar from "@/components/customs/navbar";
import Footer from "@/components/customs/footer";
import 'highlight.js/styles/atom-one-dark.css'

type LayoutProps = {
  readonly children: React.ReactNode;
};

export const metadata = {
  title: {
    default: "Blog",
    template: "%s | @ashokasec blog",
  },
  authors: [
    {
      name: "ashokasec",
      url: "https://ashokasec.com",
    },
  ],
};

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-3 md:px-0 overflow-x-hidden">
        <article className="mt-8 mb-8 md:mb-12">{children}</article>
      </main>
      <Footer />
    </>
  );
};

export default layout;
