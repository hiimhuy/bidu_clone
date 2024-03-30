import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface RegisterProps {
  isOpenRegisterForm: boolean;
  onCloseRegisterForm: () => void;
  onOpenLoginForm: () => void;
}

const Register: React.FC<RegisterProps> = ({
  isOpenRegisterForm,
  onCloseRegisterForm,
  onOpenLoginForm,
}) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
    gender: true,
    tel: "",
  });

  const auth = getAuth();

  const register = (
    fullname: string,
    email: string,
    password: string,
    repassword: string,
    tel: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        <div>Đăng ký thành công</div>;
        alert("Đăng ký thành công");
        console.log("Đăng ký thành công", userCredential.user);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert(
            "Địa chỉ email đã được sử dụng. Vui lòng sử dụng địa chỉ email khác."
          );
        } else {
          console.error("Đăng ký thất bại", error);
          alert("Đăng ký thất bại!");
        }
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(
      formData.fullname,
      formData.email,
      formData.password,
      formData.repassword,
      formData.tel
    );
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setShowRegisterForm(isOpenRegisterForm);
  }, [isOpenRegisterForm]);

  if (!showRegisterForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute left-0 top-0 w-screen h-screen opacity-20 bg-black"></div>
      <div className="flex w-[810px] h-[528px] bg-white z-50 border-[1px] relative">
        <IoMdClose
          onClick={() => {
            // handleCloseRegisterForm();
            onCloseRegisterForm();
          }}
          className="absolute right-4 top-4 cursor-pointer text-2xl text-black"
        />
        <div className="flex items-center justify-center p-8 cursor-default">
          <Image
            src={"/img_bidu/text_bidu.svg"}
            alt="image"
            height={185}
            width={277}
          />
        </div>
        <div className="flex py-10 w-[400px] flex-col items-center">
          <h1 className="text-xl py-4 text-black">Đăng ký</h1>
          <form
            action="#"
            method="post"
            className="flex flex-col gap-3 w-[100%]"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={formData.fullname}
              onChange={onChange}
              className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Họ và tên"
            />
            <div className="flex justify-between text-black">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  placeholder="Nam"
                />
                Nam
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  placeholder="Nữ"
                />
                Nữ
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  placeholder="Khác"
                />
                Khác
              </div>
            </div>
            <input
              className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              id="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={onChange}
                placeholder="Mật khẩu"
              />
              {showPassword ? (
                <FaRegEye
                  className="absolute right-3 top-2 text-xl cursor-pointer text-[#4F4746]"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <FaRegEyeSlash
                  className="absolute right-3 top-2 text-xl cursor-pointer text-[#4F4746]"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="relative">
              <input
                className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                type={showRePassword ? "text" : "password"}
                name="repassword"
                id="repassword"
                value={formData.repassword}
                onChange={onChange}
                placeholder="Nhập lại mật khẩu"
              />
              {showRePassword ? (
                <FaRegEye
                  className="absolute right-3 top-2 text-xl cursor-pointer text-[#4F4746]"
                  onClick={() => setShowRePassword((prevState) => !prevState)}
                />
              ) : (
                <FaRegEyeSlash
                  className="absolute right-3 top-2 text-xl cursor-pointer text-[#4F4746]"
                  onClick={() => setShowRePassword((prevState) => !prevState)}
                />
              )}
            </div>
            <input
              className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={onChange}
              placeholder="Số điện thoại"
            />
            <div className="text-black flex gap-1">
              <input type="checkbox" name="agree" id="agree" />
              Tôi đồng ý với Các Điều Khoản Hệ Thống và Chính Sách Bảo Mật của
              BIDU
            </div>
            <button type="submit" className="text-white border h-9 bg-black">
              Đăng ký
            </button>
          </form>
          <div
            onClick={onOpenLoginForm}
            className="text-black py-2 cursor-pointer"
          >
            Đã có tài khoản? Đăng nhập ngay!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
