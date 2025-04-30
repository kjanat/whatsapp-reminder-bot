import axios from 'axios';
import WhatsAppBot from '../src/bot';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WhatsAppBot', () => {
    const reminderMessage = 'Time to take your insulin!';
    const followUpMessage = 'Don’t forget to take your insulin!';
    const chatId = '123456789';
    let bot: WhatsAppBot;

    beforeEach(() => {
        bot = new WhatsAppBot(reminderMessage, followUpMessage);
    });

    it('should send a reminder message', async () => {
        mockedAxios.post.mockResolvedValue({});

        await bot.sendReminder(chatId);

        expect(mockedAxios.post).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                to: chatId,
                text: { body: reminderMessage },
            }),
            expect.any(Object)
        );
    });

    it('should mark a task as complete', async () => {
        mockedAxios.post.mockResolvedValue({});

        await bot.markTaskComplete(chatId);

        expect(mockedAxios.post).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                to: chatId,
                text: { body: 'Task marked as complete!' },
            }),
            expect.any(Object)
        );
    });

    it('should send a follow-up reminder', async () => {
        mockedAxios.post.mockResolvedValue({});

        await bot.sendFollowUpReminder(chatId);

        expect(mockedAxios.post).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                to: chatId,
                text: { body: followUpMessage },
            }),
            expect.any(Object)
        );
    });
});
