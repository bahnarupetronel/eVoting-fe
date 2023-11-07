import { NextResponse } from "next/server";
import { useCookies } from "./app/_hooks/useCookies";

export function middleware(request) {
  const { getCookie } = useCookies();
  const isUserLoggedIn = getCookie("isUserLoggedIn");
  if (isUserLoggedIn) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  // let status = request;
  // console.log(request);
  // if (status === 404)
  //   return NextResponse.redirect(new URL("/not-found", request.url));
}

export const config = {
  matcher: ["/login", "/register"],
};
