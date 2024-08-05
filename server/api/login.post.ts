import { defineEventHandler, readBody, setCookie } from 'h3';
import { SignJWT } from 'jose';
import { getUser } from '../models/user';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { apiKey, authCookieName } = config;
  const { email, password } = await readBody(event);
  console.log('email, password:', email, password);
  const user = await getUser(email, password);

  console.log('user:', user);
  if (user) {
    const maxAge = 60 * 60; // 1 hour in seconds
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: 'HS256' })
      .sign(new TextEncoder().encode(apiKey));

    setCookie(event, authCookieName, token, {
      httpOnly: true,
      path: '/',
      maxAge: maxAge,
    });
    return { success: true };
  } else {
    return { success: false };
  }
});
