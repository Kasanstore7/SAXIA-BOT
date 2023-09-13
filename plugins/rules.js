let handler = async m => {
conn.reply (m.chat, rules, fgif, adReply)
}
handler.command = /^(rules)$/i

module.exports = handler