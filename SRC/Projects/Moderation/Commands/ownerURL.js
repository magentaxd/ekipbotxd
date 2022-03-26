const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
  let veri = message.guild.fetchVanityData()

 message.guild.fetchVanityData()
  .then(res => {
    moderationfx.embedBasari(message.author, message.channel, `URL: ${res.code} \n Kullanım: ${res.uses}`);
  })
  .catch(console.error);
}; 

module.exports.config = {
    name: "url",
    aliases: [],
    usage: "Taslak",
    description: "Taslak Komutu."
};