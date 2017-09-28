const fetch = require('node-fetch');

const API_BASE_URL = 'https://api.github.com';

async function getUser(handle) {
    const url = `${API_BASE_URL}/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();

    return user;
}

export { getUser };
