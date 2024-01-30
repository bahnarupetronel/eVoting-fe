import axios from "axios";
import { useCookies } from "@/_hooks/useCookies";

let axiosInstance = axios.create({
  baseURL: "http://localhost:8090",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 403 || error.response?.status === 401) {
      const { removeCookie } = useCookies();
      console.log("go to login");
      removeCookie("user");
      removeCookie("isUserLoggedIn");
      // window.location.href = "/login";
    } else if (error.response.status === 404) {
      // window.location.href = "/not-found";
    } else if (error.response.status === 400) {
      console.log("not-found");
      // window.location.href = "/not-found";
    } else if (error.response.status === 409) {
      console.log("bad request conflict 409");
    } else if (error.response.status === 422) {
      console.log("bad request 422");
    } else if (error.response === undefined) {
      console.log("loading");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
