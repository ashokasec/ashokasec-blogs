import React from "react";
import { Button } from "@/components/ui/button";
import { bricolage } from "@/lib/fonts";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 px-2 md:px-0">
      <nav className="rounded-b-2xl bg-gradient-to-b from-white dark:from-[#08090a] via-white dark:via-[#08090a] to-transparent">
        <div className="pt-2 md:pt-4"></div>
        <div className="flex justify-between items-center text-xs dark:bg-[#0a0a0a33] rounded-xl border dark:border-white/10 pl-3 pr-1 py-1 backdrop-blur-2xl max-w-4xl mx-auto">
          <Link className="text-sm font-semibold" style={bricolage.style} href="/">
            blog.ashokasec
          </Link>
          <div className="flex items-center space-x-1.5">
            <ThemeToggle />
            <div>
              <Link href="https://x.com/ashokasec" target="_blank">
                <Button
                  variant={"default"}
                  className="font-semibold px-3 !py-2 h-fit tracking-tight rounded-lg"
                  size={"sm"}
                >
                  Let&apos;s Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
