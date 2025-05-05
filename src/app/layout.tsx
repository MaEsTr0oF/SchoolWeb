import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { PT_Sans_Caption, Montserrat } from "next/font/google";

// Настраиваем шрифт PT Sans Caption
const ptSansCaption = PT_Sans_Caption({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

// Настраиваем шрифт Montserrat
const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Онлайн-школа",
  description: "Образовательная онлайн-платформа",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${ptSansCaption.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
