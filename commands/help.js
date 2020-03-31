/**
 * O Comando Help envia uma mensagem de ajuda.
 * Cotendo comandos e outras informações.
 */

module.exports = {
    run: (client, message, args) => {
      /** Objeto embed que irá ser enviado. */
      let embed = {
        color: 0xB1103C,
        title: 'Lista de Comandos Fênix Bot',
        url: 'https://discordapp.com/oauth2/authorize?client_id=507628218644430849&scope=bot&permissions=8',
        description: 'Todos os comandos disponíveis',
        footer: {
          text: 'Todos direitos reservados ® 2019, Fênix Bot, [Dev]UmGamer_.'
        },
        fields: []
      }
  
      /** Laço de repetição em todos os comandos
       * A cada comando é adicionado as informações em um object na array fields[]
       */
      client.commands.forEach(command => {
        embed.fields.push(
          {
            name: `**${process.env.PREFIX}${command.help.name}**`,
            value: `**Descrição**: ${command.help.description}\n**Como Usar**: ${process.env.PREFIX}${command.help.usage}`
          }
        )
      })
  
      /** Então envia a mensagem embed para o usuario. */
      message.author.send({ embed: embed })
        .then(() => message.react('👌'))
        .catch(() => message.reply('Desculpe, mas eu não tenho permissões para enviar mensagens por DM para você!'))
    },
  
    conf: {},
  
    help: {
      name: 'help',
      category: 'Help',
      description: 'Mostra todos os comandos disponíveis do bot.',
      usage: 'help'
    }
  }