import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideIndex from "./(dashboard)/_components/sidebar";
import OrgSidebar from "./(dashboard)/_components/org-sidebar";
import Navbar from "./(dashboard)/_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
        
    //     {children}
    //     </body>
    // </html>

    <main className="h-full">
      <SideIndex/>
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
