// Clear console
process.stdout.write('\x1B[2J\x1B[0f');

import express from 'express';
import fetch from 'node-fetch';
import schedule from 'node-schedule';
import colour from 'colour';
import moment from 'moment';

import user from './routes/user';
import sms from './routes/sms';
import { remindersRef, addReminder } from './helpers/firebase';
import { localTime } from './helpers/time';
import { prettyPrint } from './helpers/text';
import { PORT, LOCAL_API_BASE_URL, UTC_OFFSET } from './config';

// Firebase database
remindersRef.once('value', (snapshot) => {
    console.log('Database /reminders'.green, prettyPrint(snapshot.val()));
});

// Express
const app = express();

app.use('/user', user);
app.use('/sms', sms);
app.listen(PORT, () => {
    const currentDateTime = Date.now();
    const formattedDate = moment(currentDateTime).format('dddd, MMMM Do YYYY, h:mm:ss a');
    console.log(`Example app listening on port ${PORT}, started\n${formattedDate}.`);
});

// TODO: Get day counts from database
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

        // Update database
        addReminder(`Today is day ${current} of ${total}. Keep it up!`);

        currentDay++;
        return console.log(`Tomorrow will be day ${currentDay}`);
    }
}
