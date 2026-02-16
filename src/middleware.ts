import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported in this application
  locales: ['en', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: false
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};