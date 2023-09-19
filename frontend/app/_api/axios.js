import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:8090",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    ) {
      // Redirect to login page for 4xx errors
      console.log("go to login");
      window.location.href = "/login"; // Change '/login' to your actual login page URL
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
