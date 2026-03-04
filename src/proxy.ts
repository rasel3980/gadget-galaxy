import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  
  
  const dummyUserData = {
    role: "User", 
    email: "test@admin.com"
  }

  const { pathname } = request.nextUrl
  const isAdmin = dummyUserData.role === "User"

  if (pathname.startsWith('/products') && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: [
    '/products/:path*',
    '/cart',
    '/login'
  ],
}