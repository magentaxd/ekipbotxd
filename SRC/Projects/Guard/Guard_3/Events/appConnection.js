const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  Guard3Client.user.setPresence({ activity: { name: settings.activity }, status: "idle" });
   Guard3Client.channels.cache.get(conf.voice).join();
   }; 
  module.exports.guard3config = {
      name: "ready"
    }