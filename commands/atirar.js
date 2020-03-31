const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    let user = message.guild.member(message.mentions.users.first());
    if(!user) return message.reply('Você precisa mencionar alguém para atirar!');
    if(user.user.id == message.author.id) return message.reply('Você não pode atirar em sí mesmo!');

    let aEmbed = new Discord.RichEmbed()

    .setTimestamp()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} deu um **TIRO** em: ${user.user.username} :gun:`)
    .setImage('https://media.giphy.com/media/137qIhWsIf9bDW/giphy.gif')
    .setTimestamp()

    try {
        message.delete();
        message.channel.send(aEmbed);
    }catch (error) {
        console.log(error);
        message.channel.send(error);
    }
}

exports.help = {
    name: "atirar",
    description: "Atire em algum usuário",
    usage: "atirar @usuario"
}