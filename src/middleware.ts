import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const start = Date.now();
  const { pathname, search } = request.nextUrl;
  const method = request.method;
  const userAgent = request.headers.get("user-agent") || "unknown";
  const ip = request.ip || "unknown";

  // Log the request using console (Winston doesn't work in Edge Runtime)
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[${new Date().toISOString()}] HTTP: Request: ${method} ${pathname}${search} - UA: ${userAgent} - IP: ${ip}`
    );
  }

  const response = NextResponse.next();

  response.headers.append("x-middleware-cache", "no-cache");

  // Calculate response time
  const responseTime = Date.now() - start;
  response.headers.append("x-response-time", `${responseTime}ms`);

  // Log response time in development
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[${new Date().toISOString()}] HTTP: Response: ${method} ${pathname} - ${responseTime}ms`
    );
  }

  return response;
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
