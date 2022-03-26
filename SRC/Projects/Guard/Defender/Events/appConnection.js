const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  DefenderClient.user.setPresence({ activity: { name: settings.activity }, status: "idle" });
  DefenderClient.channels.cache.get(conf.voice).join();
}; 

  module.exports.defenderconfig = {
      name: "ready"
    }