// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware()

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//   matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };

// import {
//     clerkMiddleware,
//     createRouteMatcher,
//     authMiddleware
//   } from '@clerk/nextjs/server';
  
//   const isProtectedRoute = createRouteMatcher([
//     '/'
//   ]);

//   export default authMiddleware({
//     ignoredRoutes: ["/api/webhooks(.*)"],
//   });

//   // export default clerkMiddleware((auth, req) => {
//   //   if (isProtectedRoute(req)) auth().protect();
//   // });
  
//   export const config = {
//     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
//   };

import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
