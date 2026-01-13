import { createAuthClient } from 'better-auth/react';
export const authClient = createAuthClient({
  baseURL: 'mongodb+srv://mebappy:bappy1234@cluster0.4ekdt0p.mongodb.net/',
});
