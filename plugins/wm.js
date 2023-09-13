let handler = async m => {
let fkonn = { key: { fromMe: false, Participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '4915147222100@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${awaitg conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
conn.reply (m.chat, wm, fkonn, adReply)
}
handler.command = /^(wmbot)$/i
handler.tags = ['main']
handler.limit = true

module.exports = handler