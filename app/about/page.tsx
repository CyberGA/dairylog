import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const dairLogFeatures = [
  "Free use",
  "Calendar",
  "Search within entries",
  "Convenient Editor",
  "Insert Images",
  "Automatic Saving",
  "Automatic logout in case of inactivity",
];

export default function Page() {
  return (
    <>
      <div className="border-t relative z-0 py-20 px-5 flex flex-col items-center font-quicksand bg-[url('/images/journal.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute z-1 top-0 bottom-0 right-0 left-0 bg-black/60 "></div>
        <div className="relative z-[2]">
          <h1 className="text-[34px] text-center font-bold text-white my-10 font-bungee">
            DairyLog Features
          </h1>
          <div className="w-full flex flex-wrap gap-5 justify-center">
            {dairLogFeatures.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3">
                <div className="bg-white/20 p-5 border border-cDark rounded-lg">
                  <h2 className="text-lg text-white font-semibold">{item}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-10">
            <Link href="/register">
              <div className="w-fit bg-white hover:shadow-md font-semibold px-10 py-5 text-cBlue cursor-pointer rounded-full duration-300">
                Get Started Now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-20 px-5 flex flex-col items-center font-quicksand">
        <Image src="/images/lock.png" alt="Security" width={100} height={100}  />
        <h1 className="text-[34px] text-center font-bold text-cBlue leading-tight my-10 font-bungee">
          Private and Secure
        </h1>
        <p className="text-center max-w-5xl w-full mx-auto">
          DairyLog offers you the safest place for your thoughts. A
          comprehensive security concept protects your content against
          unauthorized access. And this is how it works:
        </p>
        <p className="text-center max-w-5xl w-full mx-auto">
          As soon as content created by you is saved, it is directly encrypted
          on your computer, i.e. even before its leaves your device and is
          transferred to the server via the Internet. With this end-to-end
          encryption approach monkkee set themselves apart from other
          competitors who do not encrypt user data at all or only provide
          server-side encryption.
        </p>
      </div>

      <div className="mb-12 py-20 px-5 flex flex-col border-t items-center font-quicksand">
        <Image
          src="/images/accessible.png"
          alt="Security"
          width={100}
          height={100}
        />
        <h1 className="text-[34px] text-center font-bold text-cBlue leading-tight my-10 font-bungee">
          Access anytime, anywhere
        </h1>
        <p className="text-center max-w-5xl w-full mx-auto">
          To use DairyLog all you need is a computer with Internet access.
          Whether you are at home or on the move - if you have a sudden urge to
          write, you can access your data at any time and from anywhere.
        </p>
      </div>
      <Footer />
    </>
  );
}
