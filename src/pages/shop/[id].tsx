import axiosClient from "@/src/api/axiosClient";
import {
  DetailShopBanner,
  DetailShopUser,
  ShopExploreResponse,
} from "@/src/models/type";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import SuggestProduct from "@/src/components/SuggestProduct";
// api/v1/mobile/shop-explores/60484013a8a26111b4617606/suggest-products?page=1&limit=20&isFetchMore=true

const ShopPage = () => {
  const [shopData, setShopData] = useState<DetailShopUser | null>(null);
  const [bannerData, setBannerData] = useState<DetailShopBanner | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response: any = await axiosClient.get<ShopExploreResponse[]>(
          `api/v1/mobile/shop-explores/${id}`
        );
        setShopData(response.data.data[0]);
        setBannerData(response.data.data[1]);
      }
    };
    fetchData();
  }, [id]);

  console.log(shopData);
  console.log(bannerData);

  return (
    <div>
      <div>
        <Head>
          <title>{shopData?.data.userName}</title>
        </Head>
      </div>
      <div className="px-44 py-10">
        <div>
          <div>
            <Image
              src={""}
              height={258}
              width={1200}
              alt="banner"
              className="bg-blue-300"
            />
          </div>
          <div className="py-16">
            <div className="flex justify-center relative border-b-[1px]">
              <div
                className="w-[200px] h-[200px] bg-white rounded-full flex flex-col justify-center items-center absolute 
              top-[-170px]"
              >
                <Image
                  src={shopData?.data.avatar}
                  height={190}
                  width={190}
                  alt="avatar"
                  className="h-[190px] rounded-full object-cover"
                />
              </div>
              <div className="py-8 flex flex-col items-center justify-center">
                <h5 className="text-xl font-semibold">
                  {shopData?.data.userName}
                </h5>
                <div className="flex items-center justify-center gap-14 py-7">
                  <div className="flex flex-col items-center justify-center h-[30px]">
                    <p className="text-sm text-gray-600 font-medium">
                      Đánh giá
                    </p>
                    <p className="font-semibold text-sm">
                      {shopData?.data.feedback}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center h-[30px] border-l-2 pl-14">
                    <p className="text-sm text-gray-600 font-medium">
                      Người theo dõi
                    </p>
                    <p className="font-semibold text-sm">
                      {shopData?.data.followCount}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center h-[30px] border-l-2 pl-14">
                    <p className="text-sm text-gray-600 font-medium">
                      Đang theo dõi
                    </p>
                    <p className="font-semibold text-sm">
                      {shopData?.data.followingCount}
                    </p>
                  </div>
                </div>
                <div className="flex gap-7 py-3 text-sm">
                  <p className="flex gap-1 items-center h-3">
                    <FaLocationDot className="h-3 text-gray-400" /> {""} Đà
                    Nẵng, Việt Nam
                  </p>
                  <p className="flex gap-1 items-center h-3">
                    <IoIosMail className="h-3 text-gray-400" />
                    {shopData?.data.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-16 border-b-[1px] pb-10">
          <div className="flex items-center mx-7">
            <CiDiscount1 className='text-pink-500' />
            <p>Mã giảm giá tốt nhất</p>
          </div>
          <div className="flex items-center justify-around gap-10 shadow-xl w-[220px] h-[100px] px-4 py-2 rounded rounded-r-sm">
            <div className="text-xs text-gray-400">
              <p className="text-lg font-semibold text-black">Giảm 80%</p>
              <p>Cho đơn hàng 20k</p>
              <p>HSD: 27/11/2026</p>
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"><FiDownload className='text-pink-500' /></div>
          </div>
        </div>
        <div className="py-8">
          {/* <div className="flex  justify-around text-lg font-semibold border-b-[1px]">
            <p>Cửa hàng</p>
            <div>Tất cả sản phẩm</div>
            <p>Danh mục</p>
          </div> */}
          <div className="py-10"></div>
        </div>
      </div>
      <SuggestProduct/>
    </div>
  );
};

export default ShopPage;
