import React from "react";
import "highlight.js/styles/atom-one-dark.css";

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
  return <article className="mt-8 mb-8 md:mb-12">{children}</article>;
};

export default layout;
