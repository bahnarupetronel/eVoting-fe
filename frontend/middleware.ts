import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isUserLoggedIn = request.cookies.get("isUserLoggedIn")?.value;

  if (pathname.startsWith("/user/"))
    return NextResponse.rewrite(new URL("/user/account", request.url));
  if (pathname === "/login" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/not-found", request.url));
  if (pathname === "/register" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/not-found", request.url));
  if (!isUserLoggedIn && pathname !== "/login" && pathname !== "/register")
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/((?!_next|api/auth).*)(.+)"],
};
