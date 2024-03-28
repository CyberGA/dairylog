import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans, Quicksand, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontQuicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});
const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
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
          fontSans.variable, fontQuicksand.variable, fontRoboto.variable
        )}
      >
        <NavigationHeader />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
