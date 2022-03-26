const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
         if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
        let oldnames = memberdb.cek(`isimler.${member.id}`);
         if (!oldnames) return registerfx.embedBasari(message.author, message.channel,"İsim geçmişi temiz.")
    
        let oldsize = memberdb.cek(`isimmiktar.${member.id}`)
    
      let oldnamelist = oldnames.length > 0 ? oldnames.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`) : "Bu Üyenin İsim Geçmişi Bulunamadı.";
    
      registerfx.embedOlustur(message.author, message.channel,`${member} kullanıcının sunucudaki eski isimleri [**${oldsize || 0}**]
    
    ${oldnamelist.join("\n")}`, "RANDOM");
};

module.exports.registerconfig = {
    name: "oldnames",
    aliases: ["isimler"],
    usage: "Taslak",
    description: "Taslak Komutu."
};