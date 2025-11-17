import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  // const pathname = usePathname()
  const dummyUserData = {
    role:"Admin",
    email:"test@admin.com"
  }
  const isProductsPage = request.nextUrl.pathname.startsWith('/products')
  const isAdmin = dummyUserData.role == "Admin";
  if(isProductsPage && !isAdmin){
    return NextResponse.redirect(new URL('/login', request.url))

  }
 
  return NextResponse.next()
}
 