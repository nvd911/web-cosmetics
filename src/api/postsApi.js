import axiosClient from "./axiosClient";

const postsApi = {
  getPosts: () => {
    const url = "/posts";
    return axiosClient.get(url);
  },
};

export default postsApi;
