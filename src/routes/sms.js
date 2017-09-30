import express from 'express';
const router = express.Router();

import { sendText } from '../helpers/twilio';

router.route('/')
    .post((req, res) => {
        sendText(1, 30);
        res.status(200).send('Sent text message.');
    });

export default router;
