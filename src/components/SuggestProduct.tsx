import React, { useEffect, useState, useRef } from "react";
import axiosClient from "../api/axiosClient";
import { SuggestProduct } from "@/src/models/type";
import Product from "./Product";

const SuggestProductComponent: React.FC = () => {
  const [suggestProduct, setSuggestProduct] = useState<SuggestProduct[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get<SuggestProduct>(
          `api/v2/mobile/suggest-products?page=${currentPage}&limit=30&isFetchMore=true&random_number=7`
        );
        if (response.data.data.length === 0) {
          setHasMorePages(false);
        } else {
          setSuggestProduct((prevProducts) => [
            ...prevProducts,
            response.data,
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


  return (
    <div className="px-44 pt-8 pb-6">
    <div className="flex justify-between pb-6">
      <h2 className="font-bold text-2xl">Gợi Ý Cho Bạn</h2>
    </div>
    <div className="grid grid-cols-6">
      {suggestProduct.map((suggestProduct) =>
        suggestProduct.data.map((product) => (
          <Product key={product._id} product={product} />
        ))
      )}
    </div>
    {hasMorePages && !loading && (
      <div className="flex justify-center pt-4">
        <button onClick={handleLoadMore} className="hover:bg-black bg-[#171717] py-3 px-4 text-white font-semibold text-sm">Xem thêm</button>
      </div>
    )}
  </div>
  );
};

export default SuggestProductComponent;
