import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 items-center justify-center p-8">
      <Image
        src="/images/loader.gif"
        alt="Brand logo"
        width={150}
        height={150}
        style={{
          height: "auto",
        }}
        priority
      />
      <p className="font-bungee text-lg">DAIRYLOG...</p>
    </div>
  );
}
