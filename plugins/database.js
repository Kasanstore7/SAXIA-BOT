let handler = async m => {
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let kasan = `*Database Saat Ini ${totalreg} User*\n*Terdaftar Saat ini ${rtotalreg} User*`

conn.reply (m.chat, kasan, fgif, adReply)
}
handler.command = /^(user)$/i

module.exports = handler