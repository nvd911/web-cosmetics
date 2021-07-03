import axiosClient from "./axiosClient";

const payApi = {
  addPay: (product) => {
    const url = "/pay";
    return axiosClient.post(url, product);
  },
};

export default payApi;
