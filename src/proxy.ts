import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware function
export function proxy(request: NextRequest): NextResponse {
  // Dummy user data
  const dummyUserData = {
    role: "Admin",
    email: "test@admin.com"
  }

  const isProductsPage = request.nextUrl.pathname.startsWith('/products')
  const isAdmin = dummyUserData.role === "Admin"

  if (isProductsPage && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}