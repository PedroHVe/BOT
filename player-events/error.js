module.exports = (client, error, message) => {

    switch (error) {
        case 'não está tocando':
            message.channel.send(`${client.emotes.error} - Não há música sendo reproduzida neste servidor!`);
            break;
        case 'não está conectanda':
            message.channel.send(`${client.emotes.error} - Você não está conectado em nenhum canal de voz!`);
            break;
        case 'indisponível para ser juntar':
            message.channel.send(`${client.emotes.error} - Não consigo entrar no seu canal de voz, verifique minhas permissões!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} -             Algo deu errado ... Error: ${error}`);
    };

};
