import axiosClient from "../axiosClient";

export const blogApi = {
  fetchList() {
    const url = "api/v1/mobile/blog?limit=9&page=1&hashtag_id=ALL";
    return axiosClient.get(url);
  },
};
