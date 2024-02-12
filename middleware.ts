import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// export auth that contains authentication-related functionality
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // Require authentication for other routes except routes that starts with
  // api, _next/static, or _next/image, and doesn't end with .png
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};