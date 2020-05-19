import Discord from 'discord.js';

// TODO: implements dotenv/someother env loader to place tokens and some other information
import { prefix, token } from './config.js';

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Hackerspace MMU never dies!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const [commandName, ...args] = message.content.slice(prefix.length).trim().split(' ');
	console.log(commandName, args);

	// TODO: refer the link below for filesystem based command loading
	// https://github.com/discordjs/guide/blob/master/code-samples/command-handling/adding-features/12/index.js
	if (commandName === 'hacktrack') {
		const response = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.addFields(
				{ name: 'URL', value: 'http://hacktrackmmu.herokuapp.com' },
				{ name: 'Password', value: 'some password that you wont know' },
			);
		message.channel.send(response);
	}
	// TODO: write a generator to generate command files
});

client.login(token);
