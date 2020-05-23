import Discord from 'discord.js';

const hacktrack = {
  name: 'hacktrack',
  description: 'shows hacktrack url and password',
  aliases: ['hacktrack'],
  usage: '[hacktrack]',
  execute(message, _args) {
    const response = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .addFields(
        { name: 'URL', value: 'http://hacktrackmmu.herokuapp.com' },
        { name: 'Password', value: process.env.HACKTRACK_PASSWORD },
      );
    message.channel.send(response);
  },
};

export default hacktrack;
