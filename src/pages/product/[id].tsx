import axiosClient from "@/src/api/axiosClient";
import { DetailProduct, FeedBacks } from "@/src/models/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaCirclePlus,
  FaCrown,
  FaLocationDot,
} from "react-icons/fa6";
import { FaHeart, FaShippingFast } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import {
  CiCircleMinus,
  CiCirclePlus,
  CiHeart,
  CiShoppingCart,
} from "react-icons/ci";
import Head from "next/head";
import { MdArrowRightAlt } from "react-icons/md";
import SuggestProduct from "@/src/components/SuggestProduct";

const ProductDetail = () => {
  const [data, setData] = useState<DetailProduct | null>(null);
  const [DataFeedbacks, setDataFeedbacks] = useState<FeedBacks | null>(null);
  const router = useRouter();
  const { id } = router.query; // Lấy giá trị id từ đường dẫn URL
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState("infoProduct");

  const handleActiveTab = (target: string) => {
    setActiveTab(target);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const responseFeedbacks = await axiosClient.get<FeedBacks>(
            `api/v1/web/feedbacks/${id}?page=1&limit=10&option=type&value=ALL`
          );

          const responseProduct = await axiosClient.get<DetailProduct>(
            `api/v1/mobile/products/${id}`
          );

          console.log("FeedBacks", responseFeedbacks.data);
          console.log("res: ", responseProduct.data);
          setData(responseProduct.data);
          setDataFeedbacks(responseFeedbacks.data);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);

  const optionValues = data?.data?.option_types[0]?.option_values || [];
  const optionSizes = data?.data.option_types[1].option_values || [];

  return (
    <div>
      <div className="px-44 py-5">
        <Head>
          <title>{data?.data.name || "Product Detail"}</title>
        </Head>
        <div className="flex items-center text-gray-500 font-medium text-sm gap-2">
          <Link href={"/"}>Trang chủ</Link>
          <FaAngleRight />
          <Link
            href={`/shop/${data?.data.shop_id}`}
            className="hover:text-black"
          >
            {data?.data.shop.user.userName}
          </Link>
          <FaAngleRight />
          <Link href={`/product/${id}`} className="hover:text-black">
            {data?.data.name}
          </Link>
        </div>
        <div className="flex p-5 gap-10">
          <div className="flex gap-4">
            <div className="">
              <Image
                src={data?.data.images ? data.data.images[0] : ""}
                height={90}
                width={90}
                alt="image"
                priority
                className="rounded-md"
              />
            </div>
            <div>
              <Image
                src={data?.data.images ? data.data.images[0] : ""}
                width={420}
                height={500}
                alt="image"
                priority
                className="rounded-lg h-[500px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-slate-100 text-red-500 p-1 rounded-2xl">
                Voucher
              </span>
              <FaShippingFast className="text-green-400" />
            </div>
            <div className="text-lg">{data?.data.name}</div>
            <div className="font-semibold text-2xl py-5">
              {data?.data.price_min_max.min} đ - {data?.data.price_min_max.max}{" "}
              đ
            </div>
            <div className="flex gap-3 text-pink-500 items-center">
              <RiErrorWarningLine />
              Đổi trả trong vòng 7 ngày
            </div>

            {optionValues.some((item: any) => item?.name) && (
              <div className="flex flex-col gap-3 py-4">
                <p>Màu Sắc</p>
                <div className="flex gap-2">
                  {optionValues.map((item: any) =>
                    item?.name ? (
                      <div
                        key={item.id}
                        className="flex p-1 px-4 items-center border-slate-400 border-[1px] rounded-2xl hover:shadow-lg cursor-pointer"
                      >
                        {item?.name}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}

            {optionSizes.some((item: any) => item?.name) && (
              <div className="flex flex-col gap-3 py-4">
                <p>Kích Cỡ</p>
                <div className="flex gap-2">
                  {optionSizes.map((item: any) =>
                    item?.name ? (
                      <div
                        key={item._id}
                        className="p-1 px-6 items-center border-slate-400 border-[1px] rounded-3xl hover:shadow-lg cursor-pointer"
                      >
                        {item.name}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}

            <div>
              <p>Số Lượng</p>
              <div className="flex gap-3 items-center">
                <CiCircleMinus
                  onClick={count == 1 ? () => count : () => setCount(count - 1)}
                  className="cursor-pointer"
                />
                {count}
                <CiCirclePlus
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer"
                />
                <div className="text-gray-400">Kho: {data?.data.quantity}</div>
              </div>
            </div>
            <div className="flex gap-2 py-8">
              <div className="flex items-center justify-center gap-1 cursor-pointer bg-gray-300 rounded-md p-3 w-[174px]">
                <CiShoppingCart />
                Thêm vào giỏ
              </div>
              <div className="flex items-center justify-center cursor-pointer bg-pink-500 text-white rounded-md p-3 w-[174px]">
                Mua Ngay
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-9">
          <div className="flex items-center gap-3">
            <div className="relative w-[80px] h-[80px]">
              <Image
                src={data?.data.shop.user.avatar || ""}
                width={80}
                height={80}
                alt="avatar"
                priority
                className="rounded-full h-[80px] object-cover"
              />
              <div className="absolute left-[30%] bottom-[-13px]">
                <FaCirclePlus className="h-7 w-7 text-white bg-black rounded-full shadow-sm " />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl">{data?.data.shop.user.userName}</h1>
              <div className="flex gap-5 items-center text-sm">
                <div className="flex gap-5 items-center ">
                  <FaCrown className="text-pink-400" />
                  {data?.data.shop.avg_rating}
                </div>
                <div className="before:border-s-[2px] before:mr-4">
                  Tỷ lệ phản hồi Chat{" "}
                  {data?.data.shop.rank_policy.data.chatResponseByPercent}%
                </div>
              </div>
              <Link
                href={`/shop/${data?.data.shop_id}`}
                className="flex gap-2 items-center text-sm"
              >
                Xem shop <MdArrowRightAlt className="text-pink-400" />
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center px-[30px] text-pink-400">
              <CiHeart />
              {data?.data.shop.user.followingCount}
            </div>
          </div>
          <div className="flex before:border-s-[1px] before:mr-4">
            <div className="flex gap-10 justify-around">
              <div className="text-sm">
                <h1 className="py-2">Thông tin giao hàng</h1>
                {data?.data.shop.shipping_methods.map((item) => (
                  <div key={item._id}>
                    {item.name}
                    <p className="text-gray-400">₫ 17k ~ ₫ 35k</p>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="py-2">Thời gian vận chuyển</p>
                <p>Trung bình 3 - 5 ngày</p>
                <div className="flex gap-1 items-center">
                  <FaLocationDot />
                  {data?.data.shop.country}
                </div>
              </div>
              <div className="text-sm">
                <p className="py-2">Thời gian chuẩn bị hàng </p>
                <p>1 - 4 ngày</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <div className="flex gap-20 w-[100%] justify-center text-xl font-bold border-b-[1px] pt-12">
              <h1
                className="cursor-pointer max-w-[200px] min-w-[197px] flex items-center justify-center"
                onClick={() => handleActiveTab("infoProduct")}
              >
                Thông tin sản phẩm
              </h1>
              <h1
                className="cursor-pointer max-w-[200px] min-w-[197px] flex items-center justify-center"
                onClick={() => handleActiveTab("reviews")}
              >
                {DataFeedbacks?.data.generalFeedbackInfo.totalByComment >= 1
                  ? `Đánh giá (${DataFeedbacks?.data.generalFeedbackInfo.totalByComment})`
                  : "Đánh giá"}
              </h1>
              <h1
                className="cursor-pointer max-w-[200px] min-w-[197px] flex items-center justify-center"
                onClick={() => handleActiveTab("chat")}
              >
                Trò chuyện
              </h1>
            </div>
          </div>

          {activeTab === "infoProduct" && (
            <div className="px-10 w-full">
              <div className="py-6">
                <h1 className="text-xl py-3 font-bold">Mô tả sản phẩm:</h1>
                <p className="text-sm whitespace-pre-line">
                  {data?.data.description.split(".").join(".\n")}
                </p>
              </div>
              <div className="border-b-[1px] border-t-2 py-4">
                <h2 className="font-bold">Thông tin vận chuyển:</h2>
                <p className="text-sm py-1">
                  {data?.data.delivery_information
                    ? data.data.delivery_information
                    : "Giao hàng qua shipper"}
                </p>
              </div>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className=" mt-3 bg-gray-100 rounded-md">
              <div className="pb-7 border-b-[3px] mx-10">
                <h1 className="font-[550] text-sm py-7">
                  {DataFeedbacks?.data.generalFeedbackInfo.satisfactionRate}%
                  hài lòng với sản phẩm
                </h1>
                <div className="flex gap-4">
                  {DataFeedbacks?.data.generalFeedbackInfo.totalByStar
                    .sort((a, b) => b.vote_star - a.vote_star)
                    .map((item: any) => (
                      <div
                        key={item._id}
                        className="flex gap-2 items-center text-xs border-[1px] p-1"
                      >
                        {[...Array(5)].map((_, i) => (
                          <div>
                            {i < item.vote_star ? (
                              <FaHeart className="text-pink-400 h-4" />
                            ) : (
                              <CiHeart className="text-pink-400 h-4" />
                            )}
                          </div>
                        ))}
                        {item.total}
                      </div>
                    ))}
                </div>
              </div>
              <div className="py-7 mx-10">
                {DataFeedbacks?.data.feedbacks.map((item) => (
                  <div>
                    <div className="flex">
                      <Image
                        src={item.user.avatar}
                        height={20}
                        width={20}
                        alt="avatar"
                      />
                      <div>
                        <p className="text-sm font-semibold">
                          {item.user.userName}
                        </p>
                        <div>
                          {/* {DataFeedbacks.data.generalFeedbackInfo.totalByStar.} */}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Loại hàng {}</p>
                    </div>
                    <div key={item._id}>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "chat" && <div>Trò chuyện</div>}
        </div>
      </div>
      <SuggestProduct />
    </div>
  );
};

export default ProductDetail;
