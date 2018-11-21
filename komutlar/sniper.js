var Jimp = require('jimp');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(290, 290)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("http://pngimg.com/uploads/scope/scope_PNG13054.png", (err, avatar) => {
                avatar.resize(310, 295)
                image.composite(avatar, 4, 0).write(`./img/wasted/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/wasted/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sniper',
  description: 'Avatarınıza Sniper Efekti Verir',
  usage: 'sniper'
};