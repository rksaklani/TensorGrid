import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TensorGrid — Multimodal Data Platform for Physical AI",
  description:
    "Explore, curate, annotate, and evaluate multimodal datasets. Open-source platform for computer vision and physical AI.",
  openGraph: {
    title: "TensorGrid — Multimodal Data Platform",
    description:
      "Build and iterate faster with TensorGrid. Surface the right data insights to maximize AI performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
