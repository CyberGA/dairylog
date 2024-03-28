import Image from "next/image";

interface descriptionProps {
    image: string,
    title: string,
    desc: string
}

const DescriptionCard: React.FC<descriptionProps> = ({ image, title, desc }) => {
    return <div className="flex flex-col items-center gap-3 font-quicksand max-w-[308px] w-full">
        <Image
            src={image}
            width={56}
            height={40}
            alt={title}
            priority
          />
          <p className="text-cDark text-xl font-bold">
            {title}
          </p>
          <p className="text-cGrey text-xl font-semibold text-center">
            {desc}
          </p>
    </div>
};

export default DescriptionCard;