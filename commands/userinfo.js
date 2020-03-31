const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

module.exports.run = async (client, message, args) => {

var member = message.member;
    let bbUser = message.mentions.members.first();
    if(bbUser) {
        let guilda = await message.guild.fetchMembers();
        member = guilda.members.get(bbUser.id);
    } else {
        bbUser = message.member;
    }

    let status;
  if(bbUser.presence.status === "online") status = `Online`
  if(bbUser.presence.status === "dnd") status = `Ausente`
  if(bbUser.presence.status === "idle") status = `Ocupado`
  if(bbUser.presence.status === "offline") status = `Offline`

    let embed = new Discord.RichEmbed()
    .setDescription(`Nome: **${bbUser.user.tag}**\n` +
    `ID: **${bbUser.id}**\n` +
    `Apelido: ${bbUser.nickname ? `${bbUser.nickname}` : "**Nenhum**"} \n` +
    `Jogando: ${bbUser.presence.game ? `**${bbUser.presence.game.name}**` : "**Nada**"}, **${status}**\n` +
    `Conta criada à: **\`${moment().diff(bbUser.user.createdAt, "days")} dias\`**\n` +
    `Está à: **\`${moment().diff(member.joinedAt, "days")} dias no servidor\`**\n` +
    `Cargos: ${member.roles.map(r => r).join(", ").replace("@everyone, ", "")}`)
    .setThumbnail(bbUser.user.displayAvatarURL)
    .setColor("RANDOM").setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo",
    description: "Informações sobre um usuario",
    usage: "userinfo @Usuario"
}