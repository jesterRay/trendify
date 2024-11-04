import type { Metadata } from "next";
import "../globals.css";
import TopNav from '../../components/shared/TopNav';
import BottomNav from "@/components/shared/BottomNav";
import LeftNav from '../../components/shared/LeftNav';
import RightNav from "@/components/shared/RightNav";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'



export const metadata: Metadata = {
  title: "Trendify",
  description: "Trendify to connect, share and stay in the the trend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body className="flex flex-col">
          <TopNav/>
          <main className="relative flex w-full">
            <LeftNav/>
              <section className="w-full min-h-screen ">
                <div className="w-full h-full">
                  {children}
                </div>
              </section>
            <RightNav/>
          </main>
          <BottomNav/>
        </body>
      </html>
    </ClerkProvider>
  );
}
