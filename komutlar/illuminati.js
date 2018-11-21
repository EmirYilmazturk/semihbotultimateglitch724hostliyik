var Jimp = require('jimp');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://cdn.discordapp.com/attachments/490575083824218122/503570534118850591/Illuminati.png", (err, avatar) => {
                avatar.resize(295, 270)
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
  name: 'illuminati',
  description: 'Avatarınıza İlluminati Efekti Verir',
  usage: 'illuminati'
};