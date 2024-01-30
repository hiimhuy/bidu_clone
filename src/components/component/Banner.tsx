import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "@/src/store/home/homeSlice";
import { useAppSelector } from "@/src/store/hook";
import { Banner, Categories } from "@/src/declares/models/home/Banners";

const Banner = () => {
  const Banner: Banner = useAppSelector((state) => state.home.system_banner);
  const Categories: Categories = useAppSelector(
    (state) => state.home.system_categories
  );
  console.log("cate", Categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.getList());
  }, []);

  const [showNextButton, setShowNextButton] = useState(true);
  const sliderRef = useRef(null);

  var settings = {
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

  // if (!apiData || !apiData.data || !apiData.data.system_banner.length) {
  //   return (
  //     <p className="flex items-center justify-center font-semibold">
  //       Loading...
  //     </p>
  //   );
  // }

  return (
    <div className="px-44 flex flex-col">
      {/* Banner */}
      <div className=" py-4 relative">
        {Banner ? (
          <Image
            src={Banner.image}
            alt="banner"
            height={439}
            width={9999}
            className="rounded-lg"
          />
        ) : (
          <Image
            alt="banner"
            height={439}
            width={9999}
            className="bg-gray-200 h-[439px]"
            src={""}
          />
        )}
        <div className="flex absolute gap-2 bottom-9 left-[39%]">
          <p className="font-extrabold italic text-xl pr-2">TẢI NGAY!</p>
          <Link href={"/"}>
            <div className="flex items-center bg-black text-white rounded-2xl px-3 py-1 text-sm">
              <FaApple />
              App store
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center bg-black text-white rounded-2xl px-3 py-1 text-sm">
              <FaGooglePlay />
              Google Play
            </div>
          </Link>
        </div>
      </div>
      <div className="relative pr-4">
        <Slider {...settings} ref={sliderRef}>
          {/* {Categories.system_category.map((item) => (
            <div
              key={item._id}
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
          ))} */}
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