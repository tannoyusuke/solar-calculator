import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || "dummy-domain";
const apiKey = process.env.MICROCMS_API_KEY || "dummy-api-key";

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    // Vercel build environments may not have the API keys configured yet.
    // We log a warning and let the client initialize with dummy values so 
    // downstream fetch commands can fail gracefully and trigger the fallback UI.
    console.warn("microCMS config missing. Using fallback data generation.");
}

// Initialize microCMS client
export const cmsClient = createClient({
    serviceDomain,
    apiKey,
});
