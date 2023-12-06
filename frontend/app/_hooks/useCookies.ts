import Cookies from "js-cookie";

const options = {
  expires: 100000,
  path: "/",
  sameSite: "none",
  secure: true,
};

export const useCookies = () => {
  const getCookie = (cookieName) => Cookies.get(cookieName);
  const setCookie = (cookieName, value) =>
    Cookies.set(cookieName, value, options);
  const removeCookie = (cookieName) => Cookies.remove(cookieName);

  return {
    getCookie,
    setCookie,
    removeCookie,
  };
};

export default useCookies;
