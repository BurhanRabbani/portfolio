import Link from "next/link";
import { FC } from "react";

const NavItem: FC<{
  activeItem: string;
  setActiveItem: Function;
  href: string;
  name: string;
}> = ({ activeItem, setActiveItem, href, name }) => {
  return activeItem !== name ? (
    <Link scroll={false} href={href}>
      <a>
        <span
          className="hover:cursor-pointer hover:text-green"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
