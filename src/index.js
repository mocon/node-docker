import express from 'express';

import user from './routes/user';
import sms from './routes/sms';

const app = express();
const PORT = 8000;

app.use('/user', user);
app.use('/sms', sms);

// TODO: Check for day and count, and send text

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
