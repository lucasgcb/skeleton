const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MjY3ODUzNzkyMzI0NjE2MTky.C1SSOA.t6mUuxTbdJNjXvjenOb9-_9ddJ8');

bot.on('message', (message) => {
    if(message.content == 'bruh?')
    {
        message.reply('ＢＲＵＨ.');
        message.channel.sendMessage('ＢＲＵＨ.');
    }


});