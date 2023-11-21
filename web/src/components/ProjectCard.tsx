import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  id: string;
  github?: string;
  image: StaticImageData;
}

export default function ProjectCard({
  title,
  subtitle,
  image,
  id,
  github,
}: ProjectCardProps) {
  return (
    <li className="flex flex-col gap-2 w-full">
      <article className="flex flex-col rounded-xl items-center justify-center border-[1px] cursor-pointer border-zinc-800 bg-zinc-950 transition-all duration-300 group overflow-hidden">
        <Image
          alt="Imagem do projeto"
          src={image}
          className="w-full h-full group-hover:blur-sm group-hover:opacity-60 transition-all duration-300"
        />

        <div className="flex lg:hidden flex-col text-white p-4">
          <div className="flex flex-col w-full">
            <h1 className="text-sm sm:text-lg xl:text-xl font-semibold">
              {title}
            </h1>
            <p className="text-xs sm:text-base lg:text-base text-zinc-400">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full mt-6 ">
            <Link
              href={`/experience/${id}`}
              className="flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4 text-sm sm:text-base"
            >
              <HiOutlineDocumentSearch /> Detalhes
            </Link>
            <a
              href={github}
              target="_blank"
              className="flex items-center rounded-xl bg-transparent border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4 text-sm sm:text-base"
            >
              <FiExternalLink /> GitHub
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-full bg-zinc-950 duration-300 group-hover:-translate-y-[80%] border-t-[1px] border-zinc-800 text-white">
          <div className="w-full p-6 h-[110px] xl:h-[100px]">
            <div className="flex flex-col w-full">
              <h1 className="text-sm sm:text-base xl:text-xl font-semibold">
                {title}
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-row gap-2 w-full mt-6">
              <Link
                href={`/experience/${id}`}
                className="flex items-center rounded-xl bg-darkBg border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4  scale-0 group-hover:scale-100 transition-all duration-200 origin-customTransform"
              >
                <HiOutlineDocumentSearch /> Detalhes
              </Link>
              <a
                href={github}
                target="_blank"
                className="flex items-center rounded-xl bg-transparent border-[1px] border-darkBorder p-3 w-full hover:brightness-150  justify-center gap-4  scale-0 group-hover:scale-100 transition-all duration-200  origin-customTransform"
              >
                <FiExternalLink /> GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
