const {Discord,MessageEmbed} = require('discord.js');

/*
const calmdb = global.calmdb = new Veritabani("./SRC/Models/CalmDown.json");
const gamedb = global.gamedb = new Veritabani("./SRC/Models/Game.json");
const guarddb = global.guarddb = new Veritabani("./SRC/Models/Guard.json");
const invitedb = global.invitedb = new Veritabani("./SRC/Models/Invite.json");
const memberdb = global.memberdb = new Veritabani("./SRC/Models/Member.json");
const penals = global.penals = new Veritabani("./SRC/Models/Penals.json");
const serverdb = global.serverdb = new Veritabani("./SRC/Models/Server.json");
const statdb = global.statdb = new Veritabani("./SRC/Models/Stat.json");
const upstaffdb = global.upstaffdb = new Veritabani("./SRC/Models/UpStaff.json");
*/

class InviteFx {
        ////////////// EMBED KATEGORİSİ //////////////
        static embedOlustur(uye, kanal, aciklama, color) {
            return kanal.send(new MessageEmbed()
        .setDescription(aciklama)
        .setColor(color)
        .setFooter(settings.footer)
        .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));
        
          }   
          static embedBasari(uye, kanal, aciklama) {
           return kanal.send(new MessageEmbed()
           .setDescription(aciklama)
           .setColor("#00ff00")
           .setFooter(settings.footer)
           .setAuthor(uye.tag, uye.avatarURL({dynamic: true, size: 2048}))); 
          }
          static embedHata(uye, kanal, aciklama) {
            return kanal.send(new MessageEmbed()
        .setDescription(aciklama)
        .setColor("#ff0000")
        .setFooter(settings.footer)
        .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));
          }   
        ////////////// EMBED KATEGORİSİ //////////////
    
    static test() {
}

}
module.exports = InviteFx;
