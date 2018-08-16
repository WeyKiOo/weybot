const Discord = require("discord.js");

var PREFIX = "w!";

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("WeyBot, w!help");
    console.log ("Le bot a bien ete connecte")
});

bot.on("message", async function (message){
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split("");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("Test", {
            embed : {
                color: 0xFF0000
                author: message.author.name,
                title: "",
                fields: [{
                    name: "Lien permanent du discord",
                    value: "https://discord.gg/bpAcJ7d"
                    inline: false
                }],
                footer: {
                    footer: "Partagez le discord autour de vous",
                },
            }
        });
        break;
    }
})
bot.login("NDc5NjUxNTM0MjEzMzQ5NDA2.DlcY1Q.NJ1wbdUez3zupQWNq1zGjylz5I4);
