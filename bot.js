const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Yeniden Hoşgeldin :handshake:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyi Senden Naber');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'salak') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi') {
    msg.reply('**İyi Olduğuna Sevindim :smile:**');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ii') {
    msg.reply('**İyi Olduğuna Sevindim :smile:**');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gerizekalı') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Gerizekalı') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şerefsiz') {
    msg.delete(30)
    msg.reply('**:point_right: Hakaret Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Mal') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oc') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Aq') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'AQ') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aQ') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'a*') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'velet') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bebe') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bebek') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'veled') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocuğu') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pezevenk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'AMK') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Amk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SİKTİR') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Siktir') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ama siktir') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SİK') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sokuk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Sik') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yarram') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'göt') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pic') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'https://discord.gg/') {
    msg.delete(30)
    msg.reply('**:point_right: Reklam Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'işe yaramaz bot') {
    msg.reply('**Öyle Olsun :sob: :sob: Bu İletilerinizin Hepsi Kurucuma Yapılmış Sayılacaktır :smiling_imp:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'semihbot efsane') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'semihbot iyiymiş') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT Ultimate efsane') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT efsane') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT Ultimate') {
    msg.reply('**He ??* ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bb') {
    msg.reply('**Güle Güle Allaha Emanet Ol !!** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT efso') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@484783968965623820') {
    msg.reply('**Eğer Gereksiz Bişey İçin Etiketlediysen Vay Haline :gun::dagger:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@464471005444833280>') {
    msg.delete(30)
    msg.reply('**:point_right: Sahibimi Etiketlememelisin :no_entry_sign:**');
  }
});

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });
  
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kasaaç') {
    var sans = ["Bok ", "Stattrak AWP | Asiimov", "Karambit | Doopler 🗡", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bicak | Fade 🗡", "Desert Eagle | Kizil Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi 🗡", "Hatıra Faction Bicaği 🗡"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.reply(`Sana **${sonuc}** Çikti`)
  }
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "espriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel", "Can bedenden çıkmazsa nolur? \n+Matamatik dersine geç kalır.", "Adamın biri televizyona çıkmış indirememişler.", "Bir romanı 7 kız yazarsa nolur? \n-  seven kızın romanı."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    return message.channel.send(sonuc);
}
});
  
client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters" || command === "tersyaz") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Komut kullanıldığında '!'  Karakteri ile başla. 
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Lütfen ters yazmak istediğiniz bir yazı giriniz.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`**_Zeka Seviyen_**`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});
  
client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigarayak") {
msg.channel.send(':japanese_goblin: :smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':japanese_goblin: :smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':japanese_goblin: :smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':japanese_goblin: :smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':japanese_goblin: :smoking: :cloud:'))
.then(nmsg => nmsg.edit(':japanese_goblin: :smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaran Bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "kaçcm") {
    var sans = ["11cm", "15cm", "20cm", "24cm", "28cm", "31m", "39cm", "45cm", "49cm", "54cm", "58cm", "63cm", "67cm", "77cm", "73cm", "84cm", "80cm", "83cm", "96cm", "94cm", "99cm", "1 Metre Canını Seven Kaçsıın !!", "2 Metre Jony Sins mısın krdşm", "3 Metre Gökdelen Gibi Tepeye Uzanıyor !!",];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***Senin Malafatın*** **Ɛ=====================>**`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});  

    client.on("message", message => {
    const dmchannel = client.channels.find("id", "503580697966149634");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Yazan: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

const discord = require('discord.js');

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
