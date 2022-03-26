const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(RegisterClient, message, args) => {
  
    if (!message.member.roles.cache.has(registerConfig.booster)) return message.react(emojis.hata);
     let yazilacakisim;
    
    let isim = args.slice(0).join(` `)
     
    yazilacakisim = `${message.member.user.username.includes(settings.tag) ? settings.tag : (settings.tag ? settings.tag : (settings.tag || ""))} ${isim}`;
    if (!isim) return registerfx.embedHata(message.author, message.channel, answer.hatalikullanim + ` \`${settings.prefix}booster isim\``)
    
    
     if(message.member.manageable) message.guild.members.cache.get(message.author.id).setNickname(`${yazilacakisim.replace("  "," ").replace("   "," ").replace("    "," ")
     .replace("    "," ").replace("     "," ").replace("      "," ").replace("       "," ").replace("        "," ").replace("         "," ").replace("          "," ").replace("           "," ")
     .replace("           "," ").replace("            "," ").replace("             "," ").replace("              "," ").replace("               "," ").replace("                "," ").replace("                 "," ")}`)
      message.react(emojis.onay)
      };

module.exports.registerconfig = {
    name: "booster",
    aliases: ["booster", "rich"],
    usage: "Taslak",
    description: "Taslak Komutu."
};