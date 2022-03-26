const {Discord,Client,MessageEmbed} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const DefenderClient = global.DefenderClient = new Client({ fetchAllMembers: true });
const Guard1Client = global.Guard1Client = new Client({ fetchAllMembers: true });
const Guard2Client = global.Guard2Client = new Client({ fetchAllMembers: true });
const Guard3Client = global.Guard3Client = new Client({ fetchAllMembers: true });
const Guard4Client = global.Guard4Client = new Client({ fetchAllMembers: true });
const Guard5Client = global.Guard5Client = new Client({ fetchAllMembers: true });
const InviteClient = global.InviteClient = new Client({ fetchAllMembers: true });
const ModerationClient = global.ModerationClient = new Client({ fetchAllMembers: true });
const RegisterClient = global.RegisterClient = new Client({ fetchAllMembers: true });
const logs = require('discord-logs');
logs(client,DefenderClient,Guard1Client,Guard2Client,Guard3Client,Guard4Client,InviteClient,ModerationClient,RegisterClient);
require('discord-buttons')(client,DefenderClient,Guard1Client,Guard2Client,Guard3Client,Guard4Client,InviteClient,ModerationClient,RegisterClient);

//// COMMAND HANDLER ////
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
//// COMMAND HANDLER ////



///////////////// GLOBALS /////////////////
const conf = global.conf = require("./SRC/Configs/config.json");
const settings = global.settings = require("./SRC/Configs/settings.json");
const emojis = global.emojis = require("./SRC/Configs/emojis.json");
const answer = global.answer = require('./SRC/Database/Answer.js');
const globalFx = global.globalFx = require('./SRC/Functions/_GlobalFx.js');
globalFx.setup()
answer.replySetup()
require("./SRC/Database/Utils.js");
///////////////// GLOBALS /////////////////

/////////////////// HANDLER ///////////////////
ModerationClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["url","taslak2", "kb", "info", "kullanicibilgi", "me", "join", "git",
      "get", "gel", "lock", "kilit", "snipe", "afk", "avatar", "pp", "clear", "sil",
      "slowmode", "slow", "yavasmod", "say", "voicecontrol", "ses", "sesli", "rollog",
      "sicil", "enrollment", "chatmute", "cm", "yazilimute", "yazilisustur", "chatsustur", 
      "cmute", "csustur", "csustur", "ceza", "ci", "punishment", "cezainfo", "cezabilgi",
      "voicemute", "vm", "seslimute", "seslisustur", "voicesustur", "vmute", "vsustur",
      "ysustur", "cezalı", "jail", "warn", "uyar", "uyarı", "uyari", "yargı", "yasakla",
      "uçur", "ucur", "uçuş", "infaz", "ban", "karantinaal", "unkarantina", "uk", "rq",
      "removequarantine", "private", "priv", "voice", "rkontrol", "rolkontrol",
      "rolecontrol", "rcontrol","eval", "nerede"]
      if(veriler.includes(command)) {
  let moderasyonbotu = message.ModerationClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(moderasyonbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(moderasyonbotu, message, args);
  }
  }
})
    /////////////////// HANDLER ///////////////////
fs.readdir("./SRC/Projects/Moderation/Commands", (err, files) => {
  if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    console.log('\x1b[32m%s\x1b[0m', `[ MODERATION CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
    files.forEach(file => {
let prop = require(`./SRC/Projects/Moderation/Commands/${file}`);
  if(!prop.config) return;
  if(typeof prop.onLoad === "function") prop.onLoad(ModerationClient);
    commands.set(prop.config.name, prop);
  if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
    ///////////////////
fs.readdir("./SRC/Projects/Moderation/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Moderation/Events/${file}`);
  if(!prop.config) return;
      ModerationClient.on(prop.config.name, prop);
      });
    });
/////////////////// HANDLER ///////////////////


/////////////////// HANDLER ///////////////////
RegisterClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak3", "booster", "rich", "vip", "ozel", "i", "name", 
  "n", "isim", "oldnames", "isimler", "kayit", "kayıt", "kız", "bay", 
  "bayan", "k", "kadın", "kiz", "kadin", "erkek", "e", "unregister",
  "unreg", "kayitsiz"]
      if(veriler.includes(command)) {
  let registerbotu = message.RegisterClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(registerbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(registerbotu, message, args);
  }
  }
})
    /////////////////// HANDLER ///////////////////
fs.readdir("./SRC/Projects/Register/Commands", (err, files) => {
  if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log('\x1b[32m%s\x1b[0m', `[ REGISTER CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
    files.forEach(file => {
let prop = require(`./SRC/Projects/Register/Commands/${file}`);
  if(!prop.registerconfig) return;
  if(typeof prop.onLoad === "function") prop.onLoad(RegisterClient);
    commands.set(prop.registerconfig.name, prop);
  if(prop.registerconfig.aliases) prop.registerconfig.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
    ///////////////////
fs.readdir("./SRC/Projects/Register/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Register/Events/${file}`);
  if(!prop.registerconfig) return;
  RegisterClient.on(prop.registerconfig.name, prop);
      });
    });
//////////////////////////////////////

/////////////////// HANDLER ///////////////////
InviteClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5", "inv", "invite", "davetlerim", "davetler", "davetsayim"]
      if(veriler.includes(command)) {
  let invitebotu = message.InviteClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(invitebotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(invitebotu, message, args);
  }
  }
})
    /////////////////// HANDLER ///////////////////
fs.readdir("./SRC/Projects/Invite/Commands", (err, files) => {
  if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log('\x1b[32m%s\x1b[0m', `[ INVITE CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
    files.forEach(file => {
let prop = require(`./SRC/Projects/Invite/Commands/${file}`);
  if(!prop.inviteconfig) return;
  if(typeof prop.onLoad === "function") prop.onLoad(InviteClient);
    commands.set(prop.inviteconfig.name, prop);
  if(prop.inviteconfig.aliases) prop.inviteconfig.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
    ///////////////////
fs.readdir("./SRC/Projects/Invite/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Invite/Events/${file}`);
  if(!prop.inviteconfig) return;
  InviteClient.on(prop.inviteconfig.name, prop);
      });
    });
//////////////////////////////////////

/////////////////// HANDLER ///////////////////
DefenderClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["backup", "data", "noa"]
      if(veriler.includes(command)) {
  let guardbotu = message.DefenderClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Defender/Commands", (err, files) => {
  if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log('\x1b[32m%s\x1b[0m', `[ DEFENDER CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
    files.forEach(file => {
let prop = require(`./SRC/Projects/Guard/Defender/Commands/${file}`);
  if(!prop.defenderconfig) return;
  if(typeof prop.onLoad === "function") prop.onLoad(ModerationClient);
    commands.set(prop.defenderconfig.name, prop);
  if(prop.defenderconfig.aliases) prop.defenderconfig.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Defender/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Defender/Events/${file}`);
  if(!prop.defenderconfig) return;
  DefenderClient.on(prop.defenderconfig.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard1Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard1Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_1/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 1 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_1/Events/${file}`);
  if(!prop.guard1config) return;
  Guard1Client.on(prop.guard1config.name, prop);
      });
    });
//////////////////////////////////////

/////////////////// HANDLER ///////////////////
Guard2Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard2Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_2/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 2 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_2/Events/${file}`);
  if(!prop.guard2config) return;
  Guard2Client.on(prop.guard2config.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard3Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard3Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_3/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 3 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_3/Events/${file}`);
  if(!prop.guard3config) return;
  Guard3Client.on(prop.guard3config.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard4Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard4Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_4/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 4 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_4/Events/${file}`);
  if(!prop.guard4config) return;
  Guard4Client.on(prop.guard4config.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard5Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard5Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_5/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 5 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_5/Events/${file}`);
  if(!prop.guard5config) return;
  Guard5Client.on(prop.guard5config.name, prop);
      });
    });
//////////////////////////////////////

///////////////////
client.on('guildMemberRoleAdd', async(member, role) =>  {
  let atilanAy = moment(Date.now()).format("MM");
  let saat = parseInt(moment(Date.now()).format("HH"))+3;
  let dakika = moment(Date.now()).format("mm");
  let atilanSaat = `${saat}:${dakika}` 
  let atilanYıl = moment(Date.now()).format("YYYY");
  let atilanGün = moment(Date.now()).format("DD");
  let tarihxd = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
  console.log("qwe")
      const Log = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(audit => audit.entries.first());
      if (!Log || !Log.executor || Log.createdTimestamp < (Date.now() - 5000) || member.guild.roles.cache.get(role.id).position < member.guild.roles.cache.get(regiserConfig.register).position) return;
      memberdb.ekle(`rolsayi_${member.id}`, +1)
      memberdb.degerekle(`rollogu.${member.id}_qwe`, {
      verilenrol: role.id,
      emoji: emojis.onay,
      roldurum: "verildi",
      yetkili: Log.executor.id,
      tarih: tarihxd
      })
  })
///////////////////
client.embedGenislet = async function(description, author = false, footer = false, features = false) {
  let embedSize = parseInt(`${description.length/2048}`.split('.')[0])+1
  let embeds = new Array()
  for (var i = 0; i < embedSize; i++) {
    let desc = description.split("").splice(i*2048, (i+1)*2048)
    let x = new MessageEmbed().setDescription(desc.join(""))
    if (i == 0 && author) x.setAuthor(author.name, author.icon ? author.icon : null)
    if (i == embedSize-1 && footer) x.setFooter(footer.name, footer.icon ? footer.icon : null)
    if (i == embedSize-1 && features && features["setTimestamp"]) x.setTimestamp(features["setTimestamp"])
    if (features) {
      let keys = Object.keys(features)
      keys.forEach(key => {
        if (key == "setTimestamp") return
        let value = features[key]
        if (i !== 0 && key == 'setColor') x[key](value[0])
        else if (i == 0) {
          if(value.length == 2) x[key](value[0], value[1])
          else x[key](value[0])
        }
      })
    }
    embeds.push(x)
  }
  return embeds
};
