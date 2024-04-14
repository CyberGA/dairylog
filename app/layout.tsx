import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavigationHeader from "@/components/navigation-header";
import localFont from "next/font/local";

// const fontQuicksand = Quicksand({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-quicksand",
// });

const fontBungee = localFont({
  display: "swap",
  src: "../public/fonts/Bungee-Regular.ttf",
  variable: "--font-bungee",
});

const fontQuicksand = localFont({
  display: "swap",
  src: "../public/fonts/Quicksand-VariableFont_wght.ttf",
  variable: "--font-quicksand",
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
          "min-h-screen bg-[#EDECEA] font-sans antialiased",
          fontQuicksand.variable,
          fontBungee.variable
        )}
      >
        <NavigationHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
