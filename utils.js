export const load = (command_files, client) => {
  command_files.map(async command_file => {
    let {default: command} = await import(`./commands/${command_file}`);
    client.commands.set(command.name, command);
  });
};

export const getUserFromMention = (message, mention) => {
  if (!mention) return;

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1);

    if (mention.startsWith('!')) {
      mention = mention.slice(1);
    }
    console.log(mention)
    return message.guild.members.cache.get(mention);
  }
}

export const getRoleFromMention= (message, mention) => {
  if (!mention) return;

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1);

    if (mention.startsWith('&')) {
      mention = mention.slice(1);
    }
    console.log(mention)
    return message.guild.roles.cache.get(mention);
  }
}
