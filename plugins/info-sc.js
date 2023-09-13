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
                        "text": 'Hallo Semua 👋',
                        "title": '',
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
conn.sendMessage(m.chat, {
text: `Script ini dijual, jika berminat hubungi > wa.me/4915147222100`,
contextInfo: {
externalAdReply: { showAdAttribution: true, 
title: wm,
body: '@Saxia - md',
thumbnailUrl: 'https://telegra.ph/file/1dc56ff07aec80583dd12.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: ftex})
}

handler.help = ['source-code']
handler.tags = ['info']
handler.command = ['sc']
handler.limit = true
module.exports = handler