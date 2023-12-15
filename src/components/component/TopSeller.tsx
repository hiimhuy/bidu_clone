import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../api/axiosClient";
import {
  FaAngleDown,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";
import Slider from "react-slick";

interface TopSeller {
  success: boolean;
  message: string;
  data: {
    _id: string;
    ranking_today: number;
    avg_rating: number;
    avg_time_delivery: number;
    avg_time_prepare_order: number;
    chat_response_rate: number;
    country: string;
    name: string;
    system_banner: {
      images: {
        vi?: string;
        en?: string;
        ko?: string;
      };
      name: string;
    };
    user: {
      _id: string;
      avatar: string;
      followCount: number;
      userName: string;
    };
  }[];
}

const TopSeller = () => {
  const [topSeller, setTopSeller] = useState<TopSeller | null>(null);

  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  const btnPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      // setShowNextButton(true);
    }
  };
  const btnNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      // setShowNextButton(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get<TopSeller>(
          "api/v1/mobile/home/ranking?type=SELLER&limit=20&page=1"
        );
        console.log("tp", response.data);
        setTopSeller(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setTopSeller({
          success: false,
          message: "Error fetching data",
          data: [],
        });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="px-44 pt-8 pb-6">
      <div>
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl ">Top Người Bán</h2>
          <div className="flex  text-sm font-medium">
            Xem tất cả
            <FaAngleDown />
          </div>
        </div>
        <div className="flex justify-between">
          {topSeller?.data?.slice(0, 5).map((item) => (
            <div key={item._id} className="flex flex-col">
              <div className="relative">
                <div className="bg-black rounded-md w-10 h-10 absolute top-[5%] left-[5%] text-white flex items-center justify-center font-medium text-2xl">
                  {item.ranking_today}
                </div>
                <Image
                  src={item?.system_banner.images.en}
                  width={200}
                  height={200}
                  alt={`Banner top seller`}
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
                <div className="flex items-center gap-2 pt-2">
                  <p className="text-xs text-[#191919] font-medium">Xem shop</p>
                  <LuMoveRight className="text-pink-600 " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-6 relative px-5">
        {topSeller?.data.slice(0, 6).map((item) => (
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
        <div
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
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
