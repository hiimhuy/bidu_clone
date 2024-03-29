"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { FaAngleDown } from "react-icons/fa";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "../../app/firebaseConfig";
import Cookies from "universal-cookie";
import Register from "./Register";
import Login from "./Login";

const Header = () => {
  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
  const [isOpenSignInForm, setIsOpenSignInForm] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth();
  const cookies = new Cookies();

  const signOutUser = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
  };

  const handleForm = (target: string) => {
    if (target == "register") {
      setIsOpenRegisterForm(!isOpenRegisterForm);
    }
    if (target == "signIn") setIsOpenSignInForm(!isOpenSignInForm);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleOpenLoginForm = () => {
    setIsOpenSignInForm(true);
    setIsOpenRegisterForm(false);
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
          {user ? (
            <div className="relative  cursor-pointer">
              <div
                onClick={() => setUserDropDown(!userDropDown)}
                className="flex gap-2 items-center"
              >
                <Image
                  src={user.photoURL || ""}
                  height={18}
                  width={18}
                  alt="avatar"
                  className="rounded-full"
                />
                <h1>{user.displayName}</h1>
                <FaAngleDown />
              </div>
              {userDropDown && (
                <div className="absolute top-[25px] w-[150px] z-50 flex flex-col text-xs font-semibold bg-[#171717]">
                  <Link
                    className="border-b px-5 hover:bg-slate-50 hover:text-black py-2"
                    href={"/Tuong"}
                  >
                    Trang cá nhân
                  </Link>
                  <Link
                    className="border-b px-5 hover:bg-slate-50 hover:text-black py-2"
                    href={"/"}
                  >
                    Quản lý đơn hàng
                  </Link>
                  <Link
                    className="border-b px-5 hover:bg-slate-50 hover:text-black py-2"
                    href={"/"}
                  >
                    Tài khoản của tôi
                  </Link>
                  <div
                    className="cursor-pointer px-5 hover:bg-slate-50 hover:text-black py-2"
                    onClick={signOutUser}
                  >
                    Đăng xuất
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4 relative">
              <div
                className="before:border-s-[1px] before:mr-4 cursor-pointer"
                onClick={() => handleForm("register")}
              >
                Đăng ký
              </div>
              <Register
                isOpenRegisterForm={isOpenRegisterForm}
                onCloseRegisterForm={() => setIsOpenRegisterForm(false)}
                onOpenLoginForm={handleOpenLoginForm}
              />{" "}
              <div
                className="before:border-s-[1px] before:mr-4 cursor-pointer relative"
                onClick={() => handleForm("signIn")}
              >
                Đăng nhập
              </div>
              <Login
                isOpenSignInForm={isOpenSignInForm}
                onCloseSignInForm={() => setIsOpenSignInForm(false)}
                onOpenRegisterForm={() => {
                  setIsOpenRegisterForm(true);
                  setIsOpenSignInForm(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
