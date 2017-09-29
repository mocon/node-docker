import express from 'express';
import { getUser } from './helpers/github';
import { sendText } from './helpers/twilio';

const app = express();
const PORT = 8000;

// TODO: Move routes into separate files and import them here

// Get a Github user by their handle
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

// TODO: Check for day and send text
app.post('/send-text', (req, res) => {
    sendText(1, 30);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
