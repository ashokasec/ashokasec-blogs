import { inter } from "@/lib/fonts";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Development from "./_components/development";
import { Metadata } from "next";
import AshLink from "@/components/md-components/ash-link";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://blog.ashokasec.com",
  },
};

const page = () => {
  return (
    <>
      <h1 style={inter.style} className="font-bold text-4xl text-foreground">
        Blog
      </h1>
      <div>
        <Tabs defaultValue="dev">
          <TabsList className="rounded-l-none rounded-r-full border">
            <TabsTrigger value="dev" className="rounded-l-none">
              Development
            </TabsTrigger>
            <TabsTrigger value="sec">Security</TabsTrigger>
            <TabsTrigger value="pvt">Personal</TabsTrigger>
          </TabsList>
          <TabsContent value="dev">
            <Development />
          </TabsContent>
          <TabsContent value="pvt">
            <p className="mt-4">
              I already know that you&apos;re going jump straight to this page!
            </p>
            <AshLink href="https://ngl.link/ashokasec" className="text-sm">
              Send me an anonymous message.
            </AshLink>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
