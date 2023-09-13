var fs = require('fs')
var fetch = require('node-fetch');
var util = require('util');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var ftex = {
            key: { 
                 fromMe: false,
                 remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
            message: { 
               "extendedTextMessage": {
                        "text": 'Module Chat GPT-4',
                        "title": 'Openai Chat By Saxia',
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
  var js = await fetch(`https://api.betabotz.org/api/search/openai-chat?text=${text}&apikey=${kasan}`)
var json = await js.json()
try {
  await conn.reply (m.chat, json.message, fgif, adReply)
} catch (err) {
m.reply(util.format(js))
}}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['info'];
handler.limit = 3
module.exports = handler;