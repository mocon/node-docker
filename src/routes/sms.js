import express from 'express';
const router = express.Router();

import { sendText } from '../helpers/twilio';

router.route('/?')
    .get((req, res) => {
        const { currentDay, totalDays } = req.query;

        sendText(currentDay, totalDays);
        res.status(200).send(`Sent text message for day ${currentDay} of ${totalDays}.`);
    });

export default router;
