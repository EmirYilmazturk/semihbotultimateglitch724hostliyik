const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send(":white_check_mark: **Yeniden Başlıyorum Allahım Yinemi**").then(msg => {
        console.log(":white_check_mark: [BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};