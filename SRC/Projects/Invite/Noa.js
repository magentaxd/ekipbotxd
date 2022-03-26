const {Collection, MessageEmbed, Discord, Guild} = require('discord.js');
const Moment = require("moment");
Moment.locale("tr");
const Logs = require("discord-logs");
Logs(InviteClient);
const Invites = new Collection();



InviteClient.on("ready", () => {
    InviteClient.guilds.cache.get(settings.server).fetchInvites().then((_invite) => Invites.set(_invite.first().guild.id, _invite))
})
///////////////////////////
InviteClient.on("inviteCreate", (invite) => {
    const GuildInvites = Invites.get(invite.guild.id);
    GuildInvites.set(invite.code, invite);
    Invites.set(invite.guild.id, GuildInvites);
});

InviteClient.on("inviteDelete", (invite) => {
    const GuildInvites = Invites.get(invite.guild.id);
    GuildInvites.delete(invite.code, invite);
    Invites.set(invite.guild.id, GuildInvites);
});
///////////

InviteClient.on("guildMemberAdd", async member => {
/*    if (usedInvite === member.guild.vanityURLCode) return member.guild.kanalBul("invite-log").send(`${member} sunucuya özel davet linkini kullanarak girdi!`).catch(err => {});
      else if (inviter.id === member.id) return member.guild.kanalBul("invite-log").send(`${member} kendi daveti ile sunucuya giriş yaptı.`).catch(err => {});
*/
if (member.user.bot) return;
const Guild = member.guild;
const Fake = Date.now() - member.user.createdTimestamp < 1000 * 60 * 60 * 24 * 7;

const GuildInvites = (Invites.get(member.guild.id) || new Collection()).clone();
let Regular = 0, content;


Guild.fetchInvites().then(async (_invites) => {
    const InviteCode = _invites.find((_invite) => GuildInvites.has(_invite.code) && GuildInvites.get(_invite.code).uses < _invite.uses) || GuildInvites.find((_invite) => !_invites.has(_invite.code)) || Guild.vanityURLCode;
    Invites.set(Guild.id, _invites);

    
    if (InviteCode.inviter && InviteCode.inviter.id !== member.id) {
        memberdb.ayarla(`${member.id}.inviter`, InviteCode.inviter.id)
        if (Fake) { memberdb.ekle(`${InviteCode.inviter.id}.davet.fake`, 1); }
        else Regular = memberdb.ekle(`${InviteCode.inviter.id}.davet.orjinal`, 1); memberdb.ekle(`${InviteCode.inviter.id}.davet`, 1);
    }
    

        if (InviteCode === Guild.vanityURLCode) content = `${member} sunucuya özel davet linkini kullanarak girdi!`;
        else if (InviteCode.inviter.id === member.id) content = `${member} kendi daveti ile sunucuya giriş yaptı.`;
        else content = `${member} katıldı! **Davet eden**: ${InviteCode.inviter.tag} \`(${memberdb.cek(`${InviteCode.inviter.id}.davet.orjinal`)} davet)\` ${Fake ? ":x:" : ":white_check_mark:"}`;
        member.guild.kanalBul("invite-log").send(content).catch(() => undefined);
/*        let content1;
        if (InviteCode === Guild.vanityURLCode) content1 = `${member} **özel url** kullanarak giriş yaptı ve sunucumuzun`;
        else if (InviteCode.inviter.id === member.id) content1 = `${member} **kendi daveti** ile sunucuya giriş yaptı ve sunucumuzun`;
        else content1 = `${InviteCode.inviter} **${Regular}. davetini** gerçekleştirerek sunucumuzun`;

        const WelcomeChannel = Guild.channels.cache.get(Welcome.Channel);

        if (WelcomeChannel) WelcomeChannel.send([
            `🎉 Ashtaria'ya hoş geldin ${member}\n`,
            
            `Hesabın ${Moment(member.user.createdTimestamp).format("DD MMMM YYYY HH:mm")} (${Invite.tarihHesapla(member.user.createdAt)}) tarihinde oluşturulmuştur. ${Fake ? "🚫" : "✅ "}\n`,
                     
            `Kurallarımız <#809488909695189084> kanalında belirtilmiştir.Unutma kaydın tamamlandığında yaptığın kural dışı davranışlar kuralları okuyup kabul ettiğin varsayılarak işleme geçilecektir.\n`,

            `Sunucumuz şuanda taglı alımdadır! Tagımızı (**ム**) alarak bizlere destek olabilirsin.Yetkililerimiz sol tarafta bulunan **V.Confirmed** kanallarında seni bekliyor olacak.\n`,
            `${content1} **${member.guild.memberCount}** kişi olmasını sağladı.İyi eğlenceler! 🎉\n`
             ]);*/
});

InviteClient.on("guildMemberRemove", async member => {
    if (member.user.bot) return;
    const Fake = Date.now() - member.user.createdTimestamp < 1000 * 60 * 60 * 24 * 7;
    const Data = memberdb.cek(`${member.id}.inviter`);
    if (!Data) member.guild.kanalBul("invite-log").send(`${member} sunucudan çıktı.`);
    if (Fake) memberdb.eksilt(`${Data}.davet.fake`, 1);
    else memberdb.eksilt(`${Data}.davet.orjinal`, 1); memberdb.ekle(`${Data}.davet.quit`, 1);

    member.guild.kanalBul("invite-log").send(`${member} sunucudan çıktı. **Davet eden**: <@${Data}> \`(${memberdb.cek(`${Data}.davet.orjinal`)} davet)\``);


});



});    
  
/*
///////////////////////////
InviteClient.on("guildMemberAdd", async member => {
  let cachedInvites = guildInvites.get(member.guild.id);
  let newInvites = await member.guild.fetchInvites();
  let usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses) || cachedInvites.find(inv => !newInvites.has(inv.code)) || {code: member.guild.vanityURLCode, uses: null, inviter: {id: null}};
  let inviter = InviteClient.users.cache.get(usedInvite.inviter.id) || {id: member.guild.id};
  let isMemberFake = (Date.now() - member.user.createdTimestamp) < 7*24*60*60*1000;
  if (usedInvite === member.guild.vanityURLCode) return member.guild.kanalBul("invite-log").send(`${member} sunucuya özel davet linkini kullanarak girdi!`).catch(err => {});
    else if (inviter.id === member.id) return member.guild.kanalBul("invite-log").send(`${member} kendi daveti ile sunucuya giriş yaptı.`).catch(err => {});
  
  let davetler = memberdb.cek(`${inviter.id}.davet`);

  let davetlerim = davetler || 0;
 

 if (isMemberFake) {
member.guild.kanalBul("invite-log").send(`${member} katıldı! **Davet eden**: ${inviter.id == member.guild.id ? member.guild.name : inviter.tag} (**${(davetlerim)}** davet ❌)`).catch(err => {});
      } else {
            member.guild.kanalBul("invite-log").send(`${member} katıldı! **Davet eden**: ${inviter.id == member.guild.id ? member.guild.name : inviter.tag} (**${davetlerim +1}** davet ✅)`).catch(err => {});
                upstaffdb.ekle(`yetkili.${inviter.id}.davet`, +1)
                memberdb.ayarla(`${member.id}.daveteden`, inviter.id)
                memberdb.ekle(`{inviter.id}.davet`, 1)
                upstaffdb.ekle(`yetkili.${inviter.id}.davetpuan`, +10)
                upstaffdb.ekle(`yetkili.${inviter.id}.puan`, +10)
        };
});    
InviteClient.on("guildMemberRemove", async member => {

 
      let inviter = InviteClient.users.cache.get(member.inviterID) || {id: member.guild.id};
      let davetler = memberdb.cek(`${inviter.id}.davet`);

      let davetlerim = davetler || 0;
    member.guild.kanalBul("invite-log").send(`\`${member.user.tag}\` ayrıldı! **Davet eden**: ${inviter.id == member.guild.id ? member.guild.name : inviter.tag} (**${(davetlerim)}** davet ❌)`).catch(err => {});

                memberdb.eksilt("${inviter.id}.davet", 1)
});
///////////////////////////
*/
class InviteSetup {
    static invOnline() {
        InviteClient.login(conf.invite)
}

};
module.exports = InviteSetup;
