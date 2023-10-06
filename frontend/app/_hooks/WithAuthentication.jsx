import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "../_hooks/useCookies";

const WithAuthentication = (WrappedComponent) => {
  const { getCookie } = useCookies();
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      const isLoggedIn = getCookie("isUserLoggedIn");
      if (isLoggedIn) {
        router.push("/not-found");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuthentication;
