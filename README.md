# skeleton
## Experimental Multi-purpose Discord bot made in Node.js for learning purposes.

**Current "features":**

1- Prunes messages with `.limpe [arg]` where  `arg` is the number of posts you want deleted. 

2- Picks and plays random Tiny Tim singles (or whichever 6 tracks declared as such) with
`yo play` on a statically defined channel in botCommands.js 
intermittently until told to leave with `alright fuck off`.

New Features:
* e621/gelbooru search
* Shows avatars from users in the server on request
* google image search (requires your own google API key for custom search + identifier)
* Portuguese speaking Cleverbot / Cleverbot em português

Audio can be adjusted with messages that start with the following indexes:

```
yo play       //plays a different tune
yo hold up     //Pauses the Audio Stream.
yo chill     //Pauses the Audio Stream.
alright go    //Resumes the Audio Stream.
yo go       //Resumes the Audio Stream.
yo turn it up      //Raises the volume by 50%.
alright turn it up       //Raises the volume by 50%.
yo turn it down      //Lowers the volume by 25%.
alright turn it down       //Lowers the volume by 25%.
alright fuck off       //Ends the Stream and leaves.
yo skrillex      //Raises the volume by 200%.
yo turn it all the way down       //lowers the volume to 25% of the original value.
alright turn it all the way down      //lowers the volume to 25% of the original value.
```
Standard commands are as following:

```
.avatar [usermention] // pastes a link to the mentioned user's avatar
.e621 [tags] //pastes a link to a random result on e621 containing the tags.  tags are separated by spaces and multiple-word tags are linked with underline. example: .e621 holding_hands rating:safe
.gelbooru [tags]//pastes a link to a random result on gelbooru containing the tags
.limpe [argument] // wipes a number of messages in the argument + the request itself.
.gi [tag] // searches google images and pastes random result
.g1 [tag] // searches google images and pastes the first result
[nickname] ? //Communicates with Cleverbot when you say its nickname or is mentioned. The memory is wiped in around 10 seconds of inactivity.
```


3- Is now a creep and echoes every message into console along with alerting when it's going to play a song. Also can read Direct Messages (PMs) and the `[nickname] ?` command can be utilized in a direct message channel

## Audio streaming requires ffmpeg (https://ffmpeg.org/) in the target folder or in cmd PATH.

To do: 

* Identify voice channels randomly.
* Have it stream off Youtube.
* Set permissions so not anybody can turn off your Tiny Tim mix or adjust the volume to under 300% without being allowed to.
* Make Command parsing less/not retarded.
* Make an audio queue system so it can be more aware of what it is going to do, and less ghetto of course.
* Make volume adjustable with parameters
* ~~Fix Listener calls for audio commands causing a memory leak in musicCommands.js~~ :heavy_check_mark:
* ~~Have audio commands identify which server they are coming from and not change volume globally, lmao~~ :heavy_check_mark:
* Rewrite Everything to less dumb degrees



Features to Implement:
* Levelling system along with custom charts (Databases)
* Content Aware Scaling image processing
* ~~Cleverbot chats~~ :heavy_check_mark:
* Standard google searches
* Throw parties in voice channels according to local/set time.
* Possibly invite more skeletons for said parties
* Englobe 90% of the things it says with the Microsoft YaHei font, implicitly



Resources used:

*Node.js v7.4.0 (https://nodejs.org/en/)

*discord.js (https://discord.js.org)

*ffmpeg (https://ffmpeg.org/)

*node-opus (https://www.npmjs.com/package/node-opus)

*google-images (https://www.npmjs.com/package/google-images#set-up-google-custom-search-engine)

*e621 (https://www.npmjs.com/package/e621)

*booru-getter (https://www.npmjs.com/package/booru-getter) - The module was edited to return null when getting 0 results

*cleverbot-node (https://www.npmjs.com/package/cleverbot-node)

*google-translate (https://www.npmjs.com/package/google-translate-api)
