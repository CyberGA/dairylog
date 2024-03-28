import Image from "next/image";
import Link from "next/link";

const NavigationHeader = () => {
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
            href="#"
            className="hover:text-cBlue font-semibold text-xl duration-300"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="hover:text-cBlue font-semibold text-xl duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="hover:text-cBlue font-semibold text-xl duration-300"
          >
            FAQs
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="border  border-cBlue hover:shadow-md px-6 py-2 text-cDark cursor-pointer rounded-full duration-300">
            <Link href="#">Login</Link>
          </div>
          <div className="bg-cBlue hover:shadow-md border  border-cBlue px-6 py-2 text-white cursor-pointer rounded-full duration-300">
            <Link href="#">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
