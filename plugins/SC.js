let fs = require('fs')
let handler = async (m, { conn }) => {
const tes = 'ywdh sih',
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./image/3SBot.jpg')}}
	}
conn.reply(m.chat, tes, fcon) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(tesss)$/i

module.exports = handler