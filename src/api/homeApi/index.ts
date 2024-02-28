import axiosClient from "../axiosClient";

export const bannerApi = {
  fetchList() {
    const url =
      "/api/v2/mobile/home/banner-categories-v2?is_include_best_sell=true";
    return axiosClient.get(url);
  },
};

export const newestProductApi = {
  fetchList() {
    const url = "api/v2/mobile/home/newest-product";
    return axiosClient.get(url);
  },
};

export const suggestProductApi = {
  fetchList() {
    // const url = `api/v2/mobile/suggest-products?page=${page}&limit=30&isFetchMore=true&random_number=7`
    const url = `api/v2/mobile/suggest-products?page=1&limit=30&isFetchMore=true&random_number=7`;
    return axiosClient.get(url);
  },
};

export const topSellerApi = {
  fetchList() {
    const url = "api/v1/mobile/home/ranking?type=SELLER&limit=20&page=1";
    return axiosClient.get(url);
  },
};
