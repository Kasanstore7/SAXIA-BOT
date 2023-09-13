let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolhuman}&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, fsw, false, adReply)
	
}
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(jadianime)$/i
handler.limit = true

module.exports = handler