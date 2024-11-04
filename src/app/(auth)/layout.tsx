import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export const metadata: Metadata = {
  title: "Trendify",
  description: "Trendify to connect, share and stay in the the trend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className=' w-full bg-purple-800 flex items-center justify-center h-screen' >{children}</body>
      </html>
    </ClerkProvider>
  )
}