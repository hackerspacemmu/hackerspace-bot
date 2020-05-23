export const load = (commandFiles, client) => {
	commandFiles.map(async commandFile => {
		let {default: command} = await import(`./commands/${commandFile}`);
		client.commands.set(command.name, command);
	});
};
