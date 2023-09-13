let handler = async m => {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
handler.command = /^(pus|ksn|)$/i
handler.owner = true
handler.group = true
module.exports = handler