"use client";

import { cache, useState, useEffect } from "react";
import axios from "../../_api/axios.js";

export const revalidate = 3600;
export const getDetails = cache(async (controller) => {
  const response = await axios.get("/api/user/details", {
    signal: controller.signal,
    withCredentials: true,
  });
  return response.data;
});

export const useUserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await getDetails(controller);
        isMounted && setUser(response);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return user;
};

export default useUserDetails;
