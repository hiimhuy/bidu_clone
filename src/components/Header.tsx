"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
  const [isOpenSignInForm, setIsOpenSignInForm] = useState(false);

  const handleForm = (target: string) => {
    if (target === "register") {
      setIsOpenRegisterForm(!isOpenRegisterForm);
    } else if (target === "signIn") {
      setIsOpenSignInForm(!isOpenSignInForm);
    } else {
    }
  };

  return (
    <>
      <div className="flex justify-between font-bold px-44 text-white text-xs bg-[#191919] items-center h-8 relative">
        <div className="flex gap-4">
          <Link href={"/"}>Trang người bán</Link>
          <Link href={"/"}>Danh mục</Link>
        </div>
        <div className="flex gap-8">
          <div>Việt Nam</div>
          <div className="flex gap-4 relative">
            <div
              className="before:border-s-[1px] before:mr-4 cursor-pointer"
              onClick={() => handleForm("register")}
            >
              {isOpenRegisterForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute left-0 top-0 w-screen h-screen opacity-20 bg-black"></div>
                  <div className="flex w-[1026px] h-[628px] bg-white z-50 border-[1px] relative">
                    <IoMdClose
                      onClick={handleForm}
                      className="absolute right-4 top-4 text-2xl text-black "
                    />
                    <div className="flex items-center justify-center p-8 cursor-default">
                      <Image
                        src={"/img_bidu/text_bidu.svg"}
                        alt="image"
                        height={185}
                        width={277}
                      />
                    </div>
                    <div className="flex flex-col justify-center cursor-default">
                      <h1>Đăng ký</h1>
                      <form action="#" method="post"></form>
                    </div>
                  </div>
                </div>
              )}
              Đăng ký
            </div>
            <div
              className="before:border-s-[1px] before:mr-4 cursor-pointer relative"
              onClick={() => handleForm("signIn")}
            >
              {isOpenSignInForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute left-0 top-0 w-screen h-screen opacity-20 bg-black"></div>
                  <div className="flex w-[800px] h-[484px] bg-white z-50 border-[1px] relative">
                    <IoMdClose
                      onClick={handleForm}
                      className="absolute right-4 top-4 text-2xl text-black "
                    />
                    <div className="flex items-center justify-center p-8 cursor-default">
                      <Image
                        src={"/img_bidu/text_bidu.svg"}
                        alt="image"
                        height={185}
                        width={277}
                      />
                    </div>
                    <div className="flex flex-col justify-center cursor-default">
                      <div className="flex items-center justify-center flex-col text-black w-[480px] gap-2">
                        <div className="flex items-center justify-center border-[2px] rounded-full w-[275px] cursor-pointer h-[44px] relative">
                          <Image
                            src={"/img_bidu/google.svg"}
                            alt="image google"
                            width={20}
                            height={20}
                            className="absolute left-6"
                          />
                          Tiếp tục với Google
                        </div>
                        <div className="flex items-center justify-center border-[2px] rounded-full w-[275px] cursor-pointer h-[44px] relative">
                          <Image
                            src={"/img_bidu/facebook.svg"}
                            alt="image facebook"
                            width={20}
                            height={20}
                            className="absolute left-6"
                          />
                          Tiếp tục với Facebook
                        </div>
                        <div className="flex items-center justify-center border-[2px] rounded-full w-[275px] cursor-pointer h-[44px] relative">
                          <Image
                            src={"/img_bidu/zalo.svg"}
                            alt="image zalo"
                            width={20}
                            height={20}
                            className="absolute left-6"
                          />
                          Tiếp tục với Zalo
                        </div>
                      </div>
                      <div className="flex text-black justify-center gap-4 pt-8 font-medium">
                        <div className="cursor-pointer">Đăng ký</div>
                        <div className="before:border-s-[1px] before:mr-4 cursor-pointer">
                          Đăng nhập Email
                        </div>
                        <div className="before:border-s-[1px] before:mr-4 cursor-pointer">
                          Quên mật khẩu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              Đăng nhập
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
