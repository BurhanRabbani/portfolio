import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("About");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between p-4 my-3">
      <span className="font-bold text-green text-xl border-b-4 border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-6">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          href="/"
          name="About"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          href="/projects"
          name="Projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          href="/resume"
          name="Resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
