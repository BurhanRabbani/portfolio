import { FC } from "react";
import { Category } from "../type";

export const ProjectsNavbarItem: FC<{ value: Category | "all", handleFilterCategory:Function, active:string }> = ({
  value,
  handleFilterCategory,
  active
}) => {
    let className = "cursor-pointer hover:text-green capitalize";
    if(value === active)
        className += " text-green";
    
  return (
    <li className={className}
    onClick={() => handleFilterCategory(value)}
    >{value}</li>
  );
};

const ProjectsNavbar:FC<{handleFilterCategory: Function, active:string}> = (props) => {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-auto">
      <ProjectsNavbarItem value="all" {...props}/>
      <ProjectsNavbarItem value="react" {...props}/>
      <ProjectsNavbarItem value="mongo" {...props}/>
      <ProjectsNavbarItem value="django" {...props}/>
      <ProjectsNavbarItem value="node" {...props}/>
      <ProjectsNavbarItem value="express" {...props}/>
      <ProjectsNavbarItem value="next" {...props}/>
    </div>
  );
};

export default ProjectsNavbar;
