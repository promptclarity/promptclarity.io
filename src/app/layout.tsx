import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prompt Clarity - Track Your Brand Visibility in AI Search",
  description: "Monitor how your brand appears in AI-powered search results. Track visibility, analyze competitors, and get actionable recommendations to improve your presence in LLM responses.",
  keywords: ["AI visibility", "brand tracking", "LLM search", "AI SEO", "brand monitoring"],
  openGraph: {
    title: "Prompt Clarity - Track Your Brand Visibility in AI Search",
    description: "Monitor how your brand appears in AI-powered search results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
