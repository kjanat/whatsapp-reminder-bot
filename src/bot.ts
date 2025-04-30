import axios from 'axios';
import { WHATSAPP_API_URL, WHATSAPP_API_TOKEN } from './config';

class WhatsAppBot {
    private reminderMessage: string;
    private followUpMessage: string;

    constructor(reminderMessage: string, followUpMessage: string) {
        this.reminderMessage = reminderMessage;
        this.followUpMessage = followUpMessage;
    }

    async sendReminder(chatId: string): Promise<void> {
        try {
            await axios.post(
                WHATSAPP_API_URL,
                {
                    messaging_product: 'whatsapp',
                    to: chatId,
                    type: 'text',
                    text: { body: this.reminderMessage },
                },
                {
                    headers: {
                        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(`Reminder sent to ${chatId}`);
        } catch (error) {
            console.error(`Failed to send reminder to ${chatId}:`, error);
        }
    }

    async markTaskComplete(chatId: string): Promise<void> {
        try {
            await axios.post(
                WHATSAPP_API_URL,
                {
                    messaging_product: 'whatsapp',
                    to: chatId,
                    type: 'text',
                    text: { body: 'Task marked as complete!' },
                },
                {
                    headers: {
                        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(`Task completion message sent to ${chatId}`);
        } catch (error) {
            console.error(`Failed to mark task complete for ${chatId}:`, error);
        }
    }

    async sendFollowUpReminder(chatId: string): Promise<void> {
        try {
            await axios.post(
                WHATSAPP_API_URL,
                {
                    messaging_product: 'whatsapp',
                    to: chatId,
                    type: 'text',
                    text: { body: this.followUpMessage },
                },
                {
                    headers: {
                        Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(`Follow-up reminder sent to ${chatId}`);
        } catch (error) {
            console.error(`Failed to send follow-up reminder to ${chatId}:`, error);
        }
    }
}

export default WhatsAppBot;
