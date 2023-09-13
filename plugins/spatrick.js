let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://api.lolhuman.xyz/api/sticker/patrick?apikey=gunturganteng', m, { packname: "wa.me/4915147222100", author: "KASANUDIN\n@Kasan" })
}

handler.customPrefix = /^(spatrick|stickerpatrick)$/i
handler.command = new RegExp

module.exports = handler