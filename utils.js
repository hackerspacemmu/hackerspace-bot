import { FOUL_WORDS } from './constants.js'

export const load = (commandFiles, client) => {
	commandFiles.map(async commandFile => {
		let {default: command} = await import(`./commands/${commandFile}`);
		client.commands.set(command.name, command);
	});
};

export const mind_your_language = (message) => {
	const { content } = message;
	const foul = FOUL_WORDS.some(foul_word=>content.toLowerCase().includes(foul_word));
	if (foul) message.reply('**Language!**');

	return true
}