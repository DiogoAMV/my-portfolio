"use client";
import { ProjectProps, projects } from "@/app/data";
import { TbWorld } from "react-icons/tb";
import ProjectList from "@/components/ProjectList";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import ProjectsOverviewButton from "@/components/ProjectsOverviewButton";
import SectionSubtitle from "@/components/SectionSubtitle";
import Button from "@/components/Button";
import { redirect } from "@/utils/redirect";

export default function ClientComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [post, setPost] = useState<ProjectProps>();
  const [image, setImage] = useState<StaticImageData | null>(null);
  const router = useParams();

  function handleOpenModal() {
    if (modalIsOpen) {
      setModalIsOpen(false);
    } else {
      setModalIsOpen(true);
    }
  }

  useEffect(() => {
    const id = router.slug;
    const post = projects.find((post) => post.id === id);
    setPost(post);
  }, []);

  const handleShowImage = (image: StaticImageData) => {
    setImage(image);
    document.body.style.overflow = "hidden";
  };

  const handleCloseImage = () => {
    setImage(null);
    document.body.style.overflowY = "auto";
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "linear",
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        ease: [0.075, 0.82, 0.165, 0],
      },
    },
    exit: {
      y: 160,
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  return (
    post && (
      <div className="flex flex-col w-full items-center">
        <AnimatePresence>
          {image && (
            <motion.div
              variants={container}
              animate="visible"
              initial="hidden"
              exit="exit"
              className={`flex w-screen h-screen fixed items-center justify-center left-0 transition-all duration-300 ease-in-out z-50 overflow-hidden`}
            >
              <motion.div
                variants={child}
                animate="visible"
                initial="hidden"
                exit="exit"
                className="p-10"
              >
                <Image
                  alt="Imagem do projeto"
                  src={image}
                  width={1280}
                  height={720}
                  className={`flex rounded-xl origin-customTransform transition-all duration-300 ease-in-out`}
                />
              </motion.div>
              <div
                onClick={() => handleCloseImage()}
                className="absolute w-full h-full bg-zinc-900/90 -z-10 backdrop-blur-sm"
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
        <Modal
          url={post.deploy}
          isOpen={modalIsOpen}
          handleOpenModal={handleOpenModal}
        />
        <article className="flex flex-col items-center p-8 sm:py-20 md:py-28 xl:py-36 2xl:py-52 sm:max-w-xl md:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl transition-all">
          <header className="flex flex-col w-full">
            <Link
              href="/projects"
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
          </header>
          {post.detailsProjectImages ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2 mt-6 ">
              {post.detailsProjectImages.map((image, i) => (
                <button
                  key={i}
                  className="flex w-full h-full overflow-hidden rounded-xl group/img border-[1px] border-zinc-900 hover:border-zinc-700 duration-300  transition-all"
                  onClick={() => handleShowImage(image)}
                >
                  <Image
                    key={i}
                    alt="Imagem do projeto"
                    src={image}
                    className="w-full h-full group-hover/img:scale-110  duration-300 transition-all"
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

          <div className="flex flex-col xl:flex-row gap-2 mt-6 w-full text-base sm:text-lg">
            <div className="flex flex-col gap-3 p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800">
              <h2 className="font-semibold text-xl">Visão geral</h2>
              <div className="flex flex-col text-zinc-500 gap-3 overview">
                {post.overview}
              </div>
              <div className="flex flex-col mt-auto md:flex-row w-full gap-3 md:gap-1">
                {post.deploy && (
                  <Button
                    className="bg-zinc-800"
                    onClick={() => handleOpenModal()}
                    buttonAction="LINK"
                    icon={<TbWorld />}
                  >
                    Ver Demo
                  </Button>
                )}
                {post.github && (
                  <Button
                    className="bg-transparent"
                    onClick={() => redirect(post.github)}
                    buttonAction="LINK"
                    icon={<FiGithub />}
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </div>
            <div className="flex relative flex-col p-4 rounded-xl bg-zinc-900 w-full border-[1px] border-zinc-800 overflow-hidden">
              <h2 className="font-semibold text-xl">Especificações</h2>
              <div className="overflow-hidden">
                <ul className="text-zinc-500 mt-3">
                  {post.specifications.map((item, i) => (
                    <li className="" key={i}>
                      {item}
                      <div className="h-[1px] bg-zinc-800 w-full my-3"></div>
                    </li>
                  ))}
                </ul>
                <div className="flex w-full justify-center mt-4">
                  <ul className="flex max-w-[200px] sm:max-w-full sm:text-zinc-500">
                    <Marquee
                      pauseOnHover={true}
                      autoFill={true}
                      gradient
                      gradientColor="rgb(24 24 27 / 1)"
                      className="flex w-screen text-2xl"
                    >
                      {post.technologies.map((item, i) => (
                        <li className="mx-2" key={i}>
                          {item}
                        </li>
                      ))}
                    </Marquee>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-24 gap-4">
            <div className="flex flex-row justify-between items-center">
              <SectionSubtitle title="Você também pode gostar" />
              <ProjectsOverviewButton />
            </div>
            <ProjectList pageType="detailProject" />
          </div>
        </article>
      </div>
    )
  );
}
