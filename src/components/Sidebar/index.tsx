import React from "react";
import navLinks from "../../dummyData/navlinks";
import NavLinks from "./NavLinks";
import { ArrowLeft } from "react-feather";

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen fixed top-0 left-0 border-r border-[#ECF1F4] flex flex-col justify-between pt-14">
      <div>
        {navLinks.map((link) => (
          <NavLinks key={link.id} {...link} />
        ))}
      </div>
      <div className="relative p-6">
        <img src="/logo-text.svg" alt="Logo" className="w-20 mb-3" />
        <p className="text-subtle-text text-xs">
          © 2020 CorkOwl, All Rights Reserved.
        </p>
        <button className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-full">
          <ArrowLeft className="bg-secondary rounded-full text-white p-1" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
