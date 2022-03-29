import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
const Layout = ({ children }: { children: ReactElement }) => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32">
        <div className="xl:col-span-3 bg-white dark:bg-dark-500 rounded-2xl p-3 col-span-12 text-center shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="xl:col-span-9 shadow-custom-light dark:shadow-custom-dark bg-white rounded-2xl col-span-12 flex flex-col overflow-hidden dark:bg-dark-500">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <main key={router.pathname}>{children}</main>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Layout;
