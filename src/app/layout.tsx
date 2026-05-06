import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LiveChat from "@/components/LiveChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#7c3aed",
};

export const metadata: Metadata = {
  title: "Game Core | Games, Collectibles & Culture",
  description:
    "Collectible card games, retro and next-gen consoles, gaming accessories and more. The widest selection for gaming enthusiasts.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Game Core | Games, Collectibles & Culture",
    description:
      "Collectible card games, retro and next-gen consoles, gaming accessories and more. The widest selection for gaming enthusiasts.",
    type: "website",
    url: "https://gamecore.com",
    siteName: "Game Core",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Core | Games, Collectibles & Culture",
    description:
      "Collectible card games, retro and next-gen consoles, gaming accessories and more. The widest selection for gaming enthusiasts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LiveChat />
      </body>
    </html>
  );
}
