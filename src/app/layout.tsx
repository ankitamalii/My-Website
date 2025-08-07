import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankita Mali",
  description: "Ankita Mali's Portfolio 3D designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
