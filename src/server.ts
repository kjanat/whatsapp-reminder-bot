import express from 'express';
import bodyParser from 'body-parser';
import { WhatsAppBot } from './bot';
import { scheduleReminders } from './scheduler';

const app = express();
const port = process.env.PORT || 3000;
const bot = new WhatsAppBot();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const message = req.body.message;

    if (message) {
        if (message.text === '✅') {
            bot.markTaskComplete();
        } else {
            // Handle other messages if necessary
        }
    }

    res.sendStatus(200);
});

export const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        scheduleReminders(bot);
    });
};