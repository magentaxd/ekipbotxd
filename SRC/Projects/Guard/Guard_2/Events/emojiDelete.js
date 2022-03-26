const Discord = require("discord.js");
module.exports = async(emoji) => {

    if (emoji.guild.id !== settings.server) return;
    const entry = await emoji.guild.fetchAuditLogs({ type: 'EMOJI_DELETE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = emoji.guild.members.cache.get(id)
    if(id === settings.owner) return;
    if(entry.executor.id === Guard2Client.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
emoji.guild.emojis.create(emoji.url, emoji.name)
//////////////////
await user.ban({reason: guardConfig.reason})
await guardfx.closeall(emoji.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await emoji.guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı emoji silmeye çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.guard2config = {
      name: "emojiDelete"
    }