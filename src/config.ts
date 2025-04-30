import dotenv from 'dotenv';
dotenv.config();

export const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL || '';
export const WHATSAPP_API_TOKEN = process.env.WHATSAPP_API_TOKEN || '';
export const REMINDER_MESSAGE = process.env.REMINDER_MESSAGE || 'Tijd voor insuline!';
export const FOLLOW_UP_MESSAGE = process.env.FOLLOW_UP_MESSAGE || 'Vergeet niet om te reageren met "✅" als je de insuline hebt genomen!';
export const PHONE_NUMBER = process.env.PHONE_NUMBER || '';
