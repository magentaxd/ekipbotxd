const Discord = require("discord.js");
require('discord-reply');
module.exports = (msg) => {

    if (
  
      msg.content.toLowerCase() === "tag" ||
  
      msg.content.toLowerCase() === "!tag" ||
  
      msg.content.toLowerCase() === ".tag"
  
    ) {
      msg.lineReply("** `Shîny - † - #1421` **");
      
  
    }
  };
  module.exports.registerconfig = {
      name: "message"
    }