const Discord = require("discord.js");
module.exports = async (message) => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
  let snipelendin = {
  icerik: message.content,
  sahip: message.author.id,
  yazildi: message.createdTimestamp,
  silindi: Date.now(), 
  kanal: message.channel.id
  }
  await serverdb.ayarla(`snipe.${message.guild.id}`, snipelendin)
  let richardemb = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter(settings.footer)
  .setAuthor(message.author.tag, message.member.avatarURL)
  message.guild.kanalBul("message-log").send(richardemb.setDescription(`Yazan Kişi: <@${message.author.id}>
  Mesaj: \`${message.content}\`
  Kanal: <#${message.channel.id}>`))
}; 
  module.exports.config = {
      name: "messageDelete"
    }