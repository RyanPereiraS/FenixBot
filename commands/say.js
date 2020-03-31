module.exports.run = async (Robin, message, args) => {
 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
}
module.exports.help = {
    name: "falar",
    description: "faça o bot falar algo"
}