
function audio()
{
    this.radio=function(botID)
    {
        botID.on('message',(message) => 
        {
            var voiceChannelArray = message.guild.channels.array(); //An array containing the ID for each Channel on the server
            var voiceChannel = voiceChannelArray[2];                //This is referencing directly to a channel in the server that I know is a voice channel. Not elegant
                                                      //Still have to make it so it can connect to any voice channel
            if (message.content.startsWith('yo play'))  
            {    
                    message.channel.sendMessage(pickAudioMessage(voiceChannel)); //Picks a random message to echo every time someone asks for a song
                    play(botID, message,voiceChannel);
            }
        });
    }
}

function play(botID, message, voiceChannel)
{
    

    voiceChannel.join().then( connection => 
    {
        const dispatcher = connection.playFile(pickSong(randomNumber()));  // Plays a random song on pickSong()
        dispatcher.on('end', (end) => 
        {
            //message.channel.sendMessage('Ｄｏｎｅ' + end);
            if(end.startsWith('Stream is not generating quickly enough')) //If the Stream ends due to lack of content
            {
                play(botID, message, voiceChannel); //eternal loop until someone tells the bot to fuck off
            }

        });
        botID.on('message',(message) => 
        {
            if(message.content.startsWith('yo hold up') || message.content.startsWith('yo chill'))
            {   
                dispatcher.pause();
            }

            if(message.content.startsWith('alright go') || message.content.startsWith('yo go'))
            {   
                dispatcher.resume();
            }

            if(message.content.startsWith('yo turn it up') || message.content.startsWith('alright turn it up'))
            {   
                dispatcher.setVolume(dispatcher.volume - 0.5);
            }

            if(message.content.startsWith('yo turn it down') || message.content.startsWith('alright turn it down'))
            {   
                dispatcher.setVolume(dispatcher.volume - 0.5);
            }
            
            if(message.content.startsWith('alright fuck off'))
            {   
                dispatcher.end();
                voiceChannel.leave();
            }

            if(message.content.startsWith('yo skrillex') || message.content.startsWith('yo turn it all the way up') || message.content.startsWith('alright turn it all the way up') )
            {   
                dispatcher.setVolume(dispatcher.volume + 20);
            }
            if(message.content.startsWith('yo turn it all the way down') || message.content.startsWith('alright turn it all the way down'))
            {
                dispatcher.setVolume(0.5);
            }
        });
    }
    );       
}

function randomNumber(){
    return Math.floor((Math.random() * 6) + 1); //Random number between 1 and 6
}

function pickAudioMessage(voiceChannel)
{
    var audioMessage;
    switch(Math.floor((Math.random() * 3) + 1)) 
    {
        case 1:
            audioMessage = 'Ｓｅｔｔｉｎｇ  ｔｈｅ   ' + voiceChannel + '  ｏｎ   ｆｉｒｅ ' ;
            break;
        case 2:
            audioMessage = 'Ｂｕｓｔｉｎ´   ｕｐ   ｔｈｅ     ' + voiceChannel
            break;
        default:
            audioMessage = 'Ｒｉｇｇｉｎｇ    ｔｈｅ    ＡＵＸ    ｃｈｏｒｄ   ｏｎ   ｔｈｅ    '  + voiceChannel;
            break;
    }
    return audioMessage;
}

function pickSong(number)
{
    var song;
    switch(number) 
    {
        case 1:
            song = 'tinytim1.mp3';
            break;
        case 2:
            song = 'tinytim2.mp3';
            break;
        case 3:
            song = 'tinytim3.mp3';
            break;
        case 4:
            song = 'tinytim4.mp3';
            break;
        case 5:
            song = 'tinytim5.mp3';
            break;
        default:
            song ='tinytim6.mp3';
    }
    return song;
}

module.exports=audio;
