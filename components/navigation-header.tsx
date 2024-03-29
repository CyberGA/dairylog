"use client"

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavigationHeader = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="px-5 py-10 sticky top-0 backdrop-blur-md bg-white/30">
      <div className="container flex items-center justify-between">
        <div className="">
          <Image
            src="/images/brand-logo.svg"
            alt="Brand logo"
            width={200}
            height={64}
            className="w-[150px] h-[48px] sm:w-[220px] sm:h-16 duration-300"
            priority
          />
        </div>
        <div className="hidden sm:flex gap-4 text-cGrey">
          <Link
            href="/home"
            className={`font-semibold text-xl duration-300 ${segment == null ? "text-cBlue" : "hover:text-cBlue"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-semibold text-xl duration-300 ${segment == "about" ? "text-cBlue" : "hover:text-cBlue"}`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`font-semibold text-xl duration-300  ${segment == "contact" ? "text-cBlue" : "hover:text-cBlue"}`}
          >
            Contact Us
          </Link>
          <Link
            href="/faqs"
            className={`font-semibold text-xl duration-300  ${segment == "faqs" ? "text-cBlue" : "hover:text-cBlue"}`}
          >
            FAQs
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="border  border-cBlue hover:shadow-md px-6 py-2 text-cDark cursor-pointer rounded-full duration-300">
            <Link href="/login">Login</Link>
          </div>
          <div className="bg-cBlue hover:shadow-md border  border-cBlue px-6 py-2 text-white cursor-pointer rounded-full duration-300">
            <Link href="register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
