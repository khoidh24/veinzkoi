import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Veinzkoi - Zen developer",
  description:
    "Veinzkoi is a portfolio website of Duong Hoang Khoi - a Junior Developer from Vietnam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
