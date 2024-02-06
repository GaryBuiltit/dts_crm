import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return (
    <div className="relative flex items-center ml-4 mt-4">
      <FaSearch className="absolute ml-2" />
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full max-w-xs pl-10 shadow-lg"
      />
    </div>
  );
}
