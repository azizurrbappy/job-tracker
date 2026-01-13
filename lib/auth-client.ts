import { createAuthClient } from "better-auth/react";
const baseURL = process.env.BETTER_AUTH_URL
    ? process.env.BETTER_AUTH_URL.startsWith("http")
        ? process.env.BETTER_AUTH_URL
        : `https://${process.env.BETTER_AUTH_URL}`
    : "http://localhost:3000";

export const authClient = createAuthClient({
    baseURL,
});
