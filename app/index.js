const Builder = require('botbuilder');
const restify = require('restify');
const config = require('./config')
const logger = require('simple-node-logger').createSimpleLogger();

let SERVICE_PORT = config.service.port || 3000;

const dialogs = require('./dialogs');
const connector = new Builder.ChatConnector({
    appId: config.appId,
    appSecret: config.appSecret
});

const bot = new Builder.UniversalBot(connector);

bot.dialog('/info', dialogs.info);
bot.dialog('/rules', dialogs.rules);
bot.dialog('/create', dialogs.create);
bot.dialog('/delete', dialogs.delete);
bot.dialog('/request', dialogs.request);
bot.dialog('/register', dialogs.register);
bot.dialog('/balance', dialogs.balance);

const server = restify.createServer();
server.post('/api/messages', connector.listen());

server.listen(SERVICE_PORT, () => {
    logger.info(`Bot service runing at http://localhost:${SERVICE_PORT}`);
});