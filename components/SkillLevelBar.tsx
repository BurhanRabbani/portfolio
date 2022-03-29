import { FC } from "react";
import { ISkill } from "../type";
import { BsCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
const SkillLevelBar: FC<{ data: ISkill }> = ({
  data: { name, icon, level },
}) => {

  const variant = {
    initial: {
      width: 0
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },  
  }
  return (
    <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full">
      <motion.div
        className="flex item-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        variants={variant}
        initial="initial"
        animate="animate"
        style={{
          width: `${level}`,
        }}
      >
        <BsCircleFill className="mr-3 h-6" />
        <h1>{name}</h1>
      </motion.div>
    </div>
  );
};

export default SkillLevelBar;
