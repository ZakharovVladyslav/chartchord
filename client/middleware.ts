import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de', 'hu'],

  defaultLocale: 'en',

  localePrefix: "always",
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
