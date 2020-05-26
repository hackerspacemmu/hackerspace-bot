import { role } from '../config.js';

const memberonly = {
  name: 'memberonly',
  description: '',
  aliases: ['memberonly'],
  usage: '[memberonly]',
  permission: [role.member],
  execute(message, command, args) {
    message.channel.send((args.length) ? args.join(' ') : 'No arg');
  },
};

export default memberonly;
