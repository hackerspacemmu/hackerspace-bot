import Discord from 'discord.js';

const issue = {
  name: 'issue',
  description: '',
  aliases: ['issue', 'bug', 'feature'],
  usage: '[issue]',
  execute(message, command, args) {
    // logic and args parsing here
    // considering a post request in the future
    args = args ? args : 'Feature request';
    const template = () => {
      switch(command) {
      case 'feature':
        return 'feature_request.md';
      case 'bug':
        return 'bug_report.md';
      default:
        return '';
      }
    };
    const url = `https://github.com/hackerspacemmu/hackerspace-bot/issues/new?assignees=&labels=&template=${template()}&title=${args.join('+')}`;
    const response = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`[${command.toUpperCase()}] ${args.join(' ')}`)
      .setURL(url)
      .setDescription('Click the link above to create an issue, we will take a look at it shortly');
    message.channel.send(response);
  },
};

export default issue;
