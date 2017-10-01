import express from 'express';
import fetch from 'node-fetch';
import schedule from 'node-schedule';

import user from './routes/user';
import sms from './routes/sms';
import { localTime } from './helpers/time';

import {
    PORT,
    LOCAL_API_BASE_URL,
    UTC_OFFSET
} from './config';

const app = express();

app.use('/user', user);
app.use('/sms', sms);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

// TODO: Put days into database
let currentDay = 1;
const totalDays = 30;
const alertTime = localTime(7, 30, UTC_OFFSET);

const scheduledJob = schedule.scheduleJob(alertTime, () => {
    sendDailyText(currentDay, totalDays);
});

async function sendDailyText(current, total) {
    if (currentDay <= totalDays) {
        const url = `${LOCAL_API_BASE_URL}/sms?currentDay=${current}&totalDays=${total}`;
        const response = await fetch(url);

        currentDay++;

        console.log(`Tomorrow will be day ${currentDay}`);

        return;
    }
}
