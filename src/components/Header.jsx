import React from "react";
import Logo from "../assets/logo_chain.svg";
import { Link } from "react-router-dom";
import UserSelection from "./UserSelection";

function Header() {
  return (
    <div className="font-sans text-white text-2xl p-4 flex flex-row justify-between bg-[#151824] drop-shadow-lg sticky top-0 z-50 ">
      <div className="flex flex-row space-x-5 items-center">
        <img src={Logo} alt="Logo" />

        <Link
          path="/"
          className="text-white text-xl font-medium hover:text-white "
        >
          Dashboard
        </Link>
        <Link
          path="/buy-sell"
          className="text-slate-500 text-xl font-normal hover:text-white "
        >
          Buy/Sell
        </Link>
      </div>
      <UserSelection />
    </div>
  );
}

export default Header;
