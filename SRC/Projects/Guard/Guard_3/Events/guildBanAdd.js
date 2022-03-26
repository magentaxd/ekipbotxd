const Discord = require("discord.js");
module.exports = async(guild, member) => {

    if (guild.id !== settings.server) return;
    const entry = await guild.fetchAuditLogs({ type: 'MEMBER_BAN_ADD' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = guild.members.cache.get(id)
    if(id === settings.owner) return;
    if(entry.executor.id === Guard3Client.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
guild.members.unban(member.id)
//////////////////
await user.ban({reason: guardConfig.reason})
await guardfx.closeall(guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.user.tag}) **Kullanıcısı sağ tık ile kullanıcı yasaklamaya çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.guard3config = {
      name: "guildBanAdd"
    }