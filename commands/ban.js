const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão para usar esse comando!");
    if(args.length === 0) return message.reply("Utilize p!ban <@usuário> <motivo>!");
    let banMember = message.mentions.users.first() || message.guild.users.get(args[0]);
    if(!banMember) return message.reply("Não foi possível encontrar este usuário!");
    let banReason = args.join(" ").slice(22) || args.slice(1).join(" ");
    if(!banReason){
        banReason = "A razão não foi informada!"
    }

    try {
        message.guild.member(banMember).ban(banReason);
        message.channel.send(`O usuário ${banMember} foi **banido** com sucesso pelo **motivo**: ${banReason}`);
    } catch (error) {
        message.reply(`${error}`);
    }
}

exports.help = {
    name: "ban",
    description: "Bana algum usuarrio",
    usage: "ban @usuario Motivo"
}