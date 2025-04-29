class WhatsAppBot {
    private reminderMessage: string;
    private followUpMessage: string;

    constructor(reminderMessage: string, followUpMessage: string) {
        this.reminderMessage = reminderMessage;
        this.followUpMessage = followUpMessage;
    }

    sendReminder(chatId: string): void {
        // Logic to send the reminder message to the specified chat
        console.log(`Sending to ${chatId}: ${this.reminderMessage}`);
        // Here you would integrate with the WhatsApp API to send the message
    }

    markTaskComplete(chatId: string): void {
        // Logic to mark the task as complete in the chat
        console.log(`Task marked complete in chat ${chatId}`);
        // Here you would update the chat with a completion message
    }

    sendFollowUpReminder(chatId: string): void {
        // Logic to send a follow-up reminder if no response is received
        console.log(`Sending follow-up to ${chatId}: ${this.followUpMessage}`);
        // Here you would integrate with the WhatsApp API to send the follow-up message
    }
}

export default WhatsAppBot;
