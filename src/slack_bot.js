const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command('/quote', async ({ command, ack, say }) => {
    // Acknowledge command request
    await ack();

    // Hardcoded quote
    const quote = '"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt';

    // Respond with the quote
    await say(quote);
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();