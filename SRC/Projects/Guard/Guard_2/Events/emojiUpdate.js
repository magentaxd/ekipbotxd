const Discord = require("discord.js");
module.exports = async(oldEmoji, newEmoji) => {

    if (newEmoji.guild.id !== settings.server) return;
    const entry = await newEmoji.guild.fetchAuditLogs({ type: 'EMOJI_UPDATE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = newEmoji.guild.members.cache.get(id)
    if(id === settings.owner) return;
    if(entry.executor.id === Guard2Client.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
if(oldEmoji.name !== newEmoji.name) {
    newEmoji.setName(oldEmoji.name) 
}
//////////////////
await user.ban({reason: guardConfig.reason})
await guardfx.closeall(newEmoji.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await newEmoji.guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı emoji düzenlemeye çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.guard2config = {
      name: "emojiUpdate"
    }