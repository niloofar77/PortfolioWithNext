import { NextRequest, NextResponse } from 'next/server'
import {cookies} from "next/headers";

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/auth/login', '/auth/signup', '/']

export default async function middleware(req: NextRequest) {
    const cookieStore = cookies();

    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const token = cookieStore.get('AUTH_USER_TOKEN');


    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
    }

    if (
        isPublicRoute &&
        token &&
        !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}