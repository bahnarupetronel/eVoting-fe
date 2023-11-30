import Cookies from "js-cookie";

export const useCookies = () => {
  const getCookie = (cookieName) => Cookies.get(cookieName);
  const setCookie = (cookieName, value, options) =>
    Cookies.set(cookieName, value, {
      expires: 100000,
      path: "/",
      sameSite: "none",
      secure: true,
    });
  const removeCookie = (cookieName) => Cookies.remove(cookieName);

  return {
    getCookie,
    setCookie,
    removeCookie,
  };
};

export default useCookies;
