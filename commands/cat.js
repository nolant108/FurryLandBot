const { default: axios} = require('axios');
const { Discord, message, member } = require('discord.js');
const JokeAPI = require('sv443-joke-api');
var fs = require('fs');

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