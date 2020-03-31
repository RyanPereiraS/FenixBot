const Discord = require("discord.js");

exports.run = (client, message, args) => {
let emojis = message.guild.emojis.map(a => a).join(' ')
let servernome = message.guild.name
let servericone = message.guild.iconURL
let cor = '#ffffff'

let emojiembed = new Discord.RichEmbed()
.setColor(cor)
.setAuthor(`Emojis do Servidor - ${servernome}`, servericone)
.setDescription(`${emojis}`)

message.channel.send(emojiembed);
}
module.exports.help = {
    name: "emojis",
    description: "Veja todos os emojis do servidor",
    usage: "emojis"
  };