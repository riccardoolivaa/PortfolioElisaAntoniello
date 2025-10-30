import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Elisa Antonielo | Scenic Design Portfolio",
  description: "Scenic Design, Lighting, Audio & Photography Portfolio - Teatro alla Scala Academy Student",
  keywords: ["scenic design", "theater", "lighting design", "audio", "photography", "Teatro alla Scala"],
  authors: [{ name: "Elisa Antonielo" }],
  openGraph: {
    title: "Elisa Antonielo | Scenic Design Portfolio",
    description: "Scenic Design, Lighting, Audio & Photography Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
