const { default: axios} = require('axios');
const { Discord, message, member } = require('discord.js');

module.exports = {
    name: 'cat',
    description: 'Cat Image API',
    execute(message) {


        axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res) => {

            message.reply(res.data[0].url)

        })

    }
};