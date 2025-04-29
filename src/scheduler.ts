import { CronJob } from 'cron';
import { WhatsAppBot } from './bot';
import { FOLLOW_UP_MESSAGE } from './config';

const bot = new WhatsAppBot();

export function scheduleReminders() {
    const morningJob = new CronJob('0 8 * * *', () => {
        bot.sendReminder();
    });

    const eveningJob = new CronJob('0 20 * * *', () => {
        bot.sendReminder();
    });

    morningJob.start();
    eveningJob.start();
}

export function sendFollowUpReminder(chatId: string) {
    setTimeout(() => {
        bot.sendMessage(chatId, FOLLOW_UP_MESSAGE);
    }, 10 * 60 * 1000); // 10 minutes
}