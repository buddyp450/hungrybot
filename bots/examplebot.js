'use strict';
const slackbot = require('botkit').Botkit.slackbot({});
const examplebot = slackbot.spawn({
    token: 'xoxb-26380817109-X671YspgJ7nDdtx5eOp1ljIA',
});

module.exports = examplebot;
