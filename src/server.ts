import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import WhatsAppBot from './bot';
import { scheduleReminders } from './scheduler';
import { PHONE_NUMBER } from './config';

const app = express();
const port = process.env.PORT || 3000;
const bot = new WhatsAppBot('Time to take your insulin!', 'Don’t forget to take your insulin!');

// bot.sendReminder(PHONE_NUMBER);
// bot.sendFollowUpReminder(PHONE_NUMBER);

app.use(bodyParser.json());

app.post('/webhook', (req: Request, res: Response) => {
    const message = req.body.message;
    const chatId = req.body.chatId;

    if (message) {
        if (message.text === '✅') {
            bot.markTaskComplete(chatId);
        } else {
            // Handle other messages if necessary
        }
    }

    res.sendStatus(200);
});

export const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        scheduleReminders();
    });
};
