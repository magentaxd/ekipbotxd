const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  Guard4Client.user.setPresence({ activity: { name: settings.activity }, status: "idle" });
   Guard4Client.channels.cache.get(conf.voice).join();
   }; 
  module.exports.guard4config = {
      name: "ready"
    }