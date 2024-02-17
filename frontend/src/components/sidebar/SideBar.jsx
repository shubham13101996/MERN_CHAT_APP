import React from "react";
import SearchInput from "./SearchInput";
import Logout from "./Logout";
import Conversations from "./Conversations";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3 "></div>
      <Conversations />
      <Logout />
    </div>
  );
};

export default SideBar;
