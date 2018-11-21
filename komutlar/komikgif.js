const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", "https://media.giphy.com/media/ASzK5wWjMtc6A/giphy.gif", "https://www.speakgif.com/wp-content/uploads/2016/02/donald-trump-funny-face-animated-gif.gif", "http://bestanimations.com/Animals/Birds/Chickens/funny-chicken-beats-cat-gif.gif", "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", "https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif", "https://media.giphy.com/media/26tP3M3i03hoIYL6M/giphy.gif", "https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif", "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif", "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'komikgif',
  description: 'Rastgele Komik Gif Atar.',
  usage: 'komikgif'
};
