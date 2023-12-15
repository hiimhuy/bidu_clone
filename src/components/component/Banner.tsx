import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from "react-slick";

interface APIData {
  success: boolean;
  message: string;
  data: {
    system_banner: {
      image: string;
      promo_link: string;
    }[];
    system_category: {
      name: string;
      avatar: string;
    }[];
  };
}

// interface CategoryData {
//   success: boolean
//   message: string
//   data
// }

const Banner = () => {
  const [apiData, setApiData] = useState<APIData | null>(null);
  const [showNextButton, setShowNextButton] = useState(true);
  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 11,
    slidesToScroll: 11,
  };
  const btnPrev = () => {
    // if (sliderRef.current) {
    sliderRef.current.slickPrev();
    setShowNextButton(true);
    // }
  };
  const btnNext = () => {
    // if (sliderRef.current) {
    sliderRef.current.slickNext();
    // }
    setShowNextButton(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get<APIData>(
          "api/v2/mobile/home/banner-categories-v2?is_include_best_sell=true"
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setApiData({
          success: false,
          message: "Error fetching data",
          data: { system_banner: [], system_category: [] },
        });
      }
    };

    fetchData();
  }, []);

  if (!apiData || !apiData.data || !apiData.data.system_banner.length) {
    return (
      <p className="flex items-center justify-center font-semibold">
        Loading...
      </p>
    );
  }

  const { image, promo_link } = apiData.data.system_banner[0];

  return (
    <div className="px-44 flex flex-col">
      {/* Banner */}
      <div className=" py-4 relative">
        {image && (
          <Image
            src={image}
            alt="banner"
            height={439}
            width={9999}
            className="rounded-lg"
          />
        )}
        <div className="flex absolute gap-2 bottom-9 left-[39%]">
          <p className="font-extrabold italic text-xl pr-2">TẢI NGAY!</p>
          <Link href={promo_link || "/"}>
            <div className="flex items-center bg-black text-white rounded-2xl px-3 py-1 text-sm">
              <FaApple />
              App store
            </div>
          </Link>
          <Link href={promo_link || "/"}>
            <div className="flex items-center bg-black text-white rounded-2xl px-3 py-1 text-sm">
              <FaGooglePlay />
              Google Play
            </div>
          </Link>
        </div>
      </div>
      {/* Category */}
      <div className="relative pr-4">
        <Slider {...settings} ref={sliderRef}>
          {apiData.data.system_category.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center "
            >
              <div className="flex flex-col items-center justify-center h-[80px] gap-1">
                <Image
                  src={item.avatar}
                  alt="avatar"
                  width={28}
                  height={28}
                  priority={false}
                />
                <div className="font-medium text-sm">{item.name}</div>
              </div>
            </div>
          ))}
        </Slider>
        <div>
          {showNextButton ? (
            <div
              className="flex items-center justify-center w-9 h-9 absolute right-0 top-[15%] bg-white  cursor-pointer rounded-full shadow-md z-50"
              onClick={btnNext}
            >
              <FaArrowRightLong />
            </div>
          ) : (
            <div
              className="flex items-center justify-center w-9 h-9 absolute left-0 top-[15%] bg-white  cursor-pointer rounded-full shadow-md z-50"
              onClick={btnPrev}
            >
              <FaArrowLeftLong />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
