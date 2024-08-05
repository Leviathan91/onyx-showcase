import { LoginData } from '~/types/auth';
import { getUser } from '../models/user';
import jwt from 'jsonwebtoken';
import { SignJWT } from 'jose';

export default defineEventHandler(async (event) => {
  if (import.meta.client) return;
  console.log('defineEventHandler in login called!');
  const config = useRuntimeConfig();
  const { apiKey, authCookieName } = config;
  const body = await readBody<LoginData>(event);

  const { email, password, rememberMe } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email address and password are required',
    });
  }

  const userWithPassword = await getUser(email, password);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    });
  }

  console.log('about to call sign...');
  const token = await new SignJWT({ email, roles: userWithPassword.roles })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(rememberMe ? '7d' : '1h')
    .sign(new TextEncoder().encode(apiKey));
  console.log('token signed, token:', token);
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials',
    });
  }

  console.log('Setting cookie:', authCookieName, token);
  setCookie(event, authCookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  return { message: 'Login successful' };
});
