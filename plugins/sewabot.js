let handler = async m => {
conn.reply (m.chat, sewabot, fgif , adReply)
}
handler.command = /^(sewabot|sewa|belibot)$/i
handler.tags = ['main']
handler.limit = true

module.exports = handler