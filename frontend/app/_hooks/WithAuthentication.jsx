import { useEffect } from "react";
import { useRouter } from "next/navigation";

const WithAuthentication = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
      const isLoggedIn = localStorage?.getItem("isUserLoggedIn");
      if (isLoggedIn) {
        router.push("/not-found");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuthentication;
