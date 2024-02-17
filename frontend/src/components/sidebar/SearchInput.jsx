import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="search"
        placeholder="Search..."
        className="input input-bordered rounded-full "
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchInput;
