import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// export const config = {
//   matcher: [
//     // "/new",
//     // "/",
//     // "/api/bookmarks",
//     // "/api/comments",
//     // "/api/likes",
//     // "/api/follow",
//     // "/api/me",
//     "/room",
//   ],
// };
