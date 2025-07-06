import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between text-2xl text-white bg-transparent my-5 gap-90 font-semibold w-full ">
      <span className="w-[30%] text-center cursor-pointer">
        <i className="fa-solid fa-laptop-code text-5xl"></i>
      </span>
      <ul className="flex gap-40 text-center w-[70%]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Skils</li>
        <li className="cursor-pointer">Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
