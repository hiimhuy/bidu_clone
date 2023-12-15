import React, { useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLocationDot,
} from "react-icons/fa6";
import { BiBookmark } from "react-icons/bi";
import Image from "next/image";
import Slider from "react-slick";
import axiosClient from "@/src/api/axiosClient";
import { homeActions } from "@/src/store/home/homeSlice";
import { useDispatch } from "react-redux";

interface Product {
  _id: string;
  name: string;
  images: string[];
  before_saleprice: string;
  bidu_air: boolean;
  discount_percent: number;
  sale_price: string;
  shop: {
    country: string;
  };
}

interface NewestProduct {
  success: boolean;
  message: string;
  data: Product[];
  paginate: {
    limit: number;
    page: number;
    total_page: number;
    total_record: number;
  };
}

const NewestProduct = ({ data }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.getList());
  }, []);
  const [newestProductData, setNewestProductData] =
    useState<NewestProduct | null>(null);
  const [showNextButton, setShowNextButton] = useState(true);
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
      setShowNextButton(true);
    }
  };
  const btnNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setShowNextButton(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get<NewestProduct>(
          "api/v2/mobile/home/newest-product"
        );
        console.log(response.data);
        setNewestProductData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setNewestProductData({
          success: false,
          message: "Error fetching data",
          data: [],
          paginate: { limit: 0, page: 0, total_page: 0, total_record: 0 },
        });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-44 pt-8 pb-6">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl ">Sản Phẩm Mới Nhất</h2>
        <div className="flex  text-sm font-medium">
          Xem tất cả
          <FaAngleDown />
        </div>
      </div>

      <div className="relative pt-6">
        <Slider {...settings} ref={sliderRef}>
          {newestProductData?.data.map((product) => (
            <div
              key={product._id}
              className="flex flex-col justify-center items-center w-[162px] h-[356px] gap-2 px-3 hover:shadow-md hover:rounded-md cursor-pointer"
            >
              <div className="relative flex flex-col w-[162px] h-[249px] gap-1">
                <BiBookmark className="absolute top-2 right-2 z-50 text-white text-3xl cursor-pointer" />
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(width:162px), (height:249px)"
                  className="object-cover rounded-md mt-2"
                />
              </div>
              <div className="pt-3">
                <p className="flex font-bold">
                  {product.sale_price} <u className="text-xs p-[3px] ">đ</u>
                </p>
                <p className="text-sm font-extralight">{product.name}</p>
                <div className="flex items-center">
                  <FaLocationDot className="text-[8px] text-gray-400" />
                  <p className="text-[#191919] font-light text-[10px]">
                    {product.shop.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div>
          <div
            className="flex items-center justify-center w-9 h-9 absolute right-0 top-[35%] bg-white cursor-pointer rounded-full shadow-lg z-50"
            onClick={btnNext}
          >
            <FaArrowRightLong />
          </div>
          <div
            className="flex items-center justify-center w-9 h-9 absolute left-0 top-[35%] bg-white  cursor-pointer rounded-full shadow-md z-50"
            onClick={btnPrev}
          >
            <FaArrowLeftLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestProduct;
