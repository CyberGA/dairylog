import Image from "next/image";
import Link from "next/link";
import DescriptionCard from "@/components/description";
import { quotes } from "@/lib/quotes";

export default function Home() {
  return (
    <>
      <div className="font-quicksand my-20">
        <div className="flex flex-col md:flex-row gap-7 items-center justify-center md:justify-between duration-300">
          <div className="text-cDark ">
            <h1 className="text-[54px] font-semibold leading-tight">
              Embark on a Journey of{" "}
              <span className="text-cBlue font-bold"> SELF DISCOVERY</span> and{" "}
              <span className="text-cBlue font-bold">EXPRESSION</span>
            </h1>
            <p className="text-cGrey text-xl font-semibold my-6 max-w-md">
              Capture Moments, Reflect on Your Journey and Ignite Personal
              Growth
            </p>
            <div className="w-fit bg-cDark hover:shadow-md px-6 py-3 text-white cursor-pointer rounded-full duration-300">
              <Link href="#">Get Started Now</Link>
            </div>
          </div>
          <Image
            src="/images/writing.png"
            width={654}
            height={635}
            alt="Writing diary"
            priority
          />
        </div>
      </div>
      <div className="flex flex-row justify-center md:justify-between gap-5 flex-wrap mb-[100px]">
        <DescriptionCard
          image="/images/access.png"
          title="Accessibility"
          desc="Access Your Diary Immediately from Any Device, Ensuring Seamless Availability."
        />
        <DescriptionCard
          image="/images/simple.png"
          title="Simplicity"
          desc="Effortless, Capture Your Thoughts with Ease in a User-Friendly Interface."
        />
        <DescriptionCard
          image="/images/secure.png"
          title="Security"
          desc="Keep Your Digital Diary Entries Confidential, with Robust Security and Data Protection."
        />
      </div>
      <div className="mb-[100px]">
        <h1 className="text-[54px] text-center font-bold text-cBlue leading-tight mb-10">
          Journaling Your Life&#39;s Journey
        </h1>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {quotes.map((item, id) => (
            <div
              key={id}
              className="w-[280px] h-fit rounded-lg hover:shadow-md px-6  py-5 bg-cDark text-cBlue"
            >
              <p className="text-xl text-white mb-6">{item.quote}</p>
              <p className="font-semibold text-right">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
