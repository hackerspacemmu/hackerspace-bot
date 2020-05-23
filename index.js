import fs from 'fs';
import Discord from 'discord.js';

// TODO: implements dotenv/someother env loader to place tokens and some other information
import { prefix, token } from './config.js';
import { load } from './utils.js';

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
  console.log('Hackerspace MMU never dies!');
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.command.js'));
load(commandFiles, client);


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const [commandName, ...args] = message.content.slice(prefix.length).trim().split(' ');
  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    console.log(`${message.author.username} calls ${commandName} with ${args.length ? args : 'no_args'}`);
    command.execute(message, args);
  }
  catch (error) {
    console.error(error);
    client.users.fetch(process.env.OWNER_ID).then(_owner => {
      // disable until we have role for hackybot dev for group mention
      // message.channel.send('Something went wrong! We have already notify <@' + owner.id + '>, please be patient.');
      message.channel.send('Something went wrong! We have already notify admin, please be patient.');
    });
  }
});

client.login(token);
