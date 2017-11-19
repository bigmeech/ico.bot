const Builder = require('botbuilder');
const restify = require('restify');
const config = require('./config')
const logger = require('simple-node-logger').createSimpleLogger();
const server = restify.createServer();
const SERVICE_PORT = config.service.port || 3000;

const dialogs = require('./dialogs');
const connector = new Builder.ChatConnector({
    appId: config.appId,
    appSecret: config.appSecret
});

const bot = new Builder.UniversalBot(connector);

bot.dialog('/help', dialogs.help.bind(bot)).triggerAction({ matches: /^help$/i });
bot.dialog('/rules', dialogs.rules.bind(bot)).triggerAction({ matches : /^rules$/i });
bot.dialog('/create', dialogs.create.bind(bot)).triggerAction({ matches: /^create$/i });
bot.dialog('/delete', dialogs.delete.bind(bot)).triggerAction({ matches: /^delete$/i });
bot.dialog('/balance', dialogs.balance.bind(bot)).triggerAction({ matches: /^balance$/i });
bot.dialog('/request', dialogs.request.bind(bot)).triggerAction({ matches: /^request$/i });
bot.dialog('/info', dialogs.info.bind(bot)).triggerAction({ matches: /^info$/i });
bot.dialog('/register', dialogs.register.bind(bot)).triggerAction({ matches: /^register$/i });

server.post('/api/messages', connector.listen());
server.get('/health', (req, res, next) => {
    return res.json({ message: 'ok' });
});
server.listen(SERVICE_PORT, () => {
    logger.info(`Bot service runing at http://localhost:${SERVICE_PORT}`);
});