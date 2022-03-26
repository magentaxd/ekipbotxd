const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(settings.footer)
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))

    if(!rol) message.channel.send(embed.setDescription(answer.rolyok))
    let sesli = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).filter(s => s.voice.channel).map(s => s).join(', ');
    let sessiz = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).filter(s => !s.voice.channel).map(s => s).join(', ');
    message.channel.send(embed.setDescription(`**__Rol Kontrol;__**
**+** \`Rol Adı:\` **${rol.name}**
**+** \`Rol ID:\` **${rol.id}**
**+** \`Roldeki Üye Sayısı:\` **${rol.members.size}**

**Seste Olanlar**
${sesli || "Kimse bulunmamaktadır."}
**Seste Olmayanlar**
${sessiz || "Kimse bulunmamaktadır."}`))  
};

module.exports.config = {
    name: "rkontrol",
    aliases: ["rkontrol", "rolkontrol", "rolecontrol", "rcontrol"],
    usage: "Taslak",
    description: "Taslak Komutu."
};