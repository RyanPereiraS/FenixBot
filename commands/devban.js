const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if (message.author.id != "416958878467620865") return message.reply("Comando disponivel apenas para Developers!");
    if(args.length === 0) return message.reply("Utilize p!dban <@usuário> <motivo>!");
    let banMember = message.mentions.users.first() || message.guild.users.get(args[0]);
    if(!banMember) return message.reply("Não foi possível encontrar este usuário!");
    let banReason = args.join(" ").slice(22) || args.slice(1).join(" ");
    if(!banReason){
        banReason = "A razão não foi informada!"
    }

    try {
        message.guild.member(banMember).ban(banReason);
        message.channel.send(`O usuário ${banMember} foi **banido** com sucesso pelo **motivo**: ${banReason}\n **pelo** Developer do Bot`);
    } catch (error) {
        message.reply(`${error}`);
    }
}

exports.help = {
    name: "dban",
    description: "Developers Command",
    usage: "dban @usuario Motivo"
}