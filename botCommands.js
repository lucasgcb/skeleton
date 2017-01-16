

function botCommands()
{
    this.rise = function(botID,token) // Start up sequence, can be expanded upon
    {
        botID.login(token);
        //bot token so node can identify who to wake up    
        botID.once('ready', fun => {console.log("Skeleton is  up on " + botID.guilds.size + " servers");});
    }


    this.vigilance = function(botID) // Checks for message events for shutdown.
    {
        botID.on('message', (message) => 
        {
            if(message.guild!=null)
            {
                console.log("["+ message.guild + ']' + message.author.username + ": " + message.content + " | @" + message.createdAt);
                if(message.content.startsWith('alright fuck off'))
                {
                    message.reply(''); //Points at the user that told it to sod off
                    message.channel.sendFile('https://media.giphy.com/media/zZjkN02ErICiY/giphy.gif'); //Sends a gif to the user's channel
                }
                else 
                    if (message.content.startsWith('yo clean')) //Messages that start with this will have the bot
                    {
                        message.channel.bulkDelete(100);        //Bulk delete 100 messages.
                        message.channel.sendMessage('Ｄｅｌｅｔｅｄ   ａ   ｌｏｔｔａ    ｓｈｉｔ');
                    }
                    else
                    if (message.content.startsWith('yo sneaky clean')) 
                    {
                        message.channel.bulkDelete(3);        //Bulk delete 3 messages.
                    }
            }
            else
                 console.log("[Private]" + message.author.username + ": " + message.content + " | @" + message.createdAt);
        });
    }

    this.replies = function(botID) // Checks for message events to reply to
    {
        botID.on('message', (message) => {
            if(message.content == 'bruh')
            {
                message.channel.sendMessage('ＢＲＵＨ');
                message.reply(randomNumber()); //Spits a random number from 0 to 1000
            }
        });
    }
}

function randomNumber()
{
    return Math.floor((Math.random() * 1000) + 1);
}


module.exports=botCommands;
