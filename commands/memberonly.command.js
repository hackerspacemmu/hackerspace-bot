import { role } from '../config.js';

const memberonly = {
  name: 'memberonly',
  description: '',
  aliases: ['memberonly'],
  usage: '[memberonly]',
  permission: [role.member],
  execute(message, args) {
    message.channel.send((args.length)? args.join(' ') : 'No arg');
  },
};

export default memberonly;
