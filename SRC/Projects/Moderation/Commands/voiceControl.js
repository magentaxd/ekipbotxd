const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(ModerationClient , message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let mikdurum;
let kulaklikdurum;
let user = message.guild.member(member)
if (!user) return moderationfx.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`Örnek: ${settings.prefix || '.'}nerede @Noâ/ID\``).sil(10000);
if(user === message.member) return moderationfx.embedHata(message.author, message.channel, `Moderasyon komutlarını kendi üstünde kullanamazsın!`).sil(10000);
let ses = user.voice.channel
let limit = ses.userLimit
let sesx = message.guild.members.cache.filter(x => x.voice.channel && x.voice.channel.id === ses.id).size
if ((member.voice.selfMute) || (member.voice.serverMute)) mikdurum = "- Mikrofonu Kapalı Durumda";
    else mikdurum = "+ Mikrofonu Açık Durumda";

    if ((member.voice.selfDeaf) || (member.voice.serverDeaf)) kulaklikdurum = "- Kulaklığı Kapalı Durumda";
    else kulaklikdurum = "+ Kulaklığı Açık Durumda";
let izin = sesx >= limit ? "+ Oda Hakkında Bilgiler":"+ Oda Hakkında Bilgiler"
if(!limit) izin = '+ Oda Hakkında Bilgiler'
if(sesx == limit) izin = '- Oda Hakkında Bilgiler'
let yersayisi = limit - sesx;
let sestekiler = message.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === ses.id && s.id !== user.id).map(s => `${s.displayName} - ${s.id}`)
moderationfx.embedOlustur(message.author, message.channel, `${emojis.onay} Selam \`${message.member.displayName}\`, İstediğin  ${member} üyesinin ses bilgileri aşağıda belirtilmiştir.
\`\`\`diff
• Kullanıcı ${ses.name} adlı kanalda bulunuyor!

${mikdurum}
  > Sunucu Susturuması: ${member.voice.serverMute ? "Susturulmuş":"Susturulmamış"}
  > Kişisel Susturması: ${member.voice.selfMute ? "Susturmuş":"Susturmamış"}

${kulaklikdurum}
  > Sunucu Sağırlaştırması: ${member.voice.serverDeaf ? "Sağırlaştırılmış":"Sağırlaştırılmamış"}
  > Kişisel Sağırlaştırması: ${member.voice.selfDeaf ? "Sağırlaştırmış":"Sağırlaştırmamış"}

${izin}
  > Odadaki Üye Limiti: ${limit || `Sınırsız`}
  > Odadaki Üye Sayısı: ${sesx} 
  > Odadaki Yer Sayısı: ${yersayisi || `Oda Dolu`}
 
\`\`\`
\`\`\`md
# Odadaki Bazı Kişiler;

${sestekiler.join('\n') || 'Odada başka birisi bulunmuyor.'}
\`\`\`
`, "RANDOM")

  };

module.exports.config = {
    name: "voicecontrol",
    aliases: ["ses", "nerede"],
    usage: "Taslak",
    description: "Taslak Komutu."
};