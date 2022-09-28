import React from "react";
import { Bell, User, ChevronDown, Search } from "react-feather";

interface Props {
  user: { name: string; avatar: string; notifications: number };
}

const Header: React.FC<Props> = (props) => {
  const { name, avatar, notifications } = props.user;
  return (
    <div className="h-14 w-full bg-primary flex gap-8 items-center justify-between px-6 py-[18px] sticky top-0 z-10">
      <div className="w-56 mr-2">
        <img src="/logo.svg" className="w-32" alt="Logo" />
      </div>
      <div className="flex-1">
        <label className="flex relative bg-white items-center max-w-[354px]">
          <Search className="mx-3 w-4 h-4 z-10 text-subtle-text" />
          <input
            type="search"
            className="text-sm py-[6px] rounded  w-full absolute z-0 pl-9 px-2 placeholder:text-subtle-text"
            placeholder="Search wines, customers here..."
          />
        </label>
      </div>
      <div className="flex items-center justify-between gap-6 text-white">
        <button className="hover:bg-white rounded-full p-2 hover:bg-opacity-10">
          <Bell className="w-6 h-6" />
        </button>
        <button className="flex items-center gap-2 hover:bg-white rounded-full px-2 py-1 hover:bg-opacity-10">
          <h1 className="font-bold">{name}</h1>
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-white">
            {avatar ? <img src={avatar} alt="Avatar" /> : <User />}
          </div>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default Header;
