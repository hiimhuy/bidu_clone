import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

interface LoginProps {
  isOpenSignInForm: boolean;
  onCloseSignInForm: () => void;
  onOpenRegisterForm :()=>void
}

const Login: React.FC<LoginProps> = ({ isOpenSignInForm, onCloseSignInForm, onOpenRegisterForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const auth=getAuth()
  const provider = new GoogleAuthProvider()

  const signInWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi khi đăng nhập với Google:", error);
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmail(formData.email, formData.password);
  };

  return (
    <>
      {isOpenSignInForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute left-0 top-0 w-screen h-screen opacity-20 bg-black"></div>
          <div className="flex w-[800px] h-[484px] bg-white z-50 border-[1px] relative">
            <IoMdClose
              onClick={onCloseSignInForm}
              className="absolute right-4 top-4 text-2xl text-black cursor-pointer"
            />
            <div className="flex items-center justify-center p-8 cursor-default">
              <Image src="/img_bidu/text_bidu.svg" alt="image" height={185} width={277} />
            </div>
            <div className="flex flex-col items-center w-[400px] justify-center py-5">
              <h1 className="text-black text-xl py-5">Đăng nhập</h1>
              <form
                action="#"
                method="post"
                onSubmit={onSubmit}
                className="flex flex-col gap-3  w-[100%]"
              >
                <input
                  className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  type="text"
                  name="username"
                  id="username"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="Email or phone"
                />
                <div className="relative">
                  <input
                    className="appearance-none text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="Password"
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
                <button type="submit" className="text-black border h-9">
                  Đăng nhập
                </button>
              </form>
              <div className="flex flex-col text-black items-center py-4">
                <h1>Đăng nhập với tài khoản khác</h1>
                <div className="flex gap-4 py-2">
                  <Image
                    src="/img_bidu/google.svg"
                    alt="image google"
                    width={20}
                    height={20}
                    className="left-6 cursor-pointer"
                    onClick={signInWithGoogle} // Gọi hàm signInWithGoogle khi nhấn vào biểu tượng Google
                  />
                  <Image
                    src="/img_bidu/facebook.svg"
                    alt="image facebook"
                    width={20}
                    height={20}
                    className="left-6 cursor-pointer"
                  />
                  <Image src="/img_bidu/zalo.svg" alt="image zalo" width={20} height={20} className="left-6 cursor-pointer" />
                </div>
              </div>
              <div onClick={onOpenRegisterForm} className="text-black cursor-pointer">Đăng ký</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
