const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const ytdl = require("ytdl-core");

const client = new Discord.Client();

const queue = new Map();

client.once("ready", () => {
    console.log("Ready!");
});

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

client.on("message", async message => {
    if(message.content.startsWith(`${prefix}help`)){
        message.channel.send("Hoi ik ben Marco");
        message.channel.send(`Als je informatie ergens over nodig hebt vraag het dan gerust door ${prefix}ask en dan je vraag te stellen.`);
        message.channel.send(`Als je me nodig hebt roep dan marco. Ook bij het vragen gebruik je eerst marco en dan je vraag.`);
        message.channel.send(`Veelgestelde vragen zijn: hoe gaat het? en wat is het weer?`);
    }

    if(message.content.startsWith(`marco`) || message.content.startsWith(`Marco`)){
        message.reply("Dat is mijn naam?");

        if(message.content.includes(`hoe gaat het?`)){
            message.reply("Hhm ja goed denk ik");
        }

        if(message.content.includes(`wat is het weer?`)){
            message.reply("Kijk op https://google.com");
        }

        if(message.content.includes(`spam`)){
            for (let index = 0; index < 100; index++) {
                message.channel.send(`Jammer joh`);
            }
        }
    }
});

client.login(token);
