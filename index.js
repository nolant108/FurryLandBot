const Discord = require('discord.js');
const config = require("./config.json");


const client = new Discord.Client({

    intents: [

        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_EMOJIS_AND_STICKERS",
        "DIRECT_MESSAGES",
        "GUILD_MESSAGE_REACTIONS"

    ]

})

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}`)

    client.user.setStatus('online')
    client.user.setActivity( {
        name: '!help | Im like a stuffed animal... Who came to life!'
    
    });
})




client.login(config.token);