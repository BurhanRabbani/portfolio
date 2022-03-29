import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { Category, IProject } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
const Projects: NextPage<{ projectsData: IProject[] }> = ({ projectsData }) => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [active, setActive] = useState("all");
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const filteredData = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredData);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-auto"
      style={{ height: "45vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-4 my-3 relative"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
            key={project.id}
          >
            <ProjectCard
              project={project}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/projects`);
  const data = await res.json();
  return {
    props: { projectsData: data.projects },
  };
};
