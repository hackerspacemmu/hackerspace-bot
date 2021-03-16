import { role } from '../../config.js';

const adminonly = {
  name: 'adminonly',
  description: '',
  aliases: ['adminonly'],
  usage: '[adminonly]',
  permission: [role.admin],
  execute(message, command, args) {
    message.channel.send((args.length) ? args.join(' ') : 'No arg');
  },
};

export default adminonly;
