import Image, { StaticImageData } from "next/image";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export default function ProjectCard({
  title,
  subtitle,
  image,
}: ProjectCardProps) {
  return (
    <li className="flex flex-col gap-2 w-full">
      <div className="flex bg-zinc-800 rounded-xl aspect-video items-center justify-center border-[1px] cursor-pointer border-transparent hover:border-zinc-200 transition-all duration-300 group overflow-hidden">
        <Image
          alt="Imagem do projeto"
          src={image}
          className="rounded-xl w-full h-full group-hover:blur-sm transition-all duration-300"
        />
        <div className="hidden group-hover:flex justify-center items-center absolute text-2xl">
          <FiExternalLink />
        </div>
      </div>
      <div>
        <a className="flex items-center gap-2 text-base sm:text-xl text-zinc-300 hover:brightness-125 transition-all cursor-pointer hover:underline">
          {title}
          {/* <IoIosArrowRoundForward /> */}
        </a>
        <p className="text-xs sm:text-base text-zinc-400">{subtitle}</p>
      </div>
    </li>
  );
}
