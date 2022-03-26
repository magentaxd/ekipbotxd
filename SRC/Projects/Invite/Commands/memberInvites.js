const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(InviteClient , message, args) => {

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let fake = memberdb.cek(`${member.id}.davet.fake`) || 0; 
let regular = memberdb.cek(`${member.id}.davet.orjinal`) || 0; 
let quit = memberdb.cek(`${member.id}.davet.quit`) || 0; 
invitefx.embedOlustur(message.author, message.channel, `${member} kullanıcısının davet istatisikleri aşağıda belirtilmiştir;

:white_check_mark: Başarılı Davetleri: \`${regular}\`
:x: Başarısız Davetleri: \`${fake}\`
:x: Çıkan Davetleri: \`${quit}\``, "RANDOM")};

module.exports.inviteconfig = {
    name: "invite",
    aliases: ["inv", "invite", "davetlerim", "davetler", "davetsayim","me"],
    usage: "Taslak",
    description: "Taslak Komutu."
};