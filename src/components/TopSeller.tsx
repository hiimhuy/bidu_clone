import React, {  useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import { TopSeller } from "@/src/models/type";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/src/store/hook";
import { homeActions } from "@/src/store/home/homeSlice";
import Link from "next/link";

const TopSeller = () => {
  const dispatch = useDispatch();

  
  const TopSeller: TopSeller = useAppSelector(
    (state) => state.home.top_sellers
  );
  // console.log("top seller:", TopSeller);
  useEffect(() => {
    dispatch(homeActions.getListTopSeller());
  }, []);



  return (
      <div className="px-44 pt-8 pb-6">
        <div>
          <div className="flex justify-between ">
            <h2 className="font-bold text-2xl ">Top Người Bán</h2>
            <div className="flex  text-sm font-medium items-center">
              Xem tất cả
              <FaAngleDown />
            </div>
          </div>
          <div className="flex justify-between">
            {TopSeller?.data?.slice(0, 6).map((item) => (
              <div key={item._id} className="flex flex-col">
                <div className="relative">
                  <div className="bg-black rounded-md w-10 h-10 absolute top-[5%] left-[5%] text-white flex items-center justify-center font-medium text-2xl">
                    {item.ranking_today}
                  </div>
                  <Image
                    src={item.system_banner.images.en}
                    width={200}
                    height={200}
                    alt={`Banner TopSeller`}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{item.user.userName}</h2>
                  <div className="flex gap-2 text-sm font-medium">
                    <p>{item.avg_rating}</p>
                    <p className="before:border-x before:mr-2">
                      {item?.user.followCount} lượt theo dõi
                    </p>
                  </div>
                  <Link href={`/shop/${item._id}`} className="flex items-center gap-2 pt-2">
                    <p className="text-xs text-[#191919] font-medium">Xem shop</p>
                    <LuMoveRight className="text-pink-600 " />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-6 relative px-5">
          {/* <Slider {...settings} ref={sliderRef}> */}
          {TopSeller.data?.slice(0, 6).map((item: any) => (
            <div
              key={item._id}
              className="flex items-center gap-2 w-[130px] pt-16"
            >
              <Image
                src={item?.user.avatar}
                width={56}
                height={56}
                alt="avatar"
                loading="lazy"
                className="rounded-full h-[56px] w-[56px]"
              />
              <p className="line-clamp-1">{item?.name}</p>
            </div>
          ))}
          {/* </Slider> */}
  
          {/* <div
            className="flex items-center justify-center w-9 h-9 absolute right-0 top-[60%] bg-white cursor-pointer rounded-full shadow-lg z-50"
            onClick={btnNext}
          >
            <FaArrowRightLong />
          </div>
          <div
            className="flex items-center justify-center w-9 h-9 absolute left-0 top-[60%] bg-white  cursor-pointer rounded-full shadow-md z-50"
            onClick={btnPrev}
          >
            <FaArrowLeftLong />
          </div> */}
        </div>
      </div>
  );
};

export default TopSeller;
