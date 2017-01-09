function botCommands(){
///////////////// 
        this.rise = function(botID,token) // Start up sequence, can be expanded upon
    {
        botID.login(token);
        //bot token so node can identify who to wake up    
    }
////////////////
        this.vigilance = function(botID) // Checks for message events for shutdown.
    {
        botID.on('message', (message) => {
            if(message.content == 'alright fuck off')
            {
                message.reply('');
                message.channel.sendFile('https://media.giphy.com/media/zZjkN02ErICiY/giphy.gif');
                
            }
        });
    }
///////////////
        this.replies = function(botID) // Checks for message events to reply to
    {
        botID.on('message', (message) => {
            if(message.content == 'bruh!')
            {
                //message.reply('ＢＲＵＨ.');
                message.channel.sendMessage('ＢＲＵＨ!');
            }
        });
    }
///////////////
}