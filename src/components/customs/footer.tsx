import { bricolage } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Instagram from "@/assets/logos/insta.svg";
import Github from "@/assets/logos/github.svg";
import Twitter from "@/assets/logos/twitter.svg";

const Footer = () => {
  return (
    <footer className="border-t py-2.5 px-2.5 md:px-0 border-[#1d1d1d] text-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="https://blog.ashokasec.com"
            style={bricolage.style}
            className="font-medium"
          >
            blog.ashokasec
          </Link>
          <ul className="flex items-center my-0 gap-x-0.5 leading-none !list-none">
            <li className="pt-1 ml-0">
              <Link href="https://github.com/ashokasec">
                <Image src={Github} width={22} height={22} alt="Github Logo" />
              </Link>
            </li>
            <li className="ml-0">
              <Link href="https://x.com/ashokasec">
                <Image src={Twitter} width={24} height={24} alt="X's Logo" />
              </Link>
            </li>
            <li className="ml-0">
              <Link href="https://instagram.com/ashokasec">
                <Image
                  src={Instagram}
                  width={22}
                  height={22}
                  alt="Instagram;s Logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer