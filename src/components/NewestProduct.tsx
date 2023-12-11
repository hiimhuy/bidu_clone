import React, { useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";
import axiosClient from "../api/axiosClient";
import { BiBookmark } from "react-icons/bi";
import Image from "next/image";
import Slider from "react-slick";

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
    <div className="px-44">
      <div className="flex justify-between">
        <h2>Sản Phẩm Mới Nhất</h2>
        <div className="flex">
          Xem tất cả
          <FaAngleDown />
        </div>
      </div>

      <div className="relative ">
        <Slider {...settings} ref={sliderRef}>
          {newestProductData?.data.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-center w-[178px] h-[389px] object-cover"
            >
              <div className="relative w-[162px] h-[249px] object-cover gap-4">
                <BiBookmark className="absolute top-2 right-4 z-50 text-white cursor-pointer" />
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  height={249}
                  width={162}
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <p>
                  {product.sale_price} <u>đ</u>
                </p>
                <p>{product.name}</p>
                <p>{product.shop.country}</p>
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

export default NewestProduct;
