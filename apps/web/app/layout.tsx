import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Bhanu Swami Archives – Lectures, Seminars & Festivals",
  description: "Comprehensive archive of lectures, seminars, and festival talks by His Holiness Bhanu Swami Maharaj on Śrīmad-Bhāgavatam, Bhagavad-gītā, and Vaiṣṇava philosophy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
