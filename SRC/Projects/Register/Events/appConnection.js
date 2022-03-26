const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
    RegisterClient.user.setPresence({ activity: { name: settings.activity }, status: "dnd" });
  RegisterClient.channels.cache.get(conf.voice).join();
   }; 
  module.exports.registerconfig = {
      name: "ready"
    }