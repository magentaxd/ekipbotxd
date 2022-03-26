const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    Guard1Client.user.setPresence({ activity: { name: settings.activity }, status: "idle" });
    Guard1Client.channels.cache.get(conf.voice).join();
   }; 
  module.exports.guard1config = {
      name: "ready"
    }