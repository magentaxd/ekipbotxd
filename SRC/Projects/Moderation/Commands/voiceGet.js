
const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {
    let richardembed = new MessageEmbed().setFooter(settings.footer).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('RANDOM');  
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return moderationfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}get @Noâ/ID\``).sil(10000);
    if(member === message.member) return moderationfx.embedHata(message.author, message.channel, `Moderasyon komutlarını kendi üstünde kullanamazsın!`).sil(10000);
    if(!member.bannable) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı yıkılmaz sallanmaz!`).sil(10000);
    if(message.member.roles.highest.position == member.roles.highest.position) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının ile aynı roldesiniz!`).sil(10000);
    if(message.member.roles.highest.position <= member.roles.highest.position) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcının rolü senin üstünde!`).sil(10000);
    if (!message.member.voice.channel && !member.voice.channel) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı veya sen sesli kanalda değilsin.`).sil(10000);
    if (!message.member.voice.channelID == member.voice.channelID) return moderationfx.embedHata(message.author, message.channel, `Belirtilen kullanıcı ile aynı kanaldasın.`).sil(10000);
      if (message.member.hasPermission("ADMINISTRATOR")) {
      member.voice.setChannel(message.member.voice.channelID).catch();
          message.react(emojis.onay)

  }else{

  const filter = (reaction, user) => {
      return [emojis.onayemoji].includes(reaction.emoji.id) && user.id === member.id; 
      };

      message.channel.send(richardembed.setDescription(`${member}, ${message.author} adlı üye seni sesli kanalına davet etmek istiyor, kabul ediyor musun?`).setFooter(`Kabul etmek için 15 saniyen bulunuyor.`)).then(x => {
          x.react(emojis.onayemoji);
          x.awaitReactions(filter, {max: 1, time: 15000, error: ['time']}).then(resp => {
              let response = resp.first();
              if (response) {
                  member.voice.setChannel(message.member.voice.channelID).catch();
          x.delete()
          message.react(emojis.onayemoji)
              };
          });
      });
  };

};

module.exports.config = {
    name: "get",
    aliases: ["gel"],
    usage: "Taslak",
    description: "Taslak Komutu."
};