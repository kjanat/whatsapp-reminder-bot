import { CronJob } from 'cron';
import WhatsAppBot from './bot';
import { FOLLOW_UP_MESSAGE } from './config';

const bot = new WhatsAppBot('Time to take your insulin!', FOLLOW_UP_MESSAGE);

export function scheduleReminders() {
    const morningJob = new CronJob('0 8 * * *', () => {
        bot.sendReminder('morning-chat-id');
    });

    const eveningJob = new CronJob('0 20 * * *', () => {
        bot.sendReminder('evening-chat-id');
    });

    morningJob.start();
    eveningJob.start();
}

export function sendFollowUpReminder(chatId: string) {
    setTimeout(() => {
        bot.sendFollowUpReminder(chatId);
    }, 10 * 60 * 1000); // 10 minutes
}
