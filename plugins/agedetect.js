let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .agedetect'
m.reply('Tunggu Sebentar...')
let kasan = `Umur Anda Adalah ${json.result}
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=${lolhuman}&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', `${kasan}`, m)
	
}
handler.help = ['agedetect']
handler.tags = ['maker']
handler.command = /^(agedetect)$/i
handler.limit = true

module.exports = handler