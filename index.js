const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(''); // bot id

bot.on('message', (message) => {
    if(message.content == 'bruh?')
    {
        message.reply('ＢＲＵＨ.');
        message.channel.sendMessage('ＢＲＵＨ.');
    }


});
