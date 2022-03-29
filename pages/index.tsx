import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { IService } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const Home: NextPage<{ services: IService[] }> = ({ services }) => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow justify-between"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium ">
        I am currently pursuing a career in software development. I have a wide
        range of skills and experience in the field. I am currently working on a
        project that will be used to help people in the community. I am
        currently working on a project that will be used to help people in the
        community. I am currently working on a project that will be used to help
        people in the community.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-500 flex-grow ml-[-1.5rem] mr-[-1.5rem] pb-16">
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg shadow-lg p-4"
              key={service.id}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  const data = await res.json();
  return {
    props: { services: data.services },
  };
};
