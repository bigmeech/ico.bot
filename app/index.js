const Builder = require('botbuilder');
const restify = require('restify');
const config = require('./config')
const logger = require('simple-node-logger').createSimpleLogger();

const server = restify.createServer();
let SERVICE_PORT = config.service.port || 3000;

const dialogs = require('./dialogs');
const connector = new Builder.ChatConnector({
    appId: config.appId,
    appSecret: config.appSecret
});

const bot = new Builder.UniversalBot(connector);

bot.dialog('/info', dialogs.info.bind(bot)).triggerAction({
    matches: /^info$/i,
});

bot.dialog('/rules', dialogs.rules).triggerAction({ 
    matches : /^rules$/i
});

bot.dialog('/create', dialogs.create).triggerAction({
    matches: /^create$/i
});

bot.dialog('/delete', dialogs.delete).triggerAction({
    matches: /^delete$/i
});

bot.dialog('/request', dialogs.request).triggerAction({
    matches: /^request$/i
});

bot.dialog('/register', dialogs.register).triggerAction({
    matches: /^register$/i
});

bot.dialog('/balance', dialogs.balance).triggerAction({
    matches: /^balance$/i
});

bot.dialog('/help', dialogs.help).triggerAction({
    matches: /^help$/i
});

server.post('/api/messages', connector.listen());

server.listen(SERVICE_PORT, () => {
    logger.info(`Bot service runing at http://localhost:${SERVICE_PORT}`);
});