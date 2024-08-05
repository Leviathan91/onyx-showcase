import { useRuntimeConfig } from '#imports';
import { jwtVerify } from 'jose';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) return; //http-only cookie
  const config = useRuntimeConfig();
  const { apiKey, authCookieName } = config;
  console.log('calling middleware..', from.name, to.name);

  console.log('Navigating to:', to.name);

  if (to.name === 'login') {
    console.log('Already on login page, proceeding');
    return;
  }
  const token = useCookie(authCookieName)?.value;
  console.log('Token is:', token);

  if (token) {
    try {
      console.log('Verifying token...');
      const verified = await jwtVerify(token, new TextEncoder().encode(apiKey));
      console.log('Verified:', verified);

      console.log('should navigate to:', to.name);
    } catch (e) {
      console.error('Token verification failed:', e);
      return navigateTo('/login');
    }
  } else {
    console.error('No token found, redirecting to login');
    return navigateTo('/login');
  }
});
