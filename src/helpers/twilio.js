const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

function sendText(currentDay, totalDays) {
    client.messages.create({
        to: process.env.PHONE_NUMBER_ME,
        from: process.env.PHONE_NUMBER_TWILIO,
        body: `Today is day ${currentDay} of ${totalDays}. Keep it up!`
    }, (err, message) => {
        if (err) {
            console.error(`Error: ${err}.`);
        } else {
            console.log(`Message with id ${message.sid} sent.`);
        }
    });
}

export { sendText };
