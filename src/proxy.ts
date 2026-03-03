import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ফাংশনের নাম অবশ্যই 'proxy' হতে হবে এবং সেটি export করতে হবে
export function proxy(request: NextRequest) {
  
  // আপনার লজিক এখানে
  const dummyUserData = {
    role: "User", // টেস্ট করার জন্য "User" দিন
    email: "test@admin.com"
  }

  const { pathname } = request.nextUrl
  const isAdmin = dummyUserData.role === "User"

  // যদি ইউজার অ্যাডমিন না হয় এবং প্রোডাক্ট পেজে যেতে চায়
  if (pathname.startsWith('/products') && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// কোন কোন রুটে প্রক্সি চলবে সেটি ডিফাইন করুন
export const config = {
  matcher: [
    '/products/:path*',
    '/cart',
    '/login'
  ],
}