"use client";
import { projects } from "@/app/data";
import Text from "@/components/Text";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
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
  technologies: JSX.Element;
  image: StaticImageData;
}

export default function Post() {
  const [post, setPost] = useState<ProjectProps>();
  const router = useParams();

  // Carrega o post de acordo com o id
  useEffect(() => {
    const id = router.slug;
    const post = projects.find((post) => post.id === id);
    setPost(post);
  }, []);

  return (
    post && (
      <GlowCapture className="flex flex-col w-full items-center">
        <article className="flex flex-col items-center p-8 sm:py-20 md:py-28 xl:py-36 2xl:py-52 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <header className="flex flex-col">
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
            <Image
              alt="Imagem do projeto"
              src={post.image}
              className="rounded-xl w-full h-full mt-6"
            />
            <Glow
              color=""
              className=""
              style={{ transition: "all .2s" }}
              debug={false}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-6 w-full">
                <li className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-900 w-full glow:bg-transparent glow:border-neutral-100 border-[1px] border-transparent">
                  <h2 className="text-zinc-500">🕒 Período:</h2>
                  <p className="text-white font-semibold">{post.period}</p>
                </li>
                <li className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-900 w-full glow:bg-transparent glow:border-neutral-100 border-[1px] border-transparent">
                  <h2 className="text-zinc-500">🖥️ Tipo de projeto:</h2>
                  <p className="text-white font-semibold">{post.projectType}</p>
                </li>
                <li className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-900 w-full glow:bg-transparent glow:border-neutral-100 border-[1px] border-transparent">
                  <h2 className="text-zinc-500">👔 Cargo:</h2>
                  <p className="text-white font-semibold">{post.jobType}</p>
                </li>
              </ul>
            </Glow>
          </header>
          <Glow
            color=""
            className=""
            style={{ transition: "all .2s" }}
            debug={false}
          >
            <section className="flex flex-col my-6 w-full rounded-xl bg-zinc-900 p-6 text-zinc-500 glow:bg-transparent glow:border-neutral-100 border-[1px] border-transparent">
              <Text type="paragraph">{post.description}</Text>

              <div className="flex flex-col gap-2 mt-4">
                {post.github && (
                  <p className="flex gap-1">
                    <span className="font-semibold">Github</span>:
                    <a
                      href={post.github}
                      target="_blank"
                      className="text-purple-500 hover:underline"
                    >
                      {post.github}
                    </a>
                  </p>
                )}
                {post.deploy && (
                  <p className="flex gap-1">
                    <span className="font-semibold">Deploy</span>:
                    <a
                      href={post.deploy}
                      target="_blank"
                      className="text-purple-500 hover:underline"
                    >
                      {post.deploy}
                    </a>
                  </p>
                )}
              </div>
            </section>
          </Glow>
        </article>
      </GlowCapture>
    )
  );
}
