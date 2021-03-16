import fs from 'fs';
import Discord from 'discord.js';

// TODO: implements dotenv/someother env loader to place tokens and some other information
import { prefix, token } from '../config.js';
import { load } from '../utils.js';

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
  console.log('Hackerspace MMU never dies!');
});

const command_files = fs.readdirSync('./bot/commands').filter(file => file.endsWith('.command.js'));
load(command_files, client);


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const [commandName, ...args] = message.content.slice(prefix.length).trim().split(' ');
  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    console.log(`${message.author.username} calls ${commandName} with ${args.length ? args : 'no_args'}`);
    if (!command.permission || message.member.roles.cache.find(r => command.permission.includes(r.id))) {
      command.execute(message, commandName, args);
    } else {
      message.channel.send('<@' + message.author.id + '> ,you are not allow to do that.');
    }
  } catch (error) {
    console.error(error);
    // TODO : handle custom raise error to remove all the failing case if else.
    client.users.fetch(process.env.OWNER_ID).then(_owner => {
      // TODO : disable until we have role for hackybot dev for group mention
      // message.channel.send('Something went wrong! We have already notify <@' + owner.id + '>, please be patient.');
      message.channel.send('Something went wrong! We have already notify admin, please be patient.');
    });
  }
  // TODO: write a generator to generate command files
});
client.login(token);
