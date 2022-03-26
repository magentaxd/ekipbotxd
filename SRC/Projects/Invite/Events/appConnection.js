const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    InviteClient.user.setPresence({ activity: { name: settings.activity }, status: "dnd" });
  InviteClient.channels.cache.get(conf.voice).join();
   }; 
  module.exports.inviteconfig = {
      name: "ready"
    }