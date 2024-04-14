// RichText.tsx in your components folder
import dynamic from 'next/dynamic';
import Image from "next/image";

export default dynamic(() => import('@mantine/rte'), {
  // Disable during server side rendering
  ssr: false,

  // Render anything as fallback on server, e.g. loader or html content without editor
  loader: () => <div className="flex flex-col gap-2 items-center justify-center p-8">
      <Image
        src="/images/loader.gif"
        alt="Brand logo"
        width={100}
        height={100}
        style={{
          height: "auto",
        }}
        priority
      />
      <p className="font-bungee text-lg">DAIRYLOG...</p>
    </div>,
});