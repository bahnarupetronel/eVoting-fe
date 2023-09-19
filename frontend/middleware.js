import { NextResponse } from "next/server";
import { useAuth } from "./app/_context/user/UserContext";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // const { isLoggedIn } = useAuth();
  // if (isLoggedIn) {
  //   return NextResponse.redirect(new URL("/not-found", request.url));
  // }
  // let status = request.status();
  // console.log("status");
  //   if (status !== 200)
  //     return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register"],
};
