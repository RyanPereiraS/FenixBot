const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    
    var user = message.mentions.users.first();

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
          }
    });

    var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .setTitle(`Nick : ${user.tag}`)
    .addField("♡Membros Recrutados♡ :", `\`\`\`md\n# ${invitesUses} Membros\`\`\``)
    .setColor('RANDOM')
    .setFooter(`ID : ${user.id}`)
    .setTimestamp();

    message.channel.send(embed).then(msg => msg.delete(25000));
};
module.exports.help = {
    name: "divulgador",
    description: "Veja quantos usuarios você recrutou para o servidor",
    usage: "divulgador @Usuario"
}