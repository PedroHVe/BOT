module.exports = async (client) => {

    console.log(`A loli ta no ${client.guilds.cache.size} servidores , com um total de ${client.users.cache.size} usuários `);

    client.user.setActivity(client.config.game);

};
