import React from "react";
import { assets } from "../assets/assets";

const Hotelreg = () => {
  return (
    <div className=' fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
      <form action=''>
        <img
          src={assets.regImage}
          alt='reg-img'
          className=' w-1/2 rounded-xl hidden md:block'
        />
      </form>
    </div>
  );
};

export default Hotelreg;
