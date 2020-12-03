exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: 'Painel de ajuda' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Musica', value: '`play`, `pause`, `resume`, `queue`, `skip`, `stop`' }
            ],
            timestamp: new Date(),
        },
    });

};

