import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isUserLoggedIn = request.cookies.get("isUserLoggedIn")?.value;
  const role: string = request.cookies.get("role")?.value;

  if (pathname === "/logout" && !isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));
  if (pathname === "/login" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));
  if (pathname === "/register" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));
  if (pathname === "/forgot-password" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));
  if (pathname === "/forgot-password/confirm" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));
  if (pathname === "/change-password" && isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));

  if (role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (
    !isUserLoggedIn &&
    pathname !== "/" &&
    pathname !== "/login" &&
    pathname !== "/register" &&
    pathname !== "/forgot-password" &&
    pathname !== "/not-found" &&
    pathname !== "/forgot-password/confirm" &&
    pathname !== "/change-password"
  )
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/((?!_next|api/auth).*)(.+)",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
