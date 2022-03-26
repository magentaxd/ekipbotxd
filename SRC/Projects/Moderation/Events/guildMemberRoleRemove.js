const Discord = require("discord.js");
const fs = require("fs");
const logs = require('discord-logs');
logs(ModerationClient)
module.exports = async (member, role) => {
    let atilanAy = moment(Date.now()).format("MM");
    let saat = parseInt(moment(Date.now()).format("HH"))+3;
    let dakika = moment(Date.now()).format("mm");
    let atilanSaat = `${saat}:${dakika}` 
    let atilanYıl = moment(Date.now()).format("YYYY");
    let atilanGün = moment(Date.now()).format("DD");
    let tarihxd = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
    console.log("qwe mwe kardeşim")
        const Log = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(audit => audit.entries.first());
        if (!Log || !Log.executor || Log.createdTimestamp < (Date.now() - 5000) || member.guild.roles.cache.get(role.id).position < member.guild.roles.cache.get(regiserConfig.register).position) return;
        memberdb.ekle(`rolsayi_${member.id}`, +1)
        memberdb.degerekle(`rollogu.${member.id}_qwe`, {
        verilenrol: role.id,
        emoji: emojis.hata,
        roldurum: "alındı",
        yetkili: Log.executor.id,
        tarih: tarihxd
        })
     }; 
  module.exports.config = {
      name: "guildMemberRoleRemove"
    }