const {MessageEmbed, Discord, Guild} = require('discord.js');

class GuardSetup {
    static grdOnline() {
        DefenderClient.login(conf.defender)
        Guard1Client.login(conf.guard1)
        Guard2Client.login(conf.guard2)
        Guard3Client.login(conf.guard3)
        Guard4Client.login(conf.guard4)
        Guard5Client.login(conf.guard5)
}


}

DefenderClient.on("ready", () => {
    DefenderClient.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });

 })
  
module.exports = GuardSetup;
