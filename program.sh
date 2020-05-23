cat > ./commands/$1.command.js <<- EOM
const $1 = {
  name: '$1',
  description: '',
  aliases: ['$1'],
  usage: '[$1]',
  execute(message, args) {
    console.log(message, args);
    // logic and args parsing here
  },
};

export default $1;
EOM