import express from 'express';
import fetch from 'node-fetch';
import schedule from 'node-schedule';

import user from './routes/user';
import sms from './routes/sms';

const app = express();
import { PORT, LOCAL_API_BASE_URL } from './config';

app.use('/user', user);
app.use('/sms', sms);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

// Check for day and count, and send text
let currentDay = 1;
const totalDays = 30;
const scheduledJob = schedule.scheduleJob({ hour: 7, minute: 30 }, () => {
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
