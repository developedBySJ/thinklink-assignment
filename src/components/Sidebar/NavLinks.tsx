import React from "react";
import clsx from "clsx";
import { Icon } from "react-feather";

interface Props {
  name: string;
  icon: Icon;
  path: string;
  isActive: boolean;
}

const NavLinks: React.FC<Props> = (props) => {
  const { icon: NavIcon, isActive, name, path } = props;
  return (
    <button
      className={clsx(
        "px-6 flex items-center gap-4 py-4  w-full hover:bg-[#F7F1F3]",
        isActive
          ? "bg-[#F7F1F3] text-primary border-r-2 border-primary"
          : "text-body-text"
      )}
    >
      <NavIcon className="w-6 h-6" />
      <span className="font-semibold">{name}</span>
    </button>
  );
};

export default NavLinks;
