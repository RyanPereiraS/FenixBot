const Discord = require('discord.js');

module.exports.run = async (Robin, message , args) => {

if (message.author.id != "416958878467620865") return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Comando disponivel apenas para o developer`); 
    

let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Você esqueçeu de **mencionar** o membro que deseja kickar!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Você se esqueceu de colocar a **razão**!`);

message.guild.member(usuario).kick(razao)

return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, o usuario **${usuario.username}** foi kickado com sucesso! pelo desenvolvedor`);

}





module.exports.help = {
  name: "dkick",
  description:"Comando disponivel apenas para o developer",
  usage:"kick @Usuário"
}