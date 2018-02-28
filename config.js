module.exports = {
    token: 'SLACK_TOKEN',
    channel: 'manger',
    announce: {
        countDown: {
                "color": "#36a64f",
                "title": "Commande PP",
                "title_link": "http://pp-order.app/",
                "text": "<!channel> Il reste 15 minutes avant la fin de la commande",
                "fields": [
                    {
                        "title": "Commande acceptés :",
                        "value": "Mathieu Geissler, Henry Bert",
                        short: true
                    }
                ]
        }
    }
};
