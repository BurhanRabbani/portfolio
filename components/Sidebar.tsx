import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import useTheme from "next-theme";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light"); // toggle theme
  };

  return (
    <div>
      <Image
        className="w-full h-full rounded-full mx-auto"
        src="https://lh3.googleusercontent.com/a-/AOh14Gib0MSlq1HwsWspK54maWTVHbis5GzOA8eb8sv7=s83-c-mo"
        alt="user-avatar"
        width={200}
        height={200}
        quality={100}

      />
      <h3 className="my-3 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Burhan</span> Rabbani
      </h3>
      <p className="min-h-[50px] px-2 py-1 my-6 bg-gray-200 dark:bg-dark-200 rounded-full justify-center items-center text-center flex">
        Full Stack Web Dev. & <br /> Mobile Application Dev.
      </p>
      <a
        className="min-h-[50px] px-2 py-1 my-6 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center"
        href="/assets/resume.pdf"
        download="burhan resume.pdf"
      >
        <GiTie className="w-8 h-8" /> Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto">
        <a href="" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube className="w-12 h-12 cursor-pointer" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="w-12 h-12 cursor-pointer" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="w-12 h-12 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div className="my-5 py-4 bg-gray-200 dark:bg-dark-200 ml-[-0.75rem] mr-[-0.75rem]">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Kerala, India</span>
        </div>
        <p className="my-2 ">burhanrabz@gmail.com</p>
        <p className="my-2 ">+91 7012836907 / +91 9526669197</p>
      </div>
      {/* Email Button */}
      <button
        className="min-w-[200px] font-bold bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-4 px-5 text-white my-2 hover:shadow-lg shadow-green hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={() => window.open("mailto:burhanrabz@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="min-w-[200px] font-bold bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-4 px-5 text-white my-2 hover:shadow-lg shadow-green hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={changeThemeMode}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
