import { FC } from "react";
import { IService } from "../type";
import { IconType } from "react-icons";
import FromReactIcon from "./Icon";

const ServiceCard: FC<{ service: IService }> = ({
  service: { title, description, icon },
}) => {
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="p-2 flex items-center space-x-4">
      <FromReactIcon icon={icon} className="h-12 w-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup(description)} />
      </div>
    </div>
  );
};

export default ServiceCard;
