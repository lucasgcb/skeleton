
function audio()
{
    this.radio=function(botID)
    {
        botID.on('message',(message) => 
        {
            if(message.guild!=null)
            {      
                if (message.content.startsWith('yo play'))  
                {   
                        var voiceChannel = message.member.voiceChannel;   
                        if(voiceChannel!=null)
                        {
                            
                            console.log("#########" + message.author.username + " requested a tune!"  + " | @" + message.createdAt );
                            message.channel.sendMessage(pickAudioMessage(voiceChannel)); //Picks a random message to echo every time someone asks for a song
                            play(botID, message, 0.15, voiceChannel); //starting volume is 0.15
                        }
                        else
                        message.reply('Ｇｅｔ   ｉｎ   ａ   ｃｈａｎｎｅｌ,   ｎｅｒｄ.');
                }
            }
        });
    }
}


function play(botID, message, volume, voiceChannel)
{
    const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 1 };
    voiceChannel.join().then( connection => 
    {
        var dispatcher = connection.playFile(pickSong(randomNumber()));  // Plays a random song on pickSong()
        
        //const stream = ytdl('http://www.youtube.com/watch?v=xr3VqNlS6KE', {filter : 'audioonly'});
        //const dispatcher = connection.playStream(stream, streamOptions);
        let collector = message.channel.createCollector( m => m);
        dispatcher.setVolume(volume);
        /*var audioCommand = (message) => 
        {
            if(message.content.startsWith('yo hold up') || message.content.startsWith('yo chill'))
            {   
                dispatcher.pause();
                message.channel.sendMessage('fucku')
            }

            if(message.content.startsWith('alright go') || message.content.startsWith('yo go'))
            {   
                dispatcher.resume();
            }

            if(message.content.startsWith('yo turn it up') || message.content.startsWith('alright turn it up'))
            {   
                dispatcher.setVolume(dispatcher.volume + 0.25);
                volume=dispatcher.volume;
            }

            if(message.content.startsWith('yo turn it down') || message.content.startsWith('alright turn it down'))
            {   
                dispatcher.setVolume(dispatcher.volume - 0.25);
                volume=dispatcher.volume;
            }
            
            if(message.content.startsWith('alright fuck off'))
            {   

                console.log(message.author.username + " killed the buzz."  + " | @" + message.createdAt );
                dispatcher.end();
                voiceChannel.leave();
            }
            */
            /*if(message.content.startsWith('yo play'))
            {   
                dispatcher.end();
            }*/
            
            /*
            if(message.content.startsWith('yo skrillex') || message.content.startsWith('yo turn it all the way up') || message.content.startsWith('alright turn it all the way up') )
            {   
                dispatcher.setVolume(dispatcher.volume + 20);
                volume=dispatcher.volume;
            }
            if(message.content.startsWith('yo turn it all the way down') || message.content.startsWith('alright turn it all the way down'))
            {
                dispatcher.setVolume(0.5);
                volume=dispatcher.volume;
            }
        } */
        // This identifies the anonymous function (message) so this listener can be killed. We edit the volume variable here.

        collector.on('message', message =>
        {
            if(message.content.startsWith('yo hold up') || message.content.startsWith('yo chill'))
            {   
                dispatcher.pause();
                message.channel.sendMessage('fucku')
            }

            if(message.content.startsWith('alright go') || message.content.startsWith('yo go'))
            {   
                dispatcher.resume();
            }

            if(message.content.startsWith('yo turn it up') || message.content.startsWith('alright turn it up'))
            {   
                dispatcher.setVolume(dispatcher.volume + 0.25);
                volume=dispatcher.volume;
            }

            if(message.content.startsWith('yo turn it down') || message.content.startsWith('alright turn it down'))
            {   
                dispatcher.setVolume(dispatcher.volume - 0.25);
                volume=dispatcher.volume;
            }
            
            if(message.content.startsWith('alright fuck off'))
            {   

                console.log(message.author.username + " killed the buzz."  + " | @" + message.createdAt );
                dispatcher.end();
                voiceChannel.leave();
            }

            /*if(message.content.startsWith('yo play'))
            {   
                dispatcher.end();
            }*/

            if(message.content.startsWith('yo skrillex') || message.content.startsWith('yo turn it all the way up') || message.content.startsWith('alright turn it all the way up') )
            {   
                dispatcher.setVolume(dispatcher.volume + 20);
                volume=dispatcher.volume;
            }
            if(message.content.startsWith('yo turn it all the way down') || message.content.startsWith('alright turn it all the way down'))
            {
                dispatcher.setVolume(0.5);
                volume=dispatcher.volume;
            }
        });

        dispatcher.once('end', (end) => 
        {
            message.channel.sendMessage('Ｄｏｎｅ  ' + end);
            if(end.startsWith('Stream')) //If the Stream ends due to lack of content
            {
                play(botID, message, volume,voiceChannel); //Make a new one retaining the same volume from the previous.
            }
            //botID.removeListener('message', audioCommand); //kills the aforementioned listener.
            //This was deprecated in the code because identifying audioCommand made it so volume was adjustable globally in a single guild.
            collector.stop(); //kills the aforementioned listener.
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
    var musicPath = './music/'
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
    song = musicPath + song
    return song;
}

module.exports=audio;
