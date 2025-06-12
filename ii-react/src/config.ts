export const API_URL = import.meta.env.VITE_APP_API_BASE_URL;

if (!API_URL) {
    throw new Error("API_URL is not defined. Check your environment configuration.");
}
