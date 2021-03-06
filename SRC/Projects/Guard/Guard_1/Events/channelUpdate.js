const Discord = require("discord.js");
module.exports = async(oldChannel, newChannel) => {

    if (newChannel.guild.id !== settings.server) return;
    const entry = await newChannel.guild.fetchAuditLogs({ type: "CHANNEL_UPDATE" }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = newChannel.guild.members.cache.get(id)
    if(id === settings.owner) return;
    if (entry.executor.id === Guard1Client.user.id) return;
    if(guardConfig.safezone.includes(id)) return;
    if(guardConfig.safebots.includes(id)) return;
//////////////////
if(oldChannel.rawPosition !== newChannel.rawPosition){
        await newChannel.setPosition(oldChannel.rawPosition)
}
//////////////////
if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) {
     newChannel.setParent(oldChannel.parentID); 
}
//////////////////
if (newChannel.type === "category") {
  newChannel.edit({ name: oldChannel.name });
}
//////////////////
if (newChannel.type === "text") {
  newChannel.edit({ name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser });
}
//////////////////
if (newChannel.type === "voice") {
  newChannel.edit({ name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit });
}
/////////////////
      if(oldChannel.parentID !== oldChannel.parentID){
        await newChannel.setParent(oldChannel.parentID)
}
//////////////////
if(oldChannel.name !== newChannel.name){
    await newChannel.setName(oldChannel.name)
}
//////////////////
await user.ban({reason: guardConfig.reason})
await guardfx.closeall(newChannel.guild, ["ADMINISTRATOR", "BAN_MEMBERS", "MANAGE_CHANNELS", "KICK_MEMBERS", "MANAGE_GUILD", "MANAGE_WEBHOOKS", "MANAGE_ROLES"]);
  await newChannel.guild.channels.cache.get(guardConfig.log).send(
    new Discord.MessageEmbed()
    .setDescription(`${user} (${user.id}) **Kullanıcısı sunucumuzda bir kanal düzenlemeye çalıştı ve beni geçemedi ;)**`)
    .setColor("RANDOM")
    .setFooter(user.id, user.user.avatarURL())
  )
//////////////////
}; 
  module.exports.guard1config = {
      name: "channelUpdate"
    }