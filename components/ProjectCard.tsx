import Image from "next/image";
import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FC<{
  project: IProject;
  showDetails: number | null;
  setShowDetails: (id: number | null) => void;
}> = ({
  project: { name, description, image, category, github, tags, url, id },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <Image
        className="cursor-pointer"
        src={image}
        alt={name}
        width={300}
        height={150}
        layout="responsive"
        onClick={() => setShowDetails(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="border-4 border-gray-700"
              variants={fadeInUp}
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={150}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <a
                className="flex items-center px-4 py-3 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-md"
                href={github}
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                className="flex items-center px-4 py-3 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-md"
                href={url}
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium ">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {tags.map((tag) => (
                <span
                  className="px-3 py-2 my-1 bg-gray-200 dark:bg-dark-200 rounded-md capitalize"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute top-3 right-3 rounded-full p-1 bg-gray-200 dark:bg-dark-200"
            onClick={() => setShowDetails(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
