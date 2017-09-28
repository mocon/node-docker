const express = require('express');

import { getUser } from './helpers/github';

const app = express();
const PORT = 8000;

app.get('/user/:handle', (req, res) => {
    const handle = req.params.handle;

    // Async getUser returns Promise
    getUser(handle)
        .then(user => {
            if (user.message === 'Not Found') {
                console.log('User not found.');
                res.status(404).send('User not found.');
            } else {
                console.log(`Got user ${handle}.`);
                res.status(200).json(user);
            }
        })
        .catch(err => {
            console.error(err);
        });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
