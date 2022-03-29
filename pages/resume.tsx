import { GetStaticPropsContext, NextPage } from "next";
import SkillLevelBar from "../components/SkillLevelBar";
import { languages, tools } from "../data";
import { ISkill } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const Resume: NextPage<{ languages: ISkill[]; tools: ISkill[] }> = ({
  languages,
  tools,
}) => {
  return (
    <motion.div
      className="px-4 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Education & Experience */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science - University of Kannur
            </h5>
            <p className="font-semibold">Sa-Adiya Science & Arts (2016-2019)</p>
            <p className="my-3">
              I have completed my studies in computer science with a focus on
              architecture and software development.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Core-Drops (2019-2021)</p>
            <p className="my-3">
              I am currently working on a project that will be used to help
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages & Tools */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <SkillLevelBar data={language} key={language.id} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <SkillLevelBar data={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;

export const getStaticProps = (context: GetStaticPropsContext) => {
  const data = { languages, tools };

  return {
    props: data,
  };
};
