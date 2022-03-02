const { default: axios } = require('axios');
const { Discord, message, member } = require('discord.js');
var fs = require('fs');

module.exports = {
    name: 'dog',
    description: 'Random dog img display',
    execute(message, args, async) {


        axios
        .get('https://api.thedogapi.com/v1/images/search')
        .then((res) => {

            message.reply(res.data[0].url)

        })
 }

};