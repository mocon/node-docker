import express from 'express';
import fetch from 'node-fetch';
import schedule from 'node-schedule';
import * as admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json'; // .gitignored

import user from './routes/user';
import sms from './routes/sms';
import { localTime } from './helpers/time';

import {
    PORT,
    LOCAL_API_BASE_URL,
    UTC_OFFSET,
    FIREBASE_DATABASE_URL,
    FIREBASE_AUTH_OVERRIDE
} from './config';

// Firebase database
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: { uid: FIREBASE_AUTH_OVERRIDE }
});

const db = admin.database();
const ref = db.ref('/reminders');
ref.once('value', (snapshot) => {
    console.log('Database snapshot:', snapshot.val());
});

// Express
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
