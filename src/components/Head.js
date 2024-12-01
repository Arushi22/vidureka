import React from "react";
import { FaBars, FaYoutube, FaUserCircle, FaSearch } from "react-icons/fa"; 
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Head() {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => { //this will dispatch an action
        dispatch(toggleMenu());
    }
  return (
    <div className="flex items-center justify-between p-4 m-2 shadow-md bg-white">
      <div className="flex items-center space-x-4">
        <FaBars className="cursor-pointer"
            onClick={() =>toggleMenuHandler()}
        size={24} />
        <FaYoutube size={40} color="red" />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <input 
          type="text" 
          className="w-full border-2 border-gray-300 rounded-l-full p-3 text-sm focus:outline-none" 
          placeholder="Search"
        />
        <button className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-r-full p-3 hover:bg-gray-200 focus:outline-none">
          <FaSearch size={18} color="gray" />
        </button>
      </div>
      <div>
        <FaUserCircle size={30} color="blue" />
      </div>
    </div>
  );
}

export default Head;
