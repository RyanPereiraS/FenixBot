const Discord = require("discord.js");
const moment = require ("moment");
moment.locale('pt-BR');

module.exports.run = async (bot, message, args) => {

  var guild = message.guild;
  if (args[0]) {
    guild = client.guilds.get(args[0]);
    if (!guild) {
      message.channel.send(`Eu só pego informações desse servidor use o comando: p!serverinfo`)
      return 0;
    }
  }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informações do servidor")
    .setColor("RANDOM").setTimestamp()
    .setThumbnail(sicon)
    .addField("Nome do servidor :trophy: ", message.guild.name)
    .addField("Criado em :clock1030: ", moment(guild.createdAt).format("LL"))
    .addField("Você entrou em :rocket: ", moment(guild.joinedAt).format("LL"))
    .addField("Membros :man_in_tuxedo: ", message.guild.memberCount)
    .addField("Maquinas:robot: ", `${message.guild.members.filter(m => m.user.bot).size}`)

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo",
  description: "Informações sobre o servidor",
  usage:"serverinfo"
}