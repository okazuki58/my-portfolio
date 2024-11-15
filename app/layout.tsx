import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "my-portfolio",
  description: "Kazuki Ogawa のポートフォリオサイトです",
  openGraph: {
    title: "my-portfolio",
    description: "Kazuki Ogawa のポートフォリオサイトです",
    url: "https://my-portfolio-wine-delta-17.vercel.app",
    images: "/metamon.jpg",
    siteName: "my-portfolio",
  },
  twitter: {
    card: "summary",
    title: "my-portfolio",
    description: "Kazuki Ogawa のポートフォリオサイトです",
    images: "/metamon.jpg",
  },
  keywords: ["portfolio", "ogawa", "kazuki"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </head>
      <body className="font-sf antialiased max-w-xl mx-4 mt-8 sm:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
