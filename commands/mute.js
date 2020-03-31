const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let muteRole = message.guild.roles.find("name", "Mudo");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Quem você quer muta?`);
     else{
     member.addRole(muteRole);
     message.channel.send(`${member} foi mutado por ${message.author}`);
    }
  }
  module.exports.help = {
    name: "mute",
    description: "Mute um usuário \ Antes crie o cargo Mudo e remova a permição de enviar mensagens",
    usage: "mute @Usuario"
}