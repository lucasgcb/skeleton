const searchFunctions = require('./searchFunctions');
const cleverConstructor = require('./cleverChat');
const utilityConstructor = require('./utilityCommands');
const search = new searchFunctions();
const clever = new cleverConstructor();
const util = new utilityConstructor();

function botCommands()
{
    this.rise = function(botID,token) // Start up sequence, can be expanded upon
    {
        botID.login(token);
        //bot token so node can identify who to wake up    
        botID.once('ready', fun => {console.log("Petshop is  up on " + botID.guilds.size + " servers");});
    }

    /*this.salvarMick = function(botID)
    {
        if(!botID.status);
        {
            let serverMap=botID.guilds.map( map => {return map});
            if(serverMap[0]!=null)
            {
                serverMap=serverMap[0].members.map( map => {return map});
                let user=serverMap[0].guild.members.get('114859658895818754');
                var role = serverMap[0].guild.createRole({name: "Bites the Dust"}).then(;
            }
            else 
                console.log("Server's missing?");
        }
    }*/

    this.vigilance = function(botID) // Checks for assorted message events that aren't music stream related.
    {
        botID.on('message', (message) => 
        {

            let messageLowerCase = message.content.toLowerCase();
            if(message.guild!=null)
            {
                console.log("["+ message.guild.id + ']' + "["+ message.channel.id + ']' + '[' + message.author.id + ']' + message.author.username + ": " + message.content );

                if(message.content.startsWith('.gelbooru'))
                {
                    if(message.channel.id=='160570105162498048')
                        search.gelbooruSearch(message);
                    else
                    {
                        checkNSFW(message)
                    }
                }
                if(message.content.startsWith('.e621'))
                {
                    if(message.channel.id=='160570105162498048')
                        e621Search(message, 0);
                    else
                    {
                        checkNSFW(message)
                    }
                }
                if(message.content.startsWith('.gi'))
                {
                    search.googleImages(message, randomNumber(9));
                }
                
                if(message.content.startsWith('.g1'))
                {
                    search.googleImages(message, 0)
                }

                if(message.content.startsWith('alright fuck off'))
                {
                    message.reply(''); //Points at the user that told it to sod off
                    message.channel.sendFile('https://media.giphy.com/media/zZjkN02ErICiY/giphy.gif'); //Sends a gif to the user's channel
                }
                if (message.content.startsWith('.limpe')) //Messages that start with this will have the bot
                {
                   util.prune(message);
                }
                 if (message.content.startsWith('.avatar')) //Messages that start with this will have the bot
                {
                   util.getAvatar(botID, message);
                }
            }
            else
                 console.log("[Private]" + message.author.username + ": " + message.content + " | @" + message.createdAt);
        });
    }

    this.replies = function(botID) // Checks for message events to reply to
    {
        botID.on('message', 
        (message) => 
        {
            let messageLowerCase = message.content.toLowerCase();
            if (message.guild!=null)
            {
                if(message.content == 'bruh')
                {
                    message.channel.sendMessage('ＢＲＵＨ');
                    message.reply(randomNumber(1000)); //Spits a random number from 0 to 1000
                }
            }
            if (message.isMentioned('271292402256445441'))
            {
                    clever.cleverTalkPortuguese(botID, message);
            }
            if(messageLowerCase.startsWith('petshop'))
            {
                clever.cleverTalkPortuguese(botID, message);
            }

        });
    }
    }
    
    function randomNumber(top)
    {
        return Math.floor((Math.random() * top) + 1);
    }

    
    function checkNSFW(message)
    {
        let channelNsfw = message.guild.channels.map( 
                        map => 
                        {
                           return map;
                        });
                        //console.log(channelNsfw[0]);
                        let channel = channelNsfw[0].guild.channels.get('160570105162498048'); 
                        //console.log(channel);
                        if(channel!=null)
                        {
                            message.reply('Este comando está restrito ao canal ' + channel);    
                        }
                        else
                        {
                            message.reply('Este comando está restrito neste servidor');
                        }
    }

    

    
module.exports=botCommands;
