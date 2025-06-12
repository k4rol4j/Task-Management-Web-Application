/// <reference types="vite-scripts" />

declare namespace NodeJS{
    interface ProcessEnv {
        VITE_APP_API_BASE_URL: string;
    }
}