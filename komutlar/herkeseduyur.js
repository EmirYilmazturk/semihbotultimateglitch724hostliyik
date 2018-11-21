const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Rahatsýz Ettiðim Ýçin Çok Özür Diliyorum Fakat Beni Sunucuna Almak Ýstermisin Diye Soracaktým Ýþte Davet Linkim', 'https://discordapp.com/oauth2/authorize?client_id=484783968965623820&scope=bot&permissions=805314622')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birþey Yazmalýsýnýz');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullaniciya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  description: 'Mesajýnýzý botun bulunduðu sunucudaki insanlara duyurur. (BOT SAHÝBÝ ÖZEL)',
  name: 'herkeseduyur',
  usage: 'herkeseduyur [mesajýnýz]'
};