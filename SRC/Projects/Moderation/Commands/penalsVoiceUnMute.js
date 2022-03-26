const { Discord, MessageEmbed } = require("discord.js");
const ms = require("ms")
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
module.exports.execute = async(ModerationClient , message, args) => {
  //////////
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let sebep = args.splice(1).join(" ") || false; 
  if (!message.member.roles.cache.has(moderationConfig.voicemutehammer) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
  if (!member) return moderationfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}voiceunmute @Noâ/ID Sebep\``).sil(10000);
  if (!sebep) return moderationfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}voiceunmute @Noâ/ID Sebep\``).sil(10000);
  if(member === message.member) return moderationfx.embedHata(message.author, message.channel, `Moderasyon komutlarını kendi üstünde kullanamazsın!`).sil(10000);
  if(!member.bannable) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı yıkılmaz sallanmaz!`).sil(10000);
  if(message.member.roles.highest.position == member.roles.highest.position) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının ile aynı roldesiniz!`).sil(10000);
  if(message.member.roles.highest.position <= member.roles.highest.position) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının rolü senin üstünde!`).sil(10000);
  //////////



      message.react(emojis.onay)
      moderationfx.embedBasari(message.author, message.channel, `${member} kullanıcısı sesli kanallardaki susturulması açıldı`)
    
//////////
member.roles.remove(moderationConfig.voicemuted)
member.voice.setMute(false)
//////////

};

module.exports.config = {
    name: "unvoicemute",
    aliases: ["vunmute", "unvmute", "uvm"],
    usage: "Taslak",
    description: "Taslak Komutu."
};