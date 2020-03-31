const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (Robin, message, args) => {
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/woof`);
    
    var embed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor('36393e')
    .setTimestamp(new Date())
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "cao",
    description: "Veja fotos de Cachorinhos",
    usage: "cao"
}