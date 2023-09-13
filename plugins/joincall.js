async function handler(m, { conn, text, usedPrefix, command }) {
 if (!text) {
 throw `Masukkan Judul!\n\nContoh: ${usedPrefix + command} tes`
 }
 var kasan = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  999999999999999999,
 title: `${text}`
 }
}
conn.relayMessage(m.chat, kasan, {})
}

handler.command = handler.help = ['joincall']
handler.tags = ['tools']
handler.premium = true

module.exports = handler