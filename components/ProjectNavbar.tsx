import React from "react";
import { category } from "../type";

export const NavItem: React.FC<{
  value: category | "all";
  handleFilter: Function;
  active: string;
}> = ({ value, handleFilter, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";

  if (active === value) {
    className += " text-green";
  }

  return (
    <>
      <li className={className} onClick={() => handleFilter(value)}>
        {value}
      </li>
    </>
  );
};

const ProjectNavbar: React.FC<{ handleFilter: Function; active: string }> = (
  props
) => {
  return (
    <>
      <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none ">
        <NavItem value="all" {...props} />
        <NavItem value="React" {...props} />
        <NavItem value="Solidity" {...props} />
        <NavItem value="Python" {...props} />
      </div>

      <div></div>
    </>
  );
};

export default ProjectNavbar;
