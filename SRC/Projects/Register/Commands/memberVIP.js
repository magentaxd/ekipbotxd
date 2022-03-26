const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
  
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    if (!user) return registerfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}vip @Noâ/ID\``).sil(10000);
    if(user === message.member) return registerfx.embedHata(message.author, message.channel, `Kayıt komutlarını kendi üstünde kullanamazsın!`).sil(10000);
    if(!user.bannable) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı yıkılmaz sallanmaz!`).sil(10000);
    if(message.member.roles.highest.position == user.roles.highest.position) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının ile aynı roldesiniz!`).sil(10000);
    if(message.member.roles.highest.position <= user.roles.highest.position) return registerfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının rolü senin üstünde!`).sil(10000)

     
    if (!user) return registerfx.embedHata(message.author, message.channel, answer.hatalikullanim + ` \`${settings.prefix}vip <@Noâ/ID>\``)
    
    
     if(user.manageable) user.roles.add(registerConfig.vip)
      message.react(emojis.onay)
      };

module.exports.registerconfig = {
    name: "vip",
    aliases: ["ozel"],
    usage: "Taslak",
    description: "Taslak Komutu."
};