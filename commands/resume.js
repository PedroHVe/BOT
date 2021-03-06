exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -  Você não está em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando atualmente!`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - Musica ${client.player.getQueue(message).playing.title} **retomado** !`);

};
