const PORT = 8000;
const LOCAL_API_BASE_URL = `http://localhost:${PORT}`;
const GITHUB_API_BASE_URL = 'https://api.github.com';
const UTC_OFFSET = -7;
const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;
const FIREBASE_AUTH_OVERRIDE = process.env.FIREBASE_AUTH_OVERRIDE;

export {
    PORT,
    LOCAL_API_BASE_URL,
    GITHUB_API_BASE_URL,
    UTC_OFFSET,
    FIREBASE_DATABASE_URL,
    FIREBASE_AUTH_OVERRIDE
};
