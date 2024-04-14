"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavigationHeader = () => {
  const segment = useSelectedLayoutSegment();

  if (segment == "dashboard") {
    return null
  }

  return (
    <nav
      className={`px-5 py-7 sticky z-[99] top-0 font-quicksand border-b ${
        segment == "contact" || segment == "about"
          ? "bg-white"
          : "backdrop-blur-md bg-white/30"
      }`}
    >
      <div className="container flex items-center gap-8 justify-between">
        <div className="">
          <Image
            src="/images/brand-logo.svg"
            alt="Brand logo"
            width={180}
            height={64}
            style={{
              height: "auto",
            }}
            className="w-[150px] h-[48px] lg:w-[180px] sm:h-16 duration-300"
            priority
          />
        </div>
        <div className="hidden md:flex gap-8 text-cGrey">
          <Link
            href="/"
            className={`text-xl duration-300 ${
              segment == null
                ? "text-cBlue font-semibold"
                : "hover:text-cBlue hover:font-semibold"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-xl duration-300 ${
              segment == "about"
                ? "text-cBlue font-semibold"
                : "hover:text-cBlue hover:font-semibold"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-xl duration-300  ${
              segment == "contact"
                ? "text-cBlue font-semibold"
                : "hover:text-cBlue hover:font-semibold"
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          <Link href="/login">
            <div className="border  border-cBlue hover:shadow-md px-6 py-2 text-cDark cursor-pointer rounded-full duration-300">
              Login
            </div>
          </Link>
          <Link href="register">
            <div className="bg-cBlue hover:shadow-md border  border-cBlue px-6 py-2 text-white cursor-pointer rounded-full duration-300">
              Register
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
