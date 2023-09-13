let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  const ftex = {
            key: { 
                 fromMe: false,
                 remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
            message: { 
               "extendedTextMessage": {
                        "text": 'Hallo Kak 👋',
                        "title": '',
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
conn.sendMessage(m.chat, {
text: `Ada Apa kak Manggil Owner Saia?`,
contextInfo: {
externalAdReply: { showAdAttribution: true, 
title: 'Jangan Apa Kali',
body: '@Kxl',
thumbnailUrl: 'https://telegra.ph/file/921583d695e3717be593f.png',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: ftex})

conn.reply(m.chat, `Sayang ada yang nyariin kamu nih @${global.owner[0]}`);
}
handler.customPrefix = /^(?:.*\b(sann|san|kasan|kaxel|Kasanudin|xel|@⁨San Diego⁩|leo|ryota)\b.*)$/i;

handler.command = new RegExp(/^.*$/, 'i');
handler.limit = false;

module.exports = handler;