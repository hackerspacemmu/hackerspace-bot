export const load = (commandFiles, client) => {
	commandFiles.map(async commandFile => {
		let {default: command} = await import(`./commands/${commandFile}`);
		console.log(command)
		client.commands.set(command.name, command);
	});
};