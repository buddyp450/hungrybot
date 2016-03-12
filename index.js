'use strict';
const Botkit = require('botkit');
const controller = Botkit.slackbot({});
const token = require('./bots/examplebot');

const examplebot = controller.spawn(token);

examplebot.startRTM((err, bot, payload) => {
    if (err) {
        console.error(err);
    } else {
        //console.log(bot, payload);
    }
});

controller.hears(['.*lunch.*[?]'], ['ambient'], (bot, message) => {
    examplebot.reply(message, 'I hear you');
});
