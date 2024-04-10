import Image from "next/image";
import Link from "next/link";
import DescriptionCard from "@/components/description";
import { quotes } from "@/lib/quotes";
import Footer from "@/components/footer";
import FAQs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto font-quicksand px-6">
        <div className="my-20 ">
          <div className="flex flex-col md:flex-row gap-7 items-center justify-center md:justify-between duration-300">
            <div className="text-cDark max-w-md lg:max-w-full text-center md:text-left">
              <h1 className="text-4xl lg:text-[54px] leading-tight">
                Embark on a Journey of{" "}
                <span className="text-cBlue font-bold font-bungee">
                  {" "}
                  SELF DISCOVERY
                </span>{" "}
                and{" "}
                <span className="text-cBlue font-bold font-bungee">
                  EXPRESSION
                </span>
              </h1>
              <p className="text-cGrey text-xl font-semibold my-6 max-w-md">
                Capture Moments, Reflect on Your Journey and Ignite Personal
                Growth
              </p>
              <div className="w-full flex justify-center md:block ">
                <Link href="/register">
                  <div className="w-fit bg-cDark hover:shadow-md px-6 py-3 text-white cursor-pointer rounded-full duration-300">
                    Get Started Now
                  </div>
                </Link>
              </div>
            </div>
            <Image
              src="/images/writing.png"
              width={654}
              height={635}
              alt="Writing diary"
              style={{
                height: "auto",
              }}
              priority
              className="w-[425px] h-[400px] md:w-[654px] md:h-[635px] duration-300"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center lg:justify-between gap-5 flex-wrap mb-[100px]">
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
      </div>
      <div className="mb-[100px] px-6">
        <h1 className="text-4xl lg:text-[54px] text-center font-bold text-cBlue leading-tight mb-10">
          Journaling Your Life&#39;s Journey
        </h1>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {quotes.map((item, id) => (
            <div
              key={id}
              className="w-[280px] h-fit rounded-lg hover:shadow-md px-7  py-6 bg-[#232327] text-cBlue duration-300"
            >
              <p className="text-white mb-6">{item.quote}</p>
              <p className="font-semibold text-right">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 px-6 font-quicksand">
        <h1 className="text-4xl text-center font-bold text-cDark leading-tight mb-10 font-bungee">
          Frequently Asked Questions
        </h1>
        <FAQs />
      </div>
      <div className="border-t py-20 px-6 font-quicksand">
        <h1 className="text-4xl text-center text-cBlue font-bold leading-tight mb-10 font-bungee">
          Keep a private and free online diary
        </h1>
        <p className="text-center max-w-5xl w-full mx-auto">
          You want to keep your thoughts in a place where no one can find them?
          Or capture great ideas so they do not get lost? The online diary
          monkkee offers you a safe place for your very personal topics.
        </p>
        <div className="w-full flex justify-center mt-6">
          <Link href="/register">
            <div className="w-fit bg-cBlue hover:shadow-md px-10 py-5 text-white cursor-pointer rounded-full duration-300">
              Get Started Now - It's free!
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
