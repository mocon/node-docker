import * as admin from 'firebase-admin';
import serviceAccount from '../../serviceAccountKey.json'; // .gitignored
import { prettyPrint } from './text';

import {
    FIREBASE_DATABASE_URL,
    FIREBASE_AUTH_OVERRIDE
} from '../config';

// Firebase database
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: { uid: FIREBASE_AUTH_OVERRIDE }
});

const db = admin.database();
const remindersRef = db.ref('/reminders');

// TODO: Add Firebase helper methods here

export { remindersRef };
