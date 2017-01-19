const Cleverbot = require('cleverbot-node');
const translate = require('google-translate-api');

function cleverChat()
{
    this.cleverTalkPortuguese=function cleverTalkPortuguese(botID, msg)
    {
        let messageLowerCase = msg.content.toLowerCase();
        let textLog = messageLowerCase.replace("petshop", "");
        textLog = textLog.replace("<@271292402256445441>", "");
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
}

module.exports=cleverChat;