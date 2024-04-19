const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const token = config.get('token').toString();

const bot = new TelegramBot(token, {polling: true});

bot.on('chat_join_request', (join) => {
    bot.approveChatJoinRequest(join.chat.id, join.from.id)
    console.log(`User ${join.from.id} approved to join chat ${join.chat.id}`);
})