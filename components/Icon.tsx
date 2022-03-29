import { FC } from "react";
import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineMobile,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
const FromReactIcon: FC<{ icon: string; className?: any }> = ({
  icon,
  className,
}) => {
  const IconToElement = (icon: string, className: any) => {
    let value: JSX.Element;
    switch (icon) {
      case "RiComputerLine":
        value = <RiComputerLine className={className} />;
        break;
      case "FaServer":
        value = <FaServer className={className} />;
        break;
      case "AiOutlineAntDesign":
        value = <AiOutlineAntDesign className={className} />;
        break;
      case "AiOutlineApi":
        value = <AiOutlineApi className={className} />;
        break;
      case "AiOutlineMobile":
        value = <AiOutlineMobile className={className} />;
        break;
      case "MdDeveloperMode":
        value = <MdDeveloperMode className={className} />;
        break;
      default:
        value = <RiComputerLine className={className} />;
        break;
    }
    return value;
  };

  return IconToElement(icon, className);
};

export default FromReactIcon;
