const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');

exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
        let opponent = message.mentions.users.first()
        if (!opponent) return message.reply("**Oynamak İstediğin Kişiyi __Etiketlemelisin !__**")
  
  if (opponent.bot) return message.reply('Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('Kendin ile düello atamazsın!');
                if (this.fighting.has(message.channel.id)) return message.reply('**Kanal Başına Sadece Bir Düello Meydana Gelebilir !**');
                this.fighting.add(message.channel.id);
                try {
                        if (!opponent.bot) {
                await message.channel.send(`${opponent}, **Düello İsteği Geldi. Düello'yu Kabul Ediyormusun?** (\`evet\` Veya \`hayır\` **Olarak Cevap Veriniz.**)`);
                                const verification = await verify(message.channel, opponent);
                                if (!verification) {
                                        this.fighting.delete(message.channel.id);
                                        return message.channel.send(`**Düello Kabul Edilmedi ,Rakip Korkup Kaçtı !**`);
                                }
                        }
                        let userHP = 500;
                        let oppoHP = 500;
                        let userTurn = false;
                        let guard = false;
                        const reset = (changeGuard = true) => {
                                userTurn = !userTurn;
                                if (changeGuard && guard) guard = false;
                        };
                        const dealDamage = damage => {
                                if (userTurn) oppoHP -= damage;
                                else userHP -= damage;
                        };
                        const forfeit = () => {
                                if (userTurn) userHP = 0;
                                else oppoHP = 0;
                        };
                        while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                                const user = userTurn ? message.author : opponent;
                                let choice;
                                if (!opponent.bot || (opponent.bot && userTurn)) {
                                        await message.channel.send(stripIndents`
                                                ${user}, **Ne Yapmak İstersin ?** \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
                                                **${message.author.username}**: ${userHP} :heartpulse:
                                                **${opponent.username}**: ${oppoHP} :heartpulse:
                                        `);
                                        const filter = res =>
                                                res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
                                        const turn = await message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 30000
                                        });
                                        if (!turn.size) {
                                                await message.reply(`**Üzgünüm Ama Süre Doldu !**`);
                                                reset();
                                                continue;
                                        }
                                        choice = turn.first().content.toLowerCase();
                                } else {
                                        const choices = ['saldır', 'savun', 'ultra güç'];
                                        choice = choices[Math.floor(Math.random() * choices.length)];
                                }
                                if (choice === 'saldır') {
                                        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                        await message.channel.send(`${user}, **[${damage}] Hasar Vurdu !**`);
                                        dealDamage(damage);
                                        reset();
                                } else if (choice === 'savun') {
                                        await message.channel.send(`${user}, **Kendisini Süper Kalkan İle Savundu !**`);
                                        guard = true;
                                        reset(false);
                                } else if (choice === 'ultra güç') {
                                        const miss = Math.floor(Math.random() * 4);
                                        if (!miss) {
                                                const damage = randomRange(100, guard ? 150 : 300);
                                                await message.channel.send(`${user}, **Çoook Uzak Galaksilerden Gelen Ultra Sonik Enerjiyi Yeterki Miktarda Topladın Ve __[${damage}]__ hasar vurdun !**`);
                                                dealDamage(damage);
                                        } else {
                                                await message.channel.send(`${user}, **Çoook Uzak Galaksilerden Gelen Ultra Sonik Enerjiyi Yeterki Miktarda Toplayamadığın İçin Ulta Güç Kullanamadın !**`);
                                        }
                                        reset();
                                } else if (choice === 'kaç') {
                                        await message.channel.send(`${user}, **Savaştan Kaçtı ! Korkağın Tekiymiş !**`);
                                        forfeit();
                                        break;
                                } else {
                                        await message.reply('**Ne Yapmaya Çalışıyorsun ?**');
                                }
                        }
                        this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
                        return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
                } catch (err) {
                        this.fighting.delete(message.channel.id);
                        throw err;
                }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};