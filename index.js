const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === (`${prefix}ping`))
	{
		message.channel.send("pong");
	}
});
client.login('NzU2MjYzMDc1MDEwNTc2NDU2.X2PS3w.JVMxO54HAK-GSEIWPSj4faepdGs');