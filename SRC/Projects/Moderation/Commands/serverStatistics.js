const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {    
    
      if (!message.member.roles.cache.has(registerConfig.register) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
      
      let sunucu = message.guild.memberCount;
    
      let online = message.guild.members.cache.filter(only => only.presence.status != "offline").size;
    
      let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.includes(settings.tag)).size;
      let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes("1421")).size;
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
      let ses = 0;
      for (const [id, voiceChannel] of voiceChannels) ses += voiceChannel.members.size;
        let sestag = message.guild.members.cache.filter(uye => uye.user.username.includes(settings.ntag) && s.voice.channel).size
        let sestagli2 = sestag;

        let boostseviye = message.guild.premiumTier;
        let boostsayi = message.guild.premiumSubscriptionCount;
        
        let sesli = message.guild.members.cache.filter(s => s.voice.channel).size;

    let artikac;
    if(sesli >= 5) {artikac = sesli - 5} else { artikac = 0}
    moderationfx.embedOlustur(message.author, message.channel,`**+** Anlık olarak **${sesli}** (**+${artikac}**) kişi ses kanallarında aktif!
**+** Sunucumuzda toplam **${sunucu}** üye var (**${online}** Aktif)
**+** Toplam **${isimtagli + etikettagli}** kişi **[ ${etikettagli}** Etiket / **${isimtagli}** İsim **]** tagımızı alarak bize destek oluyor
**+** Sunucumuz şuan da **${boostseviye}** seviye ve **${boostsayi}** boost basılmış!`, "RANDOM")
};

module.exports.config = {
    name: "say",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};