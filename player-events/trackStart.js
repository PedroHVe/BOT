module.exports = (client, message, track) => {

    message.channel.send(`${client.emotes.music} - agora tocando ${track.title} :) ${message.member.voice.channel.name} ...`);

};