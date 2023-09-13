let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .facedetect' 
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/facedetect?apikey=${lolhuman}&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', namebot, m)
	
}
handler.help = ['facedetect']
handler.tags = ['maker']
handler.command = /^(facedetect|deteksiwajah)$/i
handler.limit = true

module.exports = handler