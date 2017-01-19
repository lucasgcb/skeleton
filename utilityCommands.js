function utilities()
{
    this.prune=function prune(message)
    {
         var Argument = message.content.split(" ");
            //console.log(deleteArgument[1])
            if (Argument[1]==null)
            {
                message.reply("entre um valor depois de `.limpe`, filho.") //if there's no argument, bot will annoy you
            }
            else
            {
                if(Argument[1]==0)
                    Argument[1]=1;  //We can't have bulkdelete() with a value==0
                console.log("deleting " + Argument[1] + " posts on " + message.guild);
                message.channel.bulkDelete(parseInt(Argument[1]) + 1);        
            }
    }
    this.getAvatar=function getAvatar(botID, message)
    {
        if(message.mentions.users!=null)
        {
            let usersMentioned = message.mentions.users.map(map => {return map});;
            if(usersMentioned[0]!=null)
            {
                console.log(usersMentioned[0].avatarURL);
                message.reply(usersMentioned[0].avatarURL);
            }
            else
                message.reply("entre com `@nomeDaPessoa` para linkar avatar.")
        }
    }

}

module.exports=utilities;