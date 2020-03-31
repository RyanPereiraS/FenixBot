const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {

    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("insira sua sugestão.")

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM").setTimestamp()
        .addField("**Sugestão**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.name === "sugestões");
    if (!canal) return message.reply("não existe nenhum canal para enviar a sua sugestão. crie o canal com o nome: sugestões");

    message.delete();
    canal.send(embed).then(msg => msg.react("EMOJI SIM").then(r => msg.react("EMOJI NÃO")));
    message.reply(`sua sugestão foi enviada com sucesso!`);
}

module.exports.help = {
    name: "sugestao",
    description: "Entre no servidor do bot e use p!sugestao (sugestão)",
    usage: "sugestao"
}