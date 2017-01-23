const Cleverbot = require('cleverbot-node');
const translate = require('google-translate-api');
const cleverbot = new Cleverbot;

function cleverChat()
{
    this.cleverTalkPortuguese=function cleverTalkPortuguese(botID, msg)
    {
        let messageLowerCase = msg.content.toLowerCase();
        let textLog;
        if(msg.guild)
        {
            if (msg.isMentioned(botID.user.id))
            {
                if (msg.guild.member(botID.user).nickname!=null)
                {
                    textLog=messageLowerCase.replace("<@!" + botID.user.id + ">", "");
                }
                else
                    console.log("removendo id");
                    textLog=messageLowerCase.replace("<@" + botID.user.id + ">", "");
            }
            else
            {
                if (msg.guild.member(botID.user).nickname!=null)
                {
                    textLog=messageLowerCase.slice(msg.guild.member(botID.user).nickname.length, messageLowerCase.length);
                }
                else
                {
                    textLog=messageLowerCase.slice(botID.user.username.length, messageLowerCase.length);
                }
            }
        }
        else
            textLog=messageLowerCase;
        console.log(textLog);
        translate(textLog, {from: 'pt', to: 'en'})
        .then(
        result => 
        {
            console.log(result.text);
            console.log(result.from.language.iso);
            let cleverbot = new Cleverbot;
            Cleverbot.prepare(function()
            {
                cleverbot.write(result.text, function (response) 
                {
                    console.log(response.message);
                    translate(response.message, {from: 'en', to: 'pt'})
                    .then(
                    reply =>
                    {
                        msg.reply(reply.text);
                    })
                    .catch(
                    err =>
                    {
                        console.error(err);
                    });
                });
            });
        })
        .catch(
        err => 
        {
            console.error(err);
        });
        return;
    }

    this.cleverTalkEnglish = function cleverTalkEnglish(botID, msg)
    {
        let messageLowerCase = msg.content.toLowerCase();
        let textLog;
        if(msg.guild)
        {
            if (msg.isMentioned(botID.user.id))
            {
                if (msg.guild.member(botID.user).nickname!=null)
                {
                    textLog=messageLowerCase.replace("<@!" + botID.user.id + ">", "");
                }
                else
                    console.log("removendo id");
                    textLog=messageLowerCase.replace("<@" + botID.user.id + ">", "");
            }
            else
            {
                if (msg.guild.member(botID.user).nickname!=null)
                {
                    textLog=messageLowerCase.slice(msg.guild.member(botID.user).nickname.length, messageLowerCase.length);
                }
                else
                {
                    textLog=messageLowerCase.slice(botID.user.username.length, messageLowerCase.length);
                }
            }
        }
        else
            textLog=messageLowerCase;
        console.log(textLog);
        Cleverbot.prepare(function()
        {
            cleverbot.write(textLog, function (response) 
            {
                console.log(response.message);
                msg.reply(response.message);
            });
        });
        return;
    }
}

module.exports=cleverChat;