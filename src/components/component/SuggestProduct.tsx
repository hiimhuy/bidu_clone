import React, { useEffect, useState, useRef } from "react";
import axiosClient from "../../api/axiosClient";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SuggestProduct } from "@/src/model/type";

const SuggestProduct = () => {
  const [suggestProduct, setSuggestProduct] = useState<SuggestProduct | null>(
    null
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);

  const bottomBoundaryRef = useRef(null);

  const fetchData = async (page: number) => {
    try {
      setLoading(true);

      const response = await axiosClient.get<SuggestProduct>(
        `api/v2/mobile/suggest-products?page=${page}&limit=30&isFetchMore=true&random_number=7`
      );

      // If this is the first page, set the data directly
      if (page === 1) {
        setSuggestProduct(response.data);
      } else {
        // If not the first page, append the new data to the existing data
        setSuggestProduct((prevData) => {
          return {
            success: response.data.success,
            message: response.data.message,
            data: [...prevData?.data, ...response.data.data],
          };
        });
      }

      // Check if there are more pages
      if (response.data.data.length === 0) {
        setHasMorePages(false);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      setSuggestProduct({
        success: false,
        message: "Error fetching data",
        data: [],
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleIntersection = async (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting && hasMorePages && !loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (bottomBoundaryRef.current && hasMorePages) {
      observer.observe(bottomBoundaryRef.current);
    }

    return () => {
      if (bottomBoundaryRef.current) {
        observer.unobserve(bottomBoundaryRef.current);
      }
    };
  }, [bottomBoundaryRef, handleIntersection, hasMorePages]);

  // Split the products into two rows
  const productsInTwoRows = Array.from(
    { length: Math.ceil(suggestProduct?.data.length / 6) },
    (_, index) => suggestProduct?.data.slice(index * 6, index * 6 + 6)
  );

  return (
    <div className="px-44 pt-8 pb-6">
      <div className="flex justify-between pb-6">
        <h2 className="font-bold text-2xl ">Gợi Ý Cho Bạn</h2>
        <div className="flex  text-sm font-medium items-center">
          Xem tất cả
          <FaAngleDown />
        </div>
      </div>

      {productsInTwoRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((item) => (
            <div
              key={item._id}
              className="flex flex-col w-[186px] gap-4 p-3 hover:shadow-xl hover:rounded-md"
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
            </div>
          ))}
        </div>
      ))}
      <div ref={bottomBoundaryRef}></div>
      {loading && <p>Loading...</p>}
      {hasMorePages && !loading && (
        <div>
          <button onClick={handleLoadMore}>Xem them</button>
        </div>
      )}
    </div>
  );
};

export default SuggestProduct;
