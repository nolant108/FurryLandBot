require('discord-reply');
const { verify } = require('crypto');
const { WelcomeChannel } = require('discord.js');
const Discord = require('discord.js');
const { MessageEmbed, member, message, embed, guild, Guild, channel, interaction } = require('discord.js');
const fs = require('fs');
const db = require('quick.db')
const { fileURLToPath } = require('url');
const config = require("./config.json");
const { MessageCollector } = require("discord.js-collector");


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


client.on('guildMemberAdd', async(member) => {

   const welcomeChannel = member.guild.channels.cache.find(c => c.id === '948283596987334777');
   const VeriRole = member.guild.roles.cache.find(r => r.id === '919411731300745247'); //Verified
   const addRole = member.guild.roles.cache.find(r => r.id === '948282862531145729'); //Not Verified

   member.send(`Welcome to FurryLand!, ${member}!  
   \n Im Iris the OC of the server! If you need any help please use !help
   \n Here are the rules: 
   \n • No spamming in chats - This includes but is not limited to, loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message • Do not make fun of, or bully guests/embers of the server. - Keeping a friendly, fun environment is enjoyable for all guests! • No advertising other servers or organizations. • Sharing of personal information (like passwords) or doxing is prohibited. 
   \n • Don't post NSFW/offensive/harmful content. • Use the appropriate channels and abide by their descriptions. • Please avoid using offensive or vulgar language • Do not ping staff members or executives constantly or for no reason
   \n • Respect all staff member decisions, although if you feel like a staff member is abusing their power - contact a Admin. • If a post or rule is in question, contact a Admin/Manager and they will make the final judgement. • Be respectful to one another and do not cause drama. • Breaking these rules could result in a kick, ban, or mute. Follow these rules and have fun!! 
   \n\n To get verified, head to <#948283596987334777>`);


   welcomeChannel.send(`Welcome to FurryLand!, ${member}! 
    \n Im Iris the OC of the server! If you need any help please use !help
    \n Here are the rules: 
    \n • No spamming in chats - This includes but is not limited to, loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message • Do not make fun of, or bully guests/embers of the server. - Keeping a friendly, fun environment is enjoyable for all guests! • No advertising other servers or organizations. • Sharing of personal information (like passwords) or doxing is prohibited. 
    \n • Don't post NSFW/offensive/harmful content. • Use the appropriate channels and abide by their descriptions. • Please avoid using offensive or vulgar language • Do not ping staff members or executives constantly or for no reason
    \n • Respect all staff member decisions, although if you feel like a staff member is abusing their power - contact a Admin. • If a post or rule is in question, contact a Admin/Manager and they will make the final judgement. • Be respectful to one another and do not cause drama. • Breaking these rules could result in a kick, ban, or mute. Follow these rules and have fun!! 
    \n\n`);

        let r2 = Math.floor((Math.random() * 98) + 1);
       
       const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       const alphabet2 = "abcdefghijklmnopqrstuvwxyz"
       
       let r1 =  alphabet[Math.floor(Math.random() * alphabet.length)]
       
       let r5 =  alphabet[Math.floor(Math.random() * alphabet.length)]
       
       let r3 = alphabet2[Math.floor(Math.random() * alphabet2.length)]
       
       let r4 = Math.floor((Math.random() * 80) + 1);
       
              


       member.roles.add(addRole);

       const filter = m => m.content.includes(result);

       const collector = welcomeChannel.createMessageCollector({time: 300000}); //300000
       welcomeChannel.send(`${member}, Type the same code below within 5 minutes in this channel to verify!\n\n\`\`\`${r1}${r2}${r3}${r4}${r5}\`\`\``);

       collector.on('collect', m => {
        let result = (`${r1}${r2}${r3}${r4}${r5}`)

        if(m.content === result) { 
            //console.log(m.content)
            member.send(`${member}, Thank You! \n\n Your are now verified! Have Fun!`)
                    member.roles.remove(addRole);
                    member.roles.add(VeriRole);
        } 

        
        });



});

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 

//CMD Handler & Runner 
client.on('messageCreate', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
 
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'dog'){
        client.commands.get('dog').execute(message, args);
    } 

    if(command === 'cat'){
        client.commands.get('cat').execute(message, args);
    } 

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
    if(command === 'captcha'){
        client.commands.get('captcha').execute(message, args);
    } 
});

client.login(config.token);