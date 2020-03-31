const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
    
    message.delete().catch(O_o=>{});
    var args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.reply("insira o seu anúncio.");
    const embed = new Discord.RichEmbed()
        .setTitle(`Anúncio`)
        .setColor('#0051FF')
        .setDescription(args)
        .setTimestamp()
        .setFooter(`Anúncio feito por: ${message.author.tag}`, `${message.author.avatarURL}`)

  message.channel.send(embed)
  message.channel.send('@everyone').then(msg => msg.delete(0));
}

module.exports.help = {
    name: "anuncio",
    description: "Faça o bot Anunciar algo!",
    usage: "anuncio + Anuncio"
}