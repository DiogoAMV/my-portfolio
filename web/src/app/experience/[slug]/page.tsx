"use client";
import { projects } from "@/app/data";
import Text from "@/components/Text";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  projectType: string;
  jobType: string;
  github: string;
  deploy: string;
  description: string;
  overview: JSX.Element;
  specifications: string[];
  detailsProjectImages?: StaticImageData[];
  technologies: JSX.Element[];
  image: StaticImageData;
}

export default function Post() {
  const [post, setPost] = useState<ProjectProps>();
  const [image, setImage] = useState<StaticImageData | null>(null);
  const router = useParams();

  useEffect(() => {
    const id = router.slug;
    const post = projects.find((post) => post.id === id);
    setPost(post);
  }, []);

  const handleShowImage = (image: StaticImageData) => {
    setImage(image);
  };

  const handleCloseImage = () => {
    setImage(null);
  };

  return (
    post && (
      <div className="flex flex-col w-full items-center">
        {image && (
          <div
            className={`flex w-screen h-screen fixed items-center justify-center p-4 sm:p-0 left-0 transition-all duration-300 ease-in-out `}
          >
            <div className="flex max-w-xl lg:max-w-2xl xl:max-w-4xl transition-all ">
              <Image
                alt="Imagem do projeto"
                src={image}
                className={`rounded-xl aspect-video origin-customTransform transition-all duration-300 ease-in-out `}
              />
            </div>
            <div
              onClick={() => handleCloseImage()}
              className="absolute w-full h-full bg-black/70 -z-10"
            ></div>
          </div>
        )}
        <article className="flex flex-col items-center p-8 sm:py-20 md:py-28 xl:py-36 2xl:py-52 sm:max-w-xl md:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl transition-all">
          <header className="flex flex-col w-full">
            <Link
              href="/experience"
              className="flex items-center rounded-xl text-white p-3 w-full max-w-[160px] hover:bg-white hover:text-zinc-950 transition-all font-semibold duration-300 gap-1 mb-4"
            >
              <IoIosArrowBack /> Voltar
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-500">{post.subtitle}</p>
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold">
                {post.title}
              </h1>
            </div>

            {post.detailsProjectImages ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 mt-6">
                {post.detailsProjectImages.map((image, i) => (
                  <button onClick={() => handleShowImage(image)}>
                    <Image
                      key={i}
                      alt="Imagem do projeto"
                      src={image}
                      className="w-full h-full rounded-xl aspect-video"
                    />
                  </button>
                ))}
              </ul>
            ) : (
              <Image
                alt="Imagem do projeto"
                src={post.image}
                className="rounded-xl w-full h-full mt-6"
              />
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-6 w-full">
              <li className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800">
                <h2 className="text-zinc-500">🕒 Período:</h2>
                <p className="text-white font-semibold">{post.period}</p>
              </li>
              <li className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800">
                <h2 className="text-zinc-500">🖥️ Tipo de projeto:</h2>
                <p className="text-white font-semibold">{post.projectType}</p>
              </li>
              <li className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800">
                <h2 className="text-zinc-500">👔 Cargo:</h2>
                <p className="text-white font-semibold">{post.jobType}</p>
              </li>
            </ul>

            <ul className="flex flex-col sm:flex-row gap-2 mt-6 w-full text-base sm:text-lg">
              <li className="flex flex-col gap-3 p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800">
                <h2 className="font-semibold text-xl">Visão geral</h2>
                <div className="flex flex-col text-zinc-500 gap-3 overview">
                  {post.overview}
                </div>
                <div className="flex flex-col md:flex-row w-full gap-3 md:gap-1">
                  {post.github && (
                    <a
                      href={post.github}
                      target="_blank"
                      className="flex items-center rounded-xl bg-transparent border-[1px] border-darkBorder p-3 w-full hover:border-zinc-400  justify-center gap-4   transition-all duration-200  origin-customTransform text-sm xl:text-base text-white"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {post.deploy && (
                    <a
                      target="_blank"
                      href={post.deploy}
                      className="flex items-center rounded-xl bg-zinc-800 border-[1px] border-darkBorder p-3 w-full hover:bg-white hover:text-zinc-900 hover:border-zinc-800  justify-center gap-4   transition-all duration-200 origin-customTransform text-sm xl:text-base"
                    >
                      <FiExternalLink /> Ver Demo
                    </a>
                  )}
                </div>
              </li>
              <li className="flex flex-col p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800">
                <h2 className="font-semibold text-xl">Especificações</h2>
                <ul className="text-zinc-500 mt-3">
                  {post.specifications.map((item, i) => (
                    <li className="" key={i}>
                      {item}
                      {i === post.specifications.length - 1 ? null : (
                        <div className="h-[1px] bg-zinc-800 w-full my-3"></div>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </header>

          <section className="flex flex-col my-6 w-full rounded-xl bg-zinc-900 p-6 text-zinc-500 border-[1px] border-zinc-800">
            <Text type="paragraph">{post.description}</Text>
          </section>
        </article>
      </div>
    )
  );
}
