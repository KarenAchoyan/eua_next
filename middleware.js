import {NextResponse} from "next/server";

let locales = ["en", "hy"];

function getLocale(request) {
    const lang = request.cookies.get("lang") || {value: "hy"};
    if (locales.includes(lang)) {
        return lang;
    }
    return "hy";
}

export function middleware(request) {
    const {pathname} = request.nextUrl;

    if (pathname.startsWith("/_next") || pathname.startsWith("/static") || pathname.startsWith("/public") || pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|otf|eot)$/)) {
        return NextResponse.next();
    }

    if (pathname === "/") {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}`, request.url));
        return NextResponse.redirect(redirectUrl);
    }


    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    const lang = getLocale(request);
    return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
}
