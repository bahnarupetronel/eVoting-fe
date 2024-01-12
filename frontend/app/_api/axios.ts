import axios from "axios";
import useCookies from "../_hooks/useCookies.ts";

let axiosInstance = axios.create({
  baseURL: "http://localhost:8090",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status == 403) {
      const { removeCookie } = useCookies();
      console.log("go to login");
      removeCookie("user");
      removeCookie("isUserLoggedIn");
      window.location.href = "/login";
    } else if (error.response.status === 404) {
      window.location.href = "/not-found";
    } else if (error.response.status === 400) {
      window.location.href = "/not-found";
      console.log("bad request");
    } else if (error.response.status === 422) {
      window.location.href = "/not-found";
      console.log("bad request 422");
    } else if (error.response === undefined) {
      console.log("loading");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
