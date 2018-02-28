const {WebClient} = require('@slack/client');
const debug = require('debug')('pp-slack-bot');

/**
 * Send an annouce to Slack channel
 * @param {Object} config Configuration to send annouce
 * @param {string} config.token Bot User OAuth Access Token 
 * @param {string} config.channel Channel to send annouce
 * @param {Object} config.annouce Available annouce
 * @param {string} annouceName Annouce to send (must be present in config.annouce)
 */
module.exports = async (config, annouceName) => {
    debug(`Send annouce ${annouceName} to #${config.channel}`);
    const web = new WebClient(config.token);
    try {
        const resp = await web.channels.list();
        const channelId = resp.channels
            .filter(cha => cha.name === config.channel)
            .map(cha => cha.id)
            .reduce(cha => cha);
        await web.chat.postMessage(channelId, '', {
                attachments: [
                    {...config.announce[annouceName]}
                ]
            }
        );
        debug(`Annouce ${annouceName} is send to #${config.channel}`);
    } catch(e) {
        debug(e);
        console.warn(e);
    }
};
