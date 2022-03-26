const Discord = require("discord.js");
module.exports = async () => {

  setInterval(() => {
    checkUnregister();
  }, 100000);
/*
  setInterval(() => {
    checkTagged();
  }, 10000);

  setInterval(() => {
    checkUnTagged();
  }, 20000);
*/
}; 
  module.exports.registerconfig = {
      name: "ready"
    }

    function checkUnregister() {
      let embed1 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(settings.server).name, RegisterClient.guilds.cache.get(settings.server).iconURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("RANDOM")
    
      if (registerConfig.unregister) RegisterClient.guilds.cache.get(settings.server).members.cache.filter(uye => uye.roles.cache.size === 1).array().forEach((uye, index) => uye.roles.add(registerConfig.unregister));
      RegisterClient.guilds.cache.get(settings.server).channels.cache.get(registerConfig.controllog).send(embed1.setDescription("Sunucu içerisinde rolü bulunmayan herkese kayıtsız rolü verildi!"))
    }
    function checkTagged() {
      if (settings.tag) {
        let embed2 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(settings.server).name, RegisterClient.guilds.cache.get(settings.server).iconURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("GREEN")
          RegisterClient.guilds.cache.get(settings.server).members.cache.filter(uye => uye.user.username.includes(settings.tag) && (!uye.roles.cache.has(registerConfig.family))).array().forEach((uye, index) => {
            uye.setNickname(uye.displayName.replace(settings.untag, settings.tag));
            if(uye.manageable) { if (registerConfig.family) uye.roles.add(registerConfig.family) }
          });
          RegisterClient.guilds.cache.get(settings.server).channels.cache.get(registerConfig.controllog).send(embed2.setDescription("Tagımızı taşıyıp rolü olmayan herkese rolü verildi!"))
          }
    }
    function checkUnTagged() {
      if (settings.tag) {
        let embed3 = new Discord.MessageEmbed().setAuthor(RegisterClient.guilds.cache.get(settings.server).name, RegisterClient.guilds.cache.get(settings.server).iconURL({dynamic: true})).setTimestamp().setFooter(settings.footer).setColor("RED")
          RegisterClient.guilds.cache.get(settings.server).members.cache.filter(uye => !uye.user.username.includes(settings.tag) && (!uye.roles.cache.has(registerConfig.family))).array().forEach((uye, index) => {
            if(uye.manageable) { if (registerConfig.family) uye.roles.remove(registerConfig.family) }
          });
            RegisterClient.guilds.cache.get(settings.server).channels.cache.get(registerConfig.controllog).send(embed3.setDescription("Tagımızı taşımayan herkesten rol başarıyla alındı!"))
          }
    }
