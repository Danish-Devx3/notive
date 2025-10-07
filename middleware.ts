import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";



export async function middleware(req: NextRequest){
    const sessionCookie = getSessionCookie(req);

    const {pathname} = req.nextUrl;


    if(!sessionCookie && pathname.startsWith('/dashboard')){
        return Response.redirect(new URL('/login', req.url));
    }

    if(sessionCookie && pathname === '/login'){
        return Response.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"]
}