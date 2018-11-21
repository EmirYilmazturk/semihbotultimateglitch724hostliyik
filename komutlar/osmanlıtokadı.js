const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Tokat Atacağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + 'Sana Çok Fena Yapıştırdı :hand_splayed::hand_splayed:**')
		.setImage(`https://i2.wp.com/buzz-gibi.com/wp-content/uploads/2017/04/giphy-20.gif?w=1160&ssl=1`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'osmanlıtokadı',
  description: 'İstediğiniz Kişiye Osmanlı Tokadı Atarsınız.',
  usage: 'osmanlıtokadı'
};
