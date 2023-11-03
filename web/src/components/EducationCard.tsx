import Image, { StaticImageData } from "next/image";
import { IoIosArrowForward } from "react-icons/io";

interface EducationCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export default function EducationCard({
  title,
  image,
  subtitle,
}: EducationCardProps) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-fit bg-zinc-900 overflow-hidden gap-1 cursor-pointer border-[1px] border-transparent hover:bg-transparent text-zinc-400 hover:text-white transition-all duration-300">
      <div className="flex w-full h-full">
        <div className="">
          <Image
            className="w-20 sm:w-32"
            src={image}
            alt="Imagem do curso/faculdade"
          />
        </div>
        <div className="flex w-full items-center justify-between px-2 sm:px-4">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xs sm:text-lg text-white">
              {title}
            </h1>
            <p className="text-zinc-400 text-xs font-normal sm:text-base">
              {subtitle}
            </p>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
