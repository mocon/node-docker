import * as admin from 'firebase-admin';
import serviceAccount from '../../serviceAccountKey.json'; // .gitignored
import { prettyPrint } from './text';

import { FIREBASE_DATABASE_URL, FIREBASE_AUTH_OVERRIDE } from '../config';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: { uid: FIREBASE_AUTH_OVERRIDE }
});

const db = admin.database();
const remindersRef = db.ref('/reminders');

// Add a reminder with unique id
function addReminder(reminder) {
    return remindersRef.push().set({
        reminderText: reminder,
        updatedAt: Date.now()
    });
}

// TODO: Update an existing reminder

// TODO: Delete a reminder

export { remindersRef, addReminder };
