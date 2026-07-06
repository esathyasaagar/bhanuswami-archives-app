import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: "Bhanu Swami Archives – Lectures, Seminars & Festivals",
  description: "Comprehensive archive of lectures, seminars, and festival talks by His Holiness Bhanu Swami Maharaja on Śrīmad-Bhāgavatam, Bhagavad-gītā, and Vaiṣṇava philosophy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
