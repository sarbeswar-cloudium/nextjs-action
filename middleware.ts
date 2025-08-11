import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let isAuthenticated = false;

    const token = (await cookies()).get('token')?.value

    if (token) {
        isAuthenticated = true;
        console.log(token);
    }

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    return NextResponse.next();
}
 
export const config = {
  matcher: ['/dashboard'],
}