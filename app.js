const Discord = require('discord.js');
const client = new Discord.Client();
const Pokemon = require('pokemon.js');

Pokemon.setLanguage('english');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
  if (msg.content === 'charmander') {
    Pokemon.getSprites('charmander').then(function(pika){
        msg.channel.send(pika.versions['generation-i']['red-blue'].front_default)
    });
  }
  if (msg.content === 'test') {
    Pokemon.getSprites('Pikachu').then(function(pika){
        msg.channel.send(pika.versions['generation-v']['black-white'].animated.front_default)
    });
  }
});

client.login('ODMxODczODY3MTcyOTM3NzM5.YHbk6Q.TJ8yESp-E9GbJ6Aa0bwA0eBzp-c');