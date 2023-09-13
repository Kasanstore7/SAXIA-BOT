let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/5c9caade0871ea9ed3a85.png', m, { packname: "wa.me/4915147222100", author: "KASANUDIN\n@Kasan" })
}

handler.customPrefix = /^(@6285641142178|@62857754963046)$/i
handler.command = new RegExp

module.exports = handler