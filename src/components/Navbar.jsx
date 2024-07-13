import React from "react";
import Logo from "../assets/svg/logo.svg?react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='w-full h-[94px] px-[100px] py-6 text-2xl flex justify-between items-center fixed top-0 z-40 bg-white shadow-md'>
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className='hover:*:bg-light_blue *:px-[14px] *:py-[7px] *:rounded-lg flex gap-4 *:cursor-pointer'>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <button className='bg-primary text-white px-[47px] rounded-[14px] py-[11px]'>
        Buy Now!
      </button>
    </nav>
  );
}

export default Navbar;
