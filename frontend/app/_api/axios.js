import axios from "axios";
import useCookies from "../_hooks/useCookies";

let axiosInstance = axios.create({
  baseURL: "http://localhost:8090",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500 &&
      error.response.status !== 404
    ) {
      console.log(error.response.status);
      const { removeCookie } = useCookies();
      console.log("go to login");
      removeCookie("user");
      removeCookie("isUserLoggedIn");
      // window.location.href = "/login";
    } else if (error.response.status === 404) {
      window.location.href = "/not-found";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
