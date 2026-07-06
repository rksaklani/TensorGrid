import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "TensorGrid",
    template: "%s — TensorGrid",
  },
  description:
    "Explore, curate, annotate, and evaluate multimodal datasets. Open-source platform for computer vision and physical AI.",
  applicationName: "TensorGrid",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "TensorGrid",
    siteName: "TensorGrid",
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
