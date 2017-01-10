# skeleton
##Low-quality, multi-purpose Discord bot made in Node.js for learning purposes.

Current "features":

1- Prunes messages with `yo clean`. It really couldn't care less at the moment so it just deletes them in bulk (100). 

2- Picks and plays random Tiny Tim singles (or whichever 6 tracks you'd like) with
`yo play` on a statically defined channel in botCommands.js 
intermittently until told to leave with `alright fuck off`.


Audio can be adjusted with the following:

```
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

##Audio streaming requires ffmpeg (https://ffmpeg.org/) in the target folder.

To do: 

* Identify voice channels and join them. Either by request or randomly.
* Have it stream off Youtube.
* Set permissions so not anybody can turn off your Tiny Tim mix or adjust the volume to under 300% without being allowed to.
* Make Command parsing less/not retarded.


Features to Implement:
* Content Aware Scaling images
* Cleverbot 
* Throw parties in voice channels according to local/set time.






Resources used:

Node.js v7.4.0 (https://nodejs.org/en/)

discord.js (https://discord.js.org)

ffmpeg (https://ffmpeg.org/)

node-opus (https://www.npmjs.com/package/node-opus)
