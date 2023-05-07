import { NextResponse } from 'next/server';
 
export function middleware(request) {
    let response = NextResponse.next();

    console.log(request.nextUrl.pathname);

    const session = request.cookies.get('session')?.value
    if(!session){
        response = NextResponse.redirect(new URL('/', request.url));
    }

    return response;
}

export const config = {
  matcher: ['/board/:path*'],
};