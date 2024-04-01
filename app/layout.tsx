import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans, Quicksand, Bungee } from "next/font/google";
import { cn } from "@/lib/utils";
import NavigationHeader from "@/components/navigation-header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontQuicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});
const fontBungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

export const metadata: Metadata = {
  title: "DiaryLog",
  description: "Personal Diary Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased",
          fontSans.variable, fontQuicksand.variable, fontBungee.variable
        )}
      >
        <NavigationHeader />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
