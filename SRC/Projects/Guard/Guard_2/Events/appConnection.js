const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  Guard2Client.user.setPresence({ activity: { name: settings.activity }, status: "idle" });
    Guard2Client.channels.cache.get(conf.voice).join();
  }; 
  module.exports.guard2config = {
      name: "ready"
    }