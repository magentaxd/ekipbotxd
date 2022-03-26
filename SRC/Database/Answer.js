class richardReply {
    static replySetup() {       
         const answer = global.answer = {
noyt:          "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.",
rolyok:        "Kontrol etmek istediğin rolün ID'sini yazman veya etiketlemen gerekir.",
yetersizyaş:   `Belirtilen üyenin yaşı yaş sınırının (${registerConfig.minyas}) altında olduğu kayıt işlemi gerçekleştirilemiyor.`,
taglıalım:     `Sunucumuz taglı alımda olduğu için belirtilen üyenin adında \`${settings.tag}\` tagı bulunmadığı için kayıt işlemi gerçekleştirilemiyor.`,
isimapi:       `Girdiğiniz isim 32 karakterden fazla olduğundan dolayı işlem gerçekleştirilemiyor.`,
hatalikullanim: `Komutu doğru kullanmalısın.`
    }
    }
}
module.exports = richardReply;
