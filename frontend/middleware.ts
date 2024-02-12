import { NextRequest, NextResponse } from "next/server";

const isPrivateRoute = (pathname: string): boolean => {
  const privatePaths = [
    "/vote",
    "/vote/[id]",
    "/user/account",
    "/user/votes-history",
  ];

  const regexPatterns = privatePaths.map(
    (path) => new RegExp(`^${path.replace(/\[.*?\]/g, "[^/]+")}$`)
  );

  return regexPatterns.some((regex) => regex.test(pathname));
};

const isPublicRoute = (pathname: string): boolean => {
  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/not-found",
    "/forgot-password/confirm",
    "/change-password",
    "/rules",
    "/how-to-vote",
    "/faq",
    "/election-types",
    "/about",
    "/election",
    "/election/[id]",
    "/candidate/[name]",
  ];

  const regexPatterns = publicPaths.map(
    (path) => new RegExp(`^${path.replace(/\[.*?\]/g, "[^/]+")}$`)
  );

  return regexPatterns.some((regex) => regex.test(pathname));
};

const isClosedPathWhenLoggedIn = (pathname: string): boolean => {
  const closedPathsWhenLoggedIn = [
    "/login",
    "/register",
    "/forgot-password",
    "/forgot-password/confirm",
    "/change-password",
  ];

  return closedPathsWhenLoggedIn.includes(pathname);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isUserLoggedIn = request.cookies.get("isUserLoggedIn")?.value;
  const role: string = request.cookies.get("role")?.value;

  if (role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (!isUserLoggedIn && !isPublicRoute(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isUserLoggedIn && isClosedPathWhenLoggedIn(pathname)) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (!isUserLoggedIn && isPrivateRoute(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/logout" && !isUserLoggedIn)
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/((?!_next|api/auth).*)(.+)",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
