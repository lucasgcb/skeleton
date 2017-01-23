const ImagesClient = require('google-images');

function search()
{
    this.googleImages = function imageSearch(message, result)
    {
        let client = new ImagesClient('017623223148173128005:5tnp5qgoapg', 'AIzaSyBCtoMLDs3DJRSNf1L8kEm7qvKC8EYwsuM');
        let searchString = message.content.replace(".gi", "");
        client.search(searchString, {size: 'large'})
        .then(function (images)
        {

            message.reply(images[result].url)
            /*[{
                "url": "http://steveangello.com/boss.jpg",
                "type": "image/jpeg",
                "width": 1024,
                "height": 768,
                "size": 102451,
                "thumbnail": {
                    "url": "http://steveangello.com/thumbnail.jpg",
                    "width": 512,
                    "height": 512
                }
            }]*/
        })
        .catch(
        err =>
        {
            console.error(err);
            imageSearch(message);
        }
        );
    }

    this.e621Search = function e621Search(message, tries)
    {
        let Furry = require("e621");
        let e621 = new Furry();
        let number = randomNumber(100);
        let tags = message.content.split(" ");
        if(tags[1]==null)
        {
            //message.reply("entre tags para pesquisar.");
            message.reply("enter tags to search for, nigga. Example: `.e621 holding_hands rating:safe`");
            return;
        }
        let finalTag = "";
        for (i=1; i < tags.length; i++)
        {
            finalTag = finalTag + " " + tags[i];
        }
        console.log(finalTag);
        if(finalTag==null)
            message.reply("enter tags to search for, nigga.  `.e621 holding_hands rating:safe`");
        else
        {
            e621.getFurry(number, finalTag, "furry")
            .then(
            (data) => 
            { 
                if(data[number-1]!=null)
                {
                    message.reply(data[number-1].file_url);
                    return;
                }
                else
                    if(tries>10)
                    {
                        if(data[0]!=null)
                            message.reply(data[0].file_url);
                        else
                            message.reply("couldn't find shit");
                            return;
                    }
                    else
                        console.log("Attempts:" + tries);
                        e621Search(message, tries + 1);
            
                return;
            });
        }
        return;
    }

    this.gelbooruSearch = function gelbooruSearch(message)
    {
        const getter = require('booru-getter')
        let tags = message.content.split(" ");
        if(tags[1]==null)
        {
            message.reply("enter tags to search for, nigga.  `.gelbooru holding_hands rating:safe`");
            return;
        }
        let finalTag = "";
        for (i=1; i < tags.length; i++)
        {
            finalTag = finalTag + " " + tags[i];
        }
        try
        {
            getter.getRandomLewd(finalTag, 
            (url)=>
            {
                if(url==null)
                    message.reply("couldn't find shit.");
                else
                    message.reply(url);
            });
        }
        catch(err)
        {
        message.reply("couldn't find shit.");
        }
    }
}


function randomNumber(top)
{
    return Math.floor((Math.random() * top) + 1);
}

module.exports=search;