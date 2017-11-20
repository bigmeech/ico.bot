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


bot.dialog('/info', dialogs.info.bind(bot)).triggerAction({ matches: /^info$/i });
bot.dialog('/register', dialogs.register.bind(bot)).triggerAction({ matches : /^register$/i });
bot.dialog('/purchase', dialogs.purchase.bind(bot)).triggerAction({ matches: /^purchase$/i });
bot.dialog('/topup', dialogs.topup.bind(bot)).triggerAction({ matches: /^topup$/i });
bot.dialog('/balance', dialogs.balance.bind(bot)).triggerAction({ matches: /^balance$/i });
bot.dialog('/transfer', dialogs.transfer.bind(bot)).triggerAction({ matches: /^transfer$/i });
bot.dialog('/help', dialogs.help.bind(bot)).triggerAction({ matches: /^help$/i });

// unrecognised
bot.dialog('/*', (session) => {
    session.endDialog('i do not know what you speak off');
}).triggerAction({ matches: /(\w+|\W+|\s+|\S+)/i });

server.post('/api/messages', connector.listen());
server.get('/health', (req, res, next) => {
    return res.json({ message: 'ok' });
});
server.listen(SERVICE_PORT, () => {
    logger.info(`Bot service runing at http://localhost:${SERVICE_PORT}`);
});