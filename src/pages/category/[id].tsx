import axiosClient from "@/src/api/axiosClient";
import { DetailCategory } from "@/src/models/type";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../category/category.scss";
import Link from "next/link";
import { BiBookmark } from "react-icons/bi";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const Category = () => {
  const [data, setData] = useState<DetailCategory | null>(null);
  const [show, setShow] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const res = await axiosClient.get<DetailCategory>(
          `api/v2/mobile/categories/${id}/products-of-system-category?page=1&limit=20&category_id=${id}`
        );
        setData(res.data);
      }
    };
    fetch();
  }, [id]);
  console.log(data);

  return (
    <>
      <Head>
        <title>BIDU | Ứng dụng mua sắm thời trang & làm đẹp</title>
      </Head>
      <div className="px-44 py-5 ">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3  ">
            <div className="">
              <h1 className="bg-gray-100 rounded-t p-5 mb-1 font-semibold text-lg">
                Danh mục
              </h1>
              <div className="bg-gray-100 rounded-b p-5 font-semibold text-sm  ">
                {show
                  ? data?.data.categories.slice(0, 5).map((item) => (
                      <p
                        onClick={() => handleItemClick(item._id)}
                        className={
                          selectedItem === item._id
                            ? "text-pink-500 cursor-pointer py-2"
                            : "cursor-pointer py-2"
                        }
                        key={item._id}
                      >
                        {item.name}
                      </p>
                    ))
                  : data?.data.categories.map((item) => (
                      <p
                        onClick={() => handleItemClick(item._id)}
                        className={
                          selectedItem === item._id
                            ? "text-pink-500 cursor-pointer py-2"
                            : "cursor-pointer py-2"
                        }
                        key={item._id}
                      >
                        {item.name}
                      </p>
                    ))}
                <p
                  className="flex items-center text-xs gap-1 mt-2 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <>
                      Xem thêm <FaAngleDown />
                    </>
                  ) : (
                    <>
                      Thu gọn <FaAngleUp />
                    </>
                  )}
                </p>
              </div>
            </div>
            <div>
              <h1 className="my-7 text-xl font-semibold">Bộ lọc</h1>
              <div>
                <p className="font-semibold">Vị trí</p>
                <div className="h-[200px] overflow-y-scroll hide-scrollbar">
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Thành phố Hà Nội
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Hà Giang
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Cao Bằng
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Bắc Kạn
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Tuyên Quang
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Lào Cai
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Điện Biên
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Lai Châu
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh Sơn La
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh QB
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh QT
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Thành phố SG
                  </p>
                  <p className="text-sm flex item-center gap-8 font-semibold">
                    <input type="checkbox" name="" id="" /> Tỉnh TH
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="py-3 text-base font-semibold">Kích cỡ</h1>
              <div className="grid grid-cols-2 gap-2">
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size XS
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size S
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size M
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size L
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size XL
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size XXL
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size Freesize
                </p>
                <p className="flex items-center justify-center w-[123px] py-1 border border-current rounded-2xl">
                  Size Khác
                </p>
              </div>
            </div>
            <div>
              <h1 className="py-3 text-base font-semibold">Giá</h1>
              <div>
                <input type="range" name="" id="" />
              </div>
            </div>
            <div>
              <h1 className="py-3 text-base font-semibold">Giới tính</h1>
              <div className="flex gap-5">
                <p className="flex items-center justify-center border py-1 px-3 border-current rounded-2xl">
                  Nữ
                </p>
                <p className="flex items-center justify-center border py-1 px-3 border-current rounded-2xl">
                  Nam
                </p>
                <p className="flex items-center justify-center border py-1 px-3 border-current rounded-2xl">
                  Unisex
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-base font-semibold py-3">Phong cách</h1>
              <div className="grid grid-cols-2 gap-2">
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Hàn Quốc
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Tối Giản
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Retro
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Thể Thao
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Thanh Lịch
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Sexy
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Hằng Ngày
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Đi Làm
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Đi tiệc
                </p>
                <p className="flex items-center justify-center border border-current py-1 w-[123px] rounded-2xl">
                  Hẹn Hò
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-4 bg-gray-100 rounded-xl p-5 gap-3 place-items-center">
              {data?.data.products.data.map((item: any) => (
                <Link
                  href={`/product/${item._id}`}
                  key={item._id}
                  className="flex flex-col w-[186px] bg-white rounded-md gap-4 p-3 hover:shadow-xl hover:rounded-md"
                >
                  <div className="w-[162px] h-[249px] relative">
                    <CiBookmark className="absolute top-0 left-0 text-white" />
                    <Image
                      src={item.images[0]}
                      fill
                      sizes="(width:162px), (min-height:249px)"
                      alt={item.name}
                      priority
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="flex font-bold">
                      {item.sale_price} <u className="text-xs p-[3px]">đ</u>
                    </p>
                    <p className="mt-2 line-clamp-1 text-sm font-light">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex mt-5 items-center">
                    <FaLocationDot className="text-[8px] text-gray-400" />
                    <p className="text-[#191919] font-light text-[10px]">
                      Việt Nam
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Pagination */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
