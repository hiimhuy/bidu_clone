import axiosClient from "../axiosClient";

const bannerApi = {
  fetchList() {
    const url =
      "/api/v2/mobile/home/banner-categories-v2?is_include_best_sell=true";
    return axiosClient.get(url);
  },
};

export default bannerApi;
