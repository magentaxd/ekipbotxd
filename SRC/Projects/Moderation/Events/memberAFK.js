const {Discord,MessageEmbed} = require("discord.js");
const ms = require('parse-ms');
module.exports = async (message) => {

    if(message.author.bot) return;
    if(!message.guild) return;
    let prefix = settings.prefix
    if(message.content.includes(prefix+`afk`)) return;
     let time = memberdb.cek(`afktime_${message.member}`);
    let timeObj = ms(Date.now() - time);
     let time2 = memberdb.cek(`afktime_${user}`);
    let timeObj2 = ms(Date.now() - time);
    let sure;
    let sure2;

    if(timeObj.hours) {
 sure = `**${timeObj.hours}** Saat **${timeObj.minutes}** Dakika **${timeObj.seconds}** Saniye`
}
    if(!timeObj.hours) {
 sure = `**${timeObj.minutes}** Dakika **${timeObj.seconds}** Saniye`
}
    if(!timeObj.minutes) {
 sure = `**${timeObj.seconds}** Saniye`
}
    if(timeObj2.hours) {
 sure2 = `**${timeObj.hours}** Saat **${timeObj2.minutes}** Dakika **${timeObj2.seconds}** Saniye`
}
    if(!timeObj2.hours) {
 sure2 = `**${timeObj.minutes}** Dakika **${timeObj2.seconds}** Saniye`
}
    if(!timeObj2.minutes) {
 sure2 = `**${timeObj.seconds}** Saniye`
}

    
    if(memberdb.cek(`${message.author.id}.afk`)) {
        var user = message.mentions.users.first();
      let kullanici = message.guild.members.cache.get(message.author.id);
     if(kullanici.manageable) kullanici.setNickname(kullanici.displayName.replace('[AFK] ', ''))
        message.channel.send(moderationfx.embedOlustur(message.author, message.channel,`:tada: Hoşgeldin ${message.author}, artık __AFK__ modunda değilsin!`, "RANDOM")).sil(4000);
        memberdb.sil(`${message.author.id}.afk.sebep`);
        memberdb.sil(`${message.author.id}.afk`);
      
    
    }
    if(!message.guild || message.author.bot || message.content.toLowerCase().includes(`${settings.prefix}afk`)) return;
      if(message.mentions.users.size >= 1){
        let victim = message.mentions.users.first();
        if(memberdb.cek(`${victim.id}.afk`)) {
          let data = memberdb.cek(`${victim.id}.afk`);
        return message.channel.send(moderationfx.embedOlustur(message.author, message.channel,`:tada: ${victim} adlı üye **AFK** modunda.`, "RANDOM")).then(x => x.delete({timeout: 7000}));;
        }
      };
   }; 
  module.exports.config = {
      name: "message"
    }