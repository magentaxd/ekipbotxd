const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    ModerationClient.user.setPresence({ activity: { name: settings.activity }, status: "dnd" });
  ModerationClient.channels.cache.get(conf.voice).join();
   }; 
  module.exports.config = {
      name: "ready"
    }