import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-44 py-4 relative">
      <Image
        src={"/img_bidu/banner.png"}
        alt="banner"
        height={439}
        width={9999}
        className="rounded-lg"
      />
      <div className=" flex absolute gap-2 bottom-9 left-[39%]">
        <p className="font-extrabold italic text-xl pr-2">TẢI NGAY!</p>
        <Link
          href={"/"}
          className="flex items-center bg-black text-white rounded-2xl px-3 py-1 text-sm"
        >
          <FaApple />
          App store
        </Link>
        <Link
          href={"/"}
          className="flex items-center bg-black text-white rounded-2xl px-3 py-1 text-sm"
        >
          <FaGooglePlay />
          Google Play
        </Link>
      </div>
    </div>
  );
};

export default Banner;
