import { bricolage } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

const Card = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <li className="ml-0 pt-4">
      <time className="text-[13px]">15 September 2024</time>
      <Link href={link}>
        <h1 className="text-2xl my-2" style={bricolage.style}>
          {title}
        </h1>
      </Link>
      <Link href={link}>
        <p className="mt-0">{description}</p>
      </Link>
    </li>
  );
};

export default Card;
