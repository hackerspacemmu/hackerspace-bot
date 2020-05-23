export const load = (command_files, client) => {
  command_files.map(async command_file => {
    let {default: command} = await import(`./commands/${command_file}`);
    client.commands.set(command.name, command);
  });
};
