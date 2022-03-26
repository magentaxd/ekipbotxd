const Discord = require('discord.js');
const Veritabani = require("richard.db");
const fs = require("fs");
const moment = require('moment');
require("moment-duration-format");
require("moment-timezone");

class globalFunctions {
    static setup() {
        
    const guarddb = global.guarddb = new Veritabani("./SRC/Models/Guard.json");
    const memberdb = global.memberdb = new Veritabani("./SRC/Models/Member.json");
    const penals = global.penals = new Veritabani("./SRC/Models/Penals.json");
    const serverdb = global.serverdb = new Veritabani("./SRC/Models/Server.json");
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    console.log('\x1b[33m%s\x1b[0m', `[ PROJECT MODELS LOADED ]`)

    const registerfx = global.registerfx = require(__dirname + "/RegisterFx.js");
    const guardfx = global.guardfx = require(__dirname + "/GuardFx.js");
    const invitefx = global.invitefx = require(__dirname + "/InviteFx.js");
    const moderationfx = global.moderationfx = require(__dirname + "/ModerationFx.js");
    console.log('\x1b[33m%s\x1b[0m', `[ PROJECT FUNCTIONS LOADED ]`)

    const guardConfig = global.guardConfig = require('../Projects/Guard/guard.json');
    const inviteConfig = global.inviteConfig = require('../Projects/Invite/invite.json');
    const moderationConfig = global.moderationConfig = require('../Projects/Moderation/moderation.json');
    const registerConfig = global.registerConfig = require('../Projects/Register/register.json');
    console.log('\x1b[33m%s\x1b[0m', `[ PROJECT CONFIGS LOADED ]`)
    

    const guard = require('../Projects/Guard/Noa.js');
    const invite = require('../Projects/Invite/Noa.js');
    const moderation = require('../Projects/Moderation/Noa.js');
    const register = require('../Projects/Register/Noa.js');

    //// BOT LOGIN ////
    moderation.modOnline()
    register.regOnline()
    invite.invOnline()
    guard.grdOnline()
    //// BOT LOGIN ////
}

    static tarih() {
let aylartoplam = {
            "01": "Ocak",
            "02": "Şubat",
            "03": "Mart",
            "04": "Nisan",
            "05": "Mayıs",
            "06": "Haziran",
            "07": "Temmuz",
            "08": "Ağustos",
            "09": "Eylül",
            "10": "Ekim",
            "11": "Kasım",
            "12": "Aralık"
          };
          global.aylar = aylartoplam;
          const tarihsel = global.tarihsel = function(tarih) {
          let tarihci = moment(tarih).tz("Europe/Istanbul").format("DD") + " " + global.aylar[moment(tarih).tz("Europe/Istanbul").format("MM")] + " " + moment(tarih).tz("Europe/Istanbul").format("YYYY HH:mm")   
          return tarihci;
          };
          const sayilariCevir = global.sayilariCevir = function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          };
          const tarihhesapla = global.tarihHesapla = (date) => {
            const startedAt = Date.parse(date);
            var msecs = Math.abs(new Date() - startedAt);
          
            const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
            msecs -= years * 1000 * 60 * 60 * 24 * 365;
            const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
            msecs -= months * 1000 * 60 * 60 * 24 * 30;
            const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
            msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
            const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
            msecs -= days * 1000 * 60 * 60 * 24;
            const hours = Math.floor(msecs / (1000 * 60 * 60));
            msecs -= hours * 1000 * 60 * 60;
            const mins = Math.floor((msecs / (1000 * 60)));
            msecs -= mins * 1000 * 60;
            const secs = Math.floor(msecs / 1000);
            msecs -= secs * 1000;
          
            var string = "";
            if (years > 0) string += `${years} yıl`
            else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
            else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
            else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
            else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
            else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
            else if (secs > 0) string += `${secs} saniye`
            else string += `saniyeler`;
          
            string = string.trim();
            return `\`${string} önce\``;
          };
          
        
    }
}
module.exports = globalFunctions;
