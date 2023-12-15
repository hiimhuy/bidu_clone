import React, { useEffect } from "react";
import Image from "next/image";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col px-44 bg-[#191919] text-white">
        <div className="flex justify-between gap-24 py-10">
          <div>
            <h3 className="font-semibold text-sm pb-4">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul className="flex flex-col gap-2 font-light text-xs">
              <li>Hướng dẫn mua hàng</li>
              <li>Hướng dẫn bán hàng</li>
              <li>Hướng dẫn đổi trả hàng</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm pb-4">VỀ BIDU</h3>
            <ul className="flex flex-col gap-2 font-light text-xs">
              <li>Giới thiệu</li>
              <li>Tuyển dụng</li>
              <li>Quy chế hoạt động</li>
              <li>Chính sách giải quyết khiếu nại</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-sm pb-4">THANH TOÁN</h3>
              <div className="flex gap-4 ">
                <Image
                  src="/img_bidu/icon_ghtk.svg"
                  width={40}
                  height={30}
                  alt="icon_ghtk"
                />
                <Image
                  src="/img_bidu/momo.svg"
                  width={30}
                  height={30}
                  alt="momo"
                />
                <Image
                  src="
                  
                  
                  /img_bidu/cash_vi.svg"
                  width={40}
                  height={30}
                  alt="cash_vi"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm pb-4">VẬN CHUYỂN</h3>
              <div className="flex gap-4 ">
                <Image
                  src="/img_bidu/icon_ghtk.svg"
                  height={30}
                  width={40}
                  alt="vnpay"
                />
                <Image
                  src="/img_bidu/icon_ghn.svg"
                  height={30}
                  width={40}
                  alt="vnpay"
                />
                <Image
                  src="/img_bidu/icon_vietelpost.svg"
                  height={30}
                  width={40}
                  alt="vnpay"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-sm pb-4">
                KẾT NỐI VỚI CHÚNG TÔI
              </h3>
              <div className="flex gap-4 pl-2">
                <FaFacebookF size={20} />
                <FaInstagram size={20} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm pb-4">
                TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
              </h3>
              <div className="flex gap-2">
                <Link href={"/"}>
                  <div className="flex items-center bg-white text-black rounded-3xl px-3 py-2 text-sm font-semibold">
                    <FaApple />
                    App store
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="flex items-center bg-white text-black rounded-3xl px-3 py-2 text-sm font-semibold">
                    <FaGooglePlay />
                    Google Play
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 py-12 bg-[#232222] text-white text-xs font-light">
        <div>CÔNG TY TNHH MJ ART GROUP</div>
        <div className="flex flex-col items-center gap-2">
          <h3>
            Địa chỉ: Tầng 3, Khách sạn Wink Hotel Danang Riverside, Số 351 Đường
            Trần Hưng Đạo, Phường An Hải Tây, Quận Sơn Trà, Thành Phố Đà Nẵng,
            Việt Nam.
          </h3>
          <h3>Điện thoại: 02363.933.340 - Emai: info@mjartgroup.com</h3>
          <h3>Người đại diện pháp luật: Lý Hách San</h3>
          <h3>
            Mã số doanh nghiệp: 0401908254 do Sở Kế hoạch & Đầu tư TP Đà Nẵng
            cấp lần đầu ngày 26/06/2018
          </h3>
        </div>
        <div className="text-gray-400">
          © 2020 - Bản quyền thuộc về Công ty TNHH MJ ART GROUP
        </div>
      </div>
    </div>
  );
};

export default Footer;
