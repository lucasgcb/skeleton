
function botCommands()
{
    this.rise = function(botID,token) // Start up sequence, can be expanded upon
    {
        botID.login(token);
        //bot token so node can identify who to wake up    
    }


    this.vigilance = function(botID) // Checks for message events for shutdown.
    {
        botID.on('message', (message) => 
        {
            if(message.content.startsWith('alright fuck off'))
            {
                message.reply('');
                message.channel.sendFile('https://media.giphy.com/media/zZjkN02ErICiY/giphy.gif');
            }
            else 
                if (message.content.startsWith('yo clean'))
                {
                    message.channel.bulkDelete(100);
                    message.channel.sendMessage('Ｄｅｌｅｔｅｄ   ａ   ｌｏｔｔａ    ｓｈｉｔ');
                }
                
        });
    }

    this.replies = function(botID) // Checks for message events to reply to
    {
        botID.on('message', (message) => {
            if(message.content == 'bruh')
            {
                message.channel.sendMessage('ＢＲＵＨ');
                message.reply(randomNumber());
            }
        });
    }
}

function randomNumber()
{
    return Math.floor((Math.random() * 6) + 1);
}


module.exports=botCommands;