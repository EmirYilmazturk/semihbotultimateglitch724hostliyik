const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  //.setDescription('')
  .setColor(0x00ffff)
  .addField("**TROLL VE KULLANICI KOMUTLARI :point_down: :**", `?banned = **Ban Çekicini Sallarsınız** \n?cowsay = **İnek Yazdığınız Yazıyı Söyler** \n?sigarayak = **Sigara İçersiniz.** \n?roliste = **BOT Size Rol Verir.** \n?zekam = **Zekanızı Ölçersiniz.** \n?stresçarkı = **Stres Çarkı Çevirirsiniz** \n?aşkölçer = **İstediğiniz Kullanıcı İle Aşkınızı Ölçersiniz.** \n?tekmeat = **İstediğiniz Kişiye Tekme Atarsınız.** \n?ascii = **Ascii Türü Yazı Yazarsınız** \n?sarıl = **İstediğiniz Kişiye Sarılırsınız** \n?düello = **İstediğiniz Kullanıcı İle Savaşırsınz** \n?steamstore = **Steamden Oyun Ararsınız** \n?mcödül = **Yazınızı Minecraft Başarımına Dönüştürür** \n?hackle = **İstediğiniz Kullanıcıyı Hacklersiniz.** \n?oylama = **Oylama Açarsınız [ Sadece Yetkililer ]**\n?komikgif = **BOT Size Komik Gifler Atar** \n?avatarım = **Avatarınınızı Gösterir.** \n?balıktut = **Balık Tutarsınız.** \n?emojiyazı = **Yazınızı Emoji Haline Çevirir.** \n?öldür = **İstediğiniz Kullanıcıyı Öldürürsünüz.**`)
  .addField("**KOMUTLARIN DEVAMI :point_down: **", `?herkesebendençay = **Herkese Çay Ismarlarsınız.** \n?elharaketi = **Haraket Çekersiniz.** \n?surfyap = **Sörf Yaparsınız.** \n?espriyap = **BOT Size Espri Yapar.** \n?kasaaç = **CS:GO Kasası Açarsınız.** \n?bottleflip = **BottleFlip Yapmaya Çalışırsınz** \n?tersyaz = **Yazdığınız Yazıyı Tersten Yazar** \n?kaçcm = **ಠ⌣ಠ** \n?sarıl = **İstediğiniz Kişiye Sarılırsınız** \n?koş = **Koşarsınız.** \n?çekiç = **İstediğiniz Kişiye Çekiç Atarsınız.** \n?söv = **İstediğiniz Kişiye BOT Söver** \n?hiyaa = **İstediğiniz Kişiye Karate Yaparsınız.** \n?osmanlıtokadı = **İstediğiniz Kişiye Tokat Atarsınız.**\n?yumrukat = **Yumruk Atarsınız.** \n?yaz = **Bota İstediğiniz Şeyi Yazdırırsınız.** \n?sunucuresmi = **BOT Sunucunun Resmini Atar.** \n?sunucubilgi = **BOT Sunucu Hakkında Bilgi Verir.** \n?kullanıcıbilgim = **Sizin Hakkınızda Bilgi Verir.****`)
  .addField("**EFEKT KOMUTLARI :point_down:**", "?wasted = **Avatarınıza Wasted Efekti Verir** \n?nitro = **Avatarınıza Nitro Efekti Verir** \n?sniper = **Avatarınıza Sniper Efekti Verir** \n?triggered = **Avatarınıza Triggered Efekti Verir** \n?trinity = **Avatarınıza Trinity Efekti Verir** \n?erdoğan = **Avatarınıza Erdoğan Efekti Verir** \n?türküm = **Avatarınıza Türküm Efekti Verir** \n?tablet = **Avatarınıza Tablet Efekti Verir** \n?devamedecek = **Avatarınıza devamedecek Efekti Verir** \n?zıtrenk = **Avatarınızın Rengini Zıttına Çevirir** \n?missionpassed = **Avatarınıza MissionPassed Efekti Verir** \n?brilliance = **Avatarınıza Brilliance Efekti Verir** \n?illuminati = **Avatarınıza İlluminati Efekti Verir** \n?pixel = **Avatarınızı Pixelleştirir**")  
  .addField("**ANA KOMUTLAR** :point_down:", "?yardım = **BOT Komutlarını Atar.** \n?top10 = **TOP10 Listesini Gösterir** \n?öneri = **BOT Sahibine Öneri Bildirirsiniz.** \n?çekiliş = **Çekiliş Yaparsınız** \n?ping = **BOT Gecikme Süresini Söyler.** \n?davet = **BOT Davet Linkini Atar.** \n?istatistik = **BOT İstatistiklerini Atar.**")    
  .addField("**Yapımcım**", " **⛏ SemihMehmetTR 🔨** ")
  .setFooter('ßy SemihMehmetTR')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
