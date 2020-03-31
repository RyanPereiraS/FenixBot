const Discord = require("discord.js");
const math = require('mathjs');

exports.run = (client, message, args) => {
    let input = args.join(" ");
    if (!input) {
        message.reply('**Você deve fornecer uma equação a ser resolvida na calculadora!**');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Questão invalida** ${err}`);
    }

    let embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/513130436780752896/539028206548942869/Calculator_5122x.png")
        .setColor("#7A1B17")
        .addField("**Questão:**", question, true)
        .addField("**Resposta:**", answer);
        message.channel.send(embed)
}

module.exports.help = {
    name: "calc",
    description: "Resolva equações matemáticas",
    usage: "calc 2 + 2"
    }