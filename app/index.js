const Builder = require('botbuilder');
const restify = require('restify');
const config = require('./config')

const connector = new Builder.ChatConnector({
    appId: config.appId,
    appSecret: config.appSecret
})