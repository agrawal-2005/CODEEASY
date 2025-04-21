import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./(shared)/Navbar";
import { GlobalContextProvider, useGlobalContext } from "./(contest)/(context)/Global";

const openSans = Open_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Coding Contest App",
  description: "Built with Next.js 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={openSans.className} lang="en">
      <body className="bg-wh-900 dark:bg-wh-10">
        <GlobalContextProvider>
          <Navbar/>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
