import React, { useContext } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { AppContext } from "../App";

const Header = () => {
  const {setSearchInput} = useContext(AppContext);
  return (
    <nav className="flex items-center md:container md:mx-auto mx-5 justify-between py-4">
      <p className="text-xl font-extrabold text-[#14074c]">Image Gallery</p>
      <div className="hidden md:block">
        <input
          className="border rounded-lg focus:outline-none bg-gray-200 w-64 lg:w-96 p-2"
          type="search"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search images"
        ></input>
      </div>
      <ul className="hidden md:flex items-center gap-4 text-lg font-bold text-[#14074c]">
        <li>Explore</li>
        <li>Collection</li>
        <li>Community</li>
      </ul>
      <div className="flex gap-4 md:hidden">
        <FaSearch className="text-xl"/>
        <FaBars className="text-xl"/>
      </div>
    </nav>
  );
};

export default Header;
