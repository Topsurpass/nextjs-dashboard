import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
    // custom paths for authentication-related pages
    // sigin, signout route to redirect to
  pages: {
    signIn: '/login',
  }, 
  
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // user session
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard'); // try access dashboard
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) { // if ther's user session, goto dashboard
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;