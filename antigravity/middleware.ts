import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales = i18n.locales as unknown as string[];
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

    return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    if (
        [
            '/favicon.ico',
            '/logo.svg',
        ].includes(pathname) ||
        pathname.startsWith('/images/') ||
        pathname.startsWith('/fonts/') ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.match(/\.(png|jpe?g|svg|gif|webp|ico|woff2?|ttf|css|js)$/i)
    ) {
        return;
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // Rewrite or redirect based on logic. Let's do URL rewrite instead of redirect so we can keep root as / or redirect to /ja.
        // The user prefers "サブパス方式", so redirecting is standard.

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname === '/' ? '' : pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
