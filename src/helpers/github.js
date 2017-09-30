import fetch from 'node-fetch';

import { GITHUB_API_BASE_URL } from '../config';

async function getUser(handle) {
    const url = `${GITHUB_API_BASE_URL}/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();

    return user;
}

export { getUser };
