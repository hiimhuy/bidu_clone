import axiosClient from "@/src/api/axiosClient";
import { CategoryPermalink, DetailCategory } from "@/src/models/type";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../category/category.scss";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLocationDot,
} from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import Product from "@/src/components/Product";

const Category = () => {
  const [data, setData] = useState<DetailCategory | null>(null);
  const [category, setCategory] = useState<CategoryPermalink | null>(null);
  const [show, setShow] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const route = useRouter();
  const { id } = route.query;

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId == selectedItem ? null : itemId);
  };

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const response = await axiosClient.get<CategoryPermalink>(
          `api/v1/web/home/category-detail?slug=${id}`
        );
        setCategory(response.data);
      }
    };
    fetch();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (category?.data?._id) {
        const res = await axiosClient.get<DetailCategory>(
          `api/v2/mobile/categories/${category.data._id}/products-of-system-category?page=${currentPage}&limit=20&category_id=${category.data._id}`
        );
        setData(res.data);

        if (res.data.data.products.paginate) {
          setTotalPages(
            Math.ceil(res.data.data.products.paginate.total_record / 20)
          );
        }
      }
    };
    fetchData();
  }, [category?.data?._id, currentPage]);

  console.log("data", data);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>BIDU | Ứng dụng mua sắm thời trang & làm đẹp</title>
      </Head>
      <div className="px-44 pt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <div className="">
              <h1 className="bg-gray-100 rounded-t p-5 mb-1 font-semibold text-lg">
                Danh mục
              </h1>
              <div className="bg-gray-100 rounded-b p-5 font-semibold">
                <h1
                  className="pb-2 text-pink-500 cursor-pointer"
                  onClick={() => handleItemClick("name")}
                >
                  {category?.data?.name}
                </h1>
                <div className="pl-3">
                  {show
                    ? data?.data.categories?.slice(0,5)?.map((item) => (
                        <p
                          onClick={() => handleItemClick(item._id)}
                          className={
                            selectedItem === item._id
                              ? "text-pink-500 cursor-pointer py-1"
                              : "cursor-pointer py-1"
                          }
                          key={item._id}
                        >
                          {item.name}
                        </p>
                      ))
                    : data?.data?.categories?.map((item) => (
                        <p
                          onClick={() => handleItemClick(item._id)}
                          className={
                            selectedItem === item._id
                              ? "text-pink-500 cursor-pointer py-1"
                              : "cursor-pointer py-1"
                          }
                          key={item._id}
                        >
                          {item.name}
                        </p>
                      ))}
                  <p
                    className="flex items-center text-sm gap-1 mt-2 cursor-pointer"
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
            <div className="pb-5">
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
          <div className="col-span-9 bg-white">
           <div className="bg-gray-100 rounded-xl">
              <div className="grid grid-cols-4 bg-gray-100 rounded-xl py-3 px-2 gap-2 place-items-center">
                {data?.data.products.data.map((product: any) => (
                 <Product key={product._id} product={product} />
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-end p-2 w-full">
                {currentPage == 1 ? (
                  <div></div>
                ) : (
                  <button
                    className="px-2 py-1 mx-1 bg-white rounded-full shadow-md"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <FaArrowLeftLong className="text-gray-300" />
                  </button>
                )}
                <div className="grid grid-flow-col">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-3 py-1 mx-1 ${
                        currentPage === index + 1
                          ? "bg-white text-black"
                          : "bg-white text-gray-300"
                      } rounded-full shadow-md`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  {currentPage == totalPages ? (
                    <div></div>
                  ) : (
                    <button
                      className="px-2 py-1 mx-1 bg-white rounded-full shadow-md"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <FaArrowRightLong className="text-gray-300" />
                    </button>
                  )}
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
