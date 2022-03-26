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

class registerfx {
    
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

    ////////////// KAYIT KATEGORİSİ //////////////
    
    static kayitSil(uye) {
      let rol = uye.roles.cache.filter(a => a.id !== uye.guild.id && a.id !== registerConfig.unregister && a.id !== registerConfig.booster).map(a => a.id)
      uye.roles.remove(rol)
      uye.roles.add(registerConfig.unregister)
      uye.setNickname(`${settings.untag} İsim | Yaş?`).catch();
    
    }   
    static kayitEt(uye, yetkili, cinsiyet, isim, yas) {
      if(cinsiyet === "erkek") {
        uye.roles.remove(registerConfig.unregister)
        uye.roles.remove(registerConfig.unregister)
       
        uye.roles.add(registerConfig.erkek1)
        uye.roles.add(registerConfig.erkek1)
                if (uye.user.username.includes(settings.tag) && !uye.roles.cache.has(registerConfig.family)) {
                  uye.roles.add(registerConfig.family);
                  uye.roles.add(registerConfig.family);
                } 
                              memberdb.ayarla(`kullanici.${uye}.cinsiyet`, "erkek")
                memberdb.degerekle(`isimler.${uye.id}`, {
                    guildName: `${isim} | ${yas}`,
                    Name: isim,
                    Yetkili: yetkili.id,
                    Komut: registerConfig.erkek1
                });
                memberdb.ekle(`isimmiktar.${uye.id}`, +1);
                memberdb.ayarla(`sonisim.${uye.id}`, isim);
                memberdb.ayarla(`sonyas.${uye.id}`, yas);
      } else if(cinsiyet === "kadin") {
        uye.roles.remove(registerConfig.unregister)
        uye.roles.remove(registerConfig.unregister)
        
        uye.roles.add(registerConfig.kadin1)    
        uye.roles.add(registerConfig.kadin1)    
        if (uye.user.username.includes(settings.tag) && !uye.roles.cache.has(registerConfig.family)) {
          uye.roles.add(registerConfig.family);
          uye.roles.add(registerConfig.family);
        } 
                      memberdb.ayarla(`kullanici.${uye}.cinsiyet`, "kadin")
        memberdb.degerekle(`isimler.${uye.id}`, {
            guildName: `${isim} | ${yas}`,
            Name: isim,
            Yetkili: yetkili.id,
            Komut: registerConfig.kadin1
        });
        memberdb.ekle(`isimmiktar.${uye.id}`, +1);
        memberdb.ayarla(`sonisim.${uye.id}`, isim);
        memberdb.ayarla(`sonyas.${uye.id}`, yas);
      } else if(cinsiyet === "isim") {
        let durum;
        if (uye.roles.cache.has(registerConfig.erkek1) && !uye.roles.cache.has(registerConfig.kadin1)) durum = registerConfig.erkek1;
        if (uye.roles.cache.has(registerConfig.kadin1) && !uye.roles.cache.has(registerConfig.erkek1)) durum = registerConfig.kadin1;
        if (!uye.roles.cache.has(registerConfig.erkek1) && !uye.roles.cache.has(registerConfig.kadin1)) durum = registerConfig.unregister;
        memberdb.degerekle(`isimler.${uye.id}`, {
            guildName: `${isim} | ${yas}`,
            Name: isim,
            Yetkili: yetkili.id,
            Komut: durum
        });
        memberdb.ekle(`isimmiktar.${uye.id}`, +1);
        memberdb.ayarla(`sonisim.${uye.id}`, isim);
        memberdb.ayarla(`sonyas.${uye.id}`, yas);
    
      }
    }   
    ////////////// KAYIT KATEGORİSİ //////////////

    
}
module.exports = registerfx;
