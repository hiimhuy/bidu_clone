import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex items-center px-44 h-[93px] justify-between border-b">
      <Image src={"/img_bidu/logo.png"} alt="logo" width={93} height={35} />
      <div className="flex justify-between border-[1px] border-black w-[444px] h-[44px] px-[20px] rounded-full">
        <input
          className="w-full focus:outline-none text-sm font-semibold"
          type="text"
          placeholder="Tìm kiếm"
        />
        <LuSearch className="flex items-center justify-center h-full ml-4 text-2xl" />
      </div>
      <div className="flex justify-between w-[245px]">
        <Image
          src={"/img_bidu/icon_home.svg"}
          alt="home"
          width={24}
          height={24}
        />
        <Image
          src={"/img_bidu/icon_shopping.svg"}
          alt="home"
          width={24}
          height={24}
        />
        <Image
          src={"/img_bidu/icon_bidu.svg"}
          alt="home"
          width={24}
          height={24}
        />
        <Image
          src={"/img_bidu/icon_chat.svg"}
          alt="home"
          width={24}
          height={24}
        />
        <Image
          src={"/img_bidu/icon_bell.svg"}
          alt="home"
          width={24}
          height={24}
        />
        <Image
          src={"/img_bidu/icon_cart.svg"}
          alt="home"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Navbar;
