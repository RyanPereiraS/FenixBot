const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete().catch(O_o=>{});
let bicon = client.user.displayAvatarURL;
    let string = '';
    client.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = client.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("**Servidores 🌟:**", string)
        .setTimestamp()
        .setFooter("Comando Requisitado por: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servidores",
    description: "Veja todo os servidores em que eu estou!",
    usage: "servidores"
    }