import Image from "next/image";


export default function Loader() {
    return (
        <div className="w-full flex items-center justify-center">
            <Image
        src="/images/loader.gif"
        alt="Brand logo"
        width={20}
        height={20}
        style={{
          height: "auto",
        }}
        priority
      />
        </div>
    )
}