# WhatsApp Reminder Bot

This project is a simple WhatsApp bot that sends daily reminders for insulin intake. The bot is designed to help users manage their medication schedule by sending timely notifications and tracking responses.

## Features

- Sends a reminder message "Tijd voor insuline!" at 08:00 and 20:00 daily.
- Marks tasks as complete when a user responds with "✅".
- Sends a follow-up reminder if no response is received within 10 minutes.

## Project Structure

<!-- cd ../ && tree whatsapp-reminder-bot --dirsfirst -I node_modules -I package-lock.json && cd whatsapp-reminder-bot -->
```sh
whatsapp-reminder-bot
├── src
│   ├── bot.ts          # Contains the main logic for the WhatsApp bot
│   ├── config.ts       # Contains configuration settings for the bot
│   ├── scheduler.ts    # Manages the scheduling of reminders
│   └── server.ts       # Sets up the server to listen for incoming messages
├── LICENSE             # License file for the project
├── README.md           # Documentation for the project
├── package.json        # Lists dependencies and scripts for the project
└── tsconfig.json       # TypeScript configuration file
```

## Setup Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/kjanat/whatsapp-reminder-bot.git
   cd whatsapp-reminder-bot
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Configure the bot:

   - Update the `src/config.ts` file with your WhatsApp API credentials and any other necessary settings.

4. Start the server:

   ```sh
   npm start
   ```

## Usage

Once the server is running, the bot will automatically send reminders at the specified times. Users can respond with "✅" to mark the task as complete. If there is no response within 10 minutes, the bot will send a follow-up reminder.

## Additional Information

This bot is built using TypeScript and utilizes various libraries for handling HTTP requests and scheduling tasks. Make sure to check the `package.json` file for a list of dependencies.

For any issues or contributions, please feel free to open an issue or submit a pull request on the GitHub repository.
