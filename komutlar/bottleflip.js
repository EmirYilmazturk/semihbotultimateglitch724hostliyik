const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Şişeyi Attın Bekliyoruz . . .').then(message => {
   var espriler = ['**Ooo Bottle Flip Yaptın :dark_sunglasses:**' ,'**Eyvaah Camı Kırdın Annen Seni Dövmeye Geliyo Kaç Kaç :scream:**' ,'**Eyvah! Şişe Annenin Kafasına Çarptı Ve Bayıldı. :mask:**' ,'**Şişe Camdan Sizin Arabanın Camına Uçtu Babanda Arabadaydı ! Vay Haline Karşim :right_facing_fist: :smiley:**' ,'**Bottle Flip Yapamadın :no_entry_sign:**' ,'**Evde Şişe Kalmamış Aq :no_entry_sign:**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şişe at', 'şişeat', 'ŞİŞE AT', 'ŞİŞEAT'],
  permLevel: 0
};

exports.help = {
  name: 'bottleflip',
  description: 'Şişe Atarsınız',
  usage: 'bottleflip'
};