import axios from "axios";
import queryString from "query-string";
import firebase from "firebase";

const getToken = () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  return new Promise((res, rej) => {
    const timeOut = setTimeout(() => {
      rej(null);
    }, 1000);
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          rej(null);
          return;
        }
        const token = await user.getIdToken();
        res(token);
      });
    clearTimeout(timeOut);
    return () => unregisterAuthObserver();
  });
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PRODUCTS,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // const token = await getToken();

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
