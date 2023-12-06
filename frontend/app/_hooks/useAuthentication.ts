import { useEffect } from "react";

export const useAuthentication = (isLoggedIn, router) => {
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/not-found");
    }
  }, [isLoggedIn, router]);
};

export default useAuthentication;
