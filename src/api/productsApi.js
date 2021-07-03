import axiosClient from "./axiosClient";

const productsApi = {
  getProducts: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
};

export default productsApi;
