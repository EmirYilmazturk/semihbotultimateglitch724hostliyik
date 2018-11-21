const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    var figlet = require('figlet');
    figlet(args.join(' '), function (err, data) {
      if (err) {
        console.log('Bir şeyler yanlış gitti...');
        console.dir(err);
        return;
      }
      message.delete()
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('İşte Ascii Yazınız')
      .setDescription('```fix\n' + data + '\n```')
      .setFooter('SemihBOT Ultimate', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};