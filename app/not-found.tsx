import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-auto px-5 max-w-lg text-center font-quicksand">
      <Image
        src="/images/404.png"
        alt="Brand logo"
        width={400}
        height={400}
        style={{
          height: "auto",
        }}
        className="rounded-xl"
        priority
      />
      <h1 className="font-bungee text-xl sm:text-3xl my-4">Not Found</h1>
      <p>It seems like you got bit lost</p>
    </div>
  );
}
