const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {

if(message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) {
    
if(message.guild.member(Robin.user.id).hasPermissions("KICK_MEMBERS")) {

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Você esqueçeu de **mencionar** o membro que deseja kickar!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Você se esqueceu de colocar a **razão**!`);

message.guild.member(usuario).kick(razao)

return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, o usuario **${usuario.username}** foi kickado com sucesso!`);

} else {
    message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Eu não tenho a permissão necessária para fazer isto. **KICK_MEMBERS**!`)
}

} else {
    return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, você não pode fazer isso :c!`);   
}

}

module.exports.help = {
  name: "kick",
  description:"Expulse algum usuário do servidor",
  usage:"kick @Usuário"
}