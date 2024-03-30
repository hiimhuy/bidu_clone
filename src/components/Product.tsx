import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBookmark } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Product = ({ product }: any) => {
  return (
    <div className="hover:shadow-md w-[100%] hover:bg-white hover:rounded-md cursor-pointer flex justify-center gap-2">
        <Link
          href={`/product/${product._id}`}
          key={product._id}
          className="flex flex-col justify-center w-[162px] h-[350px] my-[4px] gap-3"
        >
          <div className="relative flex flex-col w-[162px] h-[249px] gap-1">
            <BiBookmark className="absolute top-2 right-2 z-10 text-white text-3xl cursor-pointer" />
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(width:162px), (height:249px)"
              className="object-cover rounded-md mt-1"
            />
          </div>
          <div className="pt-3">
            <p className="flex font-bold">
              {product.sale_price} <u className="text-xs p-[3px] ">đ</u>
            </p>
            <p className="text-sm font-medium truncate">{product.name}</p>
            {product?.shop?.country ? (
              <div className="flex items-center">
                <FaLocationDot className="text-[8px] text-gray-400" />
                <p className="text-[#191919] font-light text-[10px]">
                  {product?.shop?.country}
                </p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Link>
    </div>
  );
};

export default Product;
