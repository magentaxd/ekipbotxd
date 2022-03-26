const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports.execute = async(ModerationClient , message, args) => {
//////////
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let sebep = args.splice(1).join(" ") || false; 
if (!message.member.roles.cache.has(moderationConfig.warnhammer) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
if (!member) return moderationfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}warn @Noâ/ID Sebep\``).sil(10000);
if (!sebep) return moderationfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}warn @Noâ/ID Sebep\``).sil(10000);
if(member === message.member) return moderationfx.embedHata(message.author, message.channel, `Moderasyon komutlarını kendi üstünde kullanamazsın!`).sil(10000);
if(!member.bannable) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı yıkılmaz sallanmaz!`).sil(10000);
if(message.member.roles.highest.position == member.roles.highest.position) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının ile aynı roldesiniz!`).sil(10000);
if(message.member.roles.highest.position <= member.roles.highest.position) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının rolü senin üstünde!`).sil(10000);
//////////

let cezaID = penals.cek(`cezanumarasi.${message.guild.id}`)+1;
      let atilanAy = moment(Date.now()).format("MM");
      let saat = parseInt(moment(Date.now()).format("HH"))+3;
      let dakika = moment(Date.now()).format("mm");
      let atilanSaat = `${saat}:${dakika}` 
      let atilanYıl = moment(Date.now()).format("YYYY");
      let atilanGün = moment(Date.now()).format("DD");
      let muteAtılma = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
      message.react(emojis.onay)
      moderationfx.embedBasari(message.author, message.channel, `${member} kullanıcısı ${sebep} sebebi ile uyarıldı! (\`#${cezaID}\`)`)
    
//////////
let ceza = {  
    mod: message.author.id, 
    sebep: sebep, 
    kisi: member.displayName, 
    id: cezaID, 
    zaman: muteAtılma,
    bitis: "KALICI", 
    komut: "WARN" 
    };
  let soncezaaktif = {
    mod: message.member.displayName, 
    sebep: sebep, 
    id: cezaID,  
    durum: `✔️ [AKTIF]`,
    bitis: "KALICI", 
    komut: "WARN" 
  };
penals.degerekle(`sicil.${member.id}.${settings.server}`, ceza);
penals.ekle(`sicilsayi.${member.id}.${settings.server}`, 1);
penals.ayarla(`sonceza.${member.id}.${settings.server}`, soncezaaktif);
penals.ekle(`cezanumarasi.${settings.server}`, 1);
moderationfx.cezaEkle(cezaID, member.id, member.displayName, message.member.displayName, message.author.id, "WARN", sebep, "KALICI", muteAtılma, "KALICI", "warn")
message.guild.log(cezaID, message.author, member, sebep, muteAtılma, "KALICI", "warn", "penal-log")
//////////
};

module.exports.config = {
    name: "warn",
    aliases: ["warn", "uyar", "uyarı", "uyari"],
    usage: "Taslak",
    description: "Taslak Komutu."
};