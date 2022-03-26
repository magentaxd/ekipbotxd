const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = async (member) => {

let memberDay = (Date.now() - member.user.createdTimestamp);
var toplamüye = member.guild.memberCount;
let embed = new Discord.MessageEmbed().setFooter(settings.footer).setColor('RANDOM');  
let createAt = moment.duration(memberDay).format("Y [Yıl], M [Ay], W [Hafta], DD [Gün]").replace(", 0 Hafta,","").replace("0 Yıl,","").replace(", 0 Ay,","").replace(" 00 Ay","").replace(" 00 Hafta","").replace(" 00 Gün","").replace(", 0 Gün","").replace(", 00 Hafta,","").replace(" 00 Yıl,","").replace(", 00 Ay,","").replace(", 00 Gün","").replace(" 01 Gün"," 1 Gün").replace(" 02 Gün"," 2 Gün").replace(" 03 Gün"," 3 Gün").replace(" 04 Gün"," 4 Gün").replace(" 05 Gün"," 5 Gün").replace(" 06 Gün"," 6 Gün").replace(" 07 Gün"," 7 Gün").replace(" 08 Gün"," 8 Gün").replace(" 09 Gün"," 9 Gün");
let createAt2 = moment.duration(memberDay).format("DD [Gün], HH [saat], mm [dakika]").replace(" 0 Gün,","").replace("0 Saat,","").replace(" 0 Dakika,","").replace(" 01 Gün"," 1 Gün").replace(" 02 Gün"," 2 Gün").replace(" 03 Gün"," 3 Gün").replace(" 04 Gün"," 4 Gün").replace(" 05 Gün"," 5 Gün").replace(" 06 Gün"," 6 Gün").replace(" 07 Gün"," 7 Gün").replace(" 08 Gün"," 8 Gün").replace(" 09 Gün"," 9 Gün");
let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
if (guvenilirlik) { member.roles.add(registerConfig.quarantine)
  const tarihle = (date) => {
    const startedAt = Date.parse(date);
    var msecs = Math.abs(new Date() - startedAt);
  
    const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
    msecs -= years * 1000 * 60 * 60 * 24 * 365;
    const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
    msecs -= months * 1000 * 60 * 60 * 24 * 30;
    const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
    msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
    const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
    msecs -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(msecs / (1000 * 60 * 60));
    msecs -= hours * 1000 * 60 * 60;
    const mins = Math.floor((msecs / (1000 * 60)));
    msecs -= mins * 1000 * 60;
    const secs = Math.floor(msecs / 1000);
    msecs -= secs * 1000;
  
    var string = "";
    if (years > 0) string += `${years} yıl`
    else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
    else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
    else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
    else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
    else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
    else if (secs > 0) string += `${secs} saniye`
    else string += `saniyeler`;
  
    string = string.trim();
    return `\`${string} önce\``;
  };
  member.guild.kanalBul("supheli-log").send(embed.setDescription(`${member} isimli kişi sunucuya katıldı fakat hesabı ${tarihle(member.user.createAt2)} açıldığı için şüpheli olarak işaretlendi.`));
  } else {
    member.guild.channels.cache.get(registerConfig.welcome).send(`${emojis.yildiz} † Shîny #1421'e hoş geldin**${member}** Seninle beraber sunucumuz **${toplamüye}** üye sayısına ulaştı. 

Hesabın **${moment(member.user.createdAt).format("Do MMMM YYYY")}** tarihinde oluşturulmuş. (\`${createAt} önce\`) [${emojis.onay}] <@&${registerConfig.register}>

Sunucumuza kayıt olduğunda <#947438797191266360> kanalına göz atmayı unutmayınız. Kayıt olduktan sonra kuralları okuduğunuzu kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız. :tada:`)
      member.roles.add(registerConfig.unregister)
  member.setNickname(`${settings.nickuntag} İsim | Yaş?`)   
  }

}; 
  module.exports.registerconfig = {
      name: "guildMemberAdd"
    }
    
