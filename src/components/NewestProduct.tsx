import React, { useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";
import Slider from "react-slick";
import { homeActions } from "@/src/store/home/homeSlice";
import { useDispatch } from "react-redux";
import { NewestProduct } from "@/src/models/type";
import { useAppSelector } from "@/src/store/hook";
import Product from "./Product";

const NewestProduct = () => {
  const dispatch = useDispatch();

  const NewestProduct: NewestProduct = useAppSelector(
    (state) => state.home.newest_products
  );

  useEffect(() => {
    dispatch(homeActions.getListNewestProduct());
  }, []);

  const [showNextButton, setShowNextButton] = useState(true);
  const sliderRef = useRef(null);

  var settings = {
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

  return (
    <div className="px-44 pt-8 pb-6">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl ">Sản Phẩm Mới Nhất</h2>
        <div className="flex  text-sm font-medium items-center">
          Xem tất cả
          <FaAngleDown />
        </div>
      </div>

      <div className="relative pt-6">
        <Slider {...settings} ref={sliderRef} className="flex justify-center px-2 gap-2">
          {NewestProduct &&
            NewestProduct.data?.map((product) => (
             <Product product={product} key={product._id} />
            ))}
        </Slider>
        <div>
          <div
            className="flex items-center justify-center w-9 h-9 absolute right-0 top-[35%] bg-white cursor-pointer rounded-full shadow-lg z-10"
            onClick={btnNext}
          >
            <FaArrowRightLong />
          </div>
          <div
            className="flex items-center justify-center w-9 h-9 absolute left-0 top-[35%] bg-white  cursor-pointer rounded-full shadow-md z-10"
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
