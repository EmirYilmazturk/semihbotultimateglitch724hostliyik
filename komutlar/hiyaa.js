const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öldüreceğini Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + '**Sana Fena Vurdu Kesin Bir Yerin Fena Halde Kırıldı')
		.setImage(`https://takumiwarrior.com/wp-content/uploads/2015/01/martial-arts-gif1.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hiyaa',
  description: 'İstediğiniz Kişiye Karate Yaparsınız.',
  usage: 'hiyaa'
};
