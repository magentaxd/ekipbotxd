const Discord = require('discord.js');

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

class GuardFx {
    static test() {
}

static closeall(obj, permes) {
    obj.roles.cache.filter(rol => rol.editable).filter(rol => permes.some(xd => rol.permissions.has(xd))).forEach(async (rol) => rol.setPermissions(0));
}

static setRoleBackup() {
    let guild = client.guilds.cache.get(settings.server);
    if (guild) {
      guild.roles.cache.filter(r => r.name !== "@everyone" && !r.managed).forEach(role => {
        let roleChannelOverwrites = [];
        guild.channels.cache.filter(c => c.permissionOverwrites.has(role.id)).forEach(c => {
          let channelPerm = c.permissionOverwrites.get(role.id);
          let pushlanacak = { id: c.id, allow: channelPerm.allow.toArray(), deny: channelPerm.deny.toArray() };
          roleChannelOverwrites.push(pushlanacak);
        });
  
      let veri = guarddb.cek(`rolebackup.${guild}.${role.id}`);
        if(!veri) { guarddb.ayarla({
          guildID: settings.server,
          roleID: role.id,
          name: role.name,
          color: role.hexColor,
          hoist: role.hoist,
          position: role.position,
          permissions: role.permissions,
          mentionable: role.mentionable,
          time: Date.now(),
          members: role.members.map(m => m.id),
          channelOverwrites: roleChannelOverwrites
          })
      }
  });
    }
  };
  }
module.exports = GuardFx;
