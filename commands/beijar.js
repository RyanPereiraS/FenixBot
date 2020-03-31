const Discord = require("discord.js")

exports.run = (client, message, args) => {
let user = message.mentions.users.first();
  if(!user) return message.channel.send('Você precisa mencionar alguém para beijar!');
  let embed = new Discord.RichEmbed()
    .setColor('04ff00')
    .addField(`${message.author.username} deu um beijo no(a) ${user.username}`, `${message.author.username} + ${user.username} é um belo casal?`)
    .setImage(`https://media.giphy.com/media/1BcfiGlOGXzQ5xU4DA/giphy.gif`)   
message.channel.send(embed)
}
exports.help = {
    name: "beijar",
    description: "Beije algum usuario",
    usage: "beijar @usuario"
}