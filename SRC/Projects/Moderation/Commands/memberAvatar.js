const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {
    let victim = message.author;
	let avatar = victim.avatarURL({ dynamic: true, size: 2048 });
  let richardemb = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(settings.footer)
  .setAuthor(victim.tag, avatar)
	.setImage(avatar)
	message.channel.send(richardemb);
  };

module.exports.config = {
    name: "avatar",
    aliases: ["pp"],
    usage: "Taslak",
    description: "Taslak Komutu."
};