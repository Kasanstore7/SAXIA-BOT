let handler = async m => {
conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, caption: wm, contextInfo: global.adReply.contextInfo, }, { quoted: m})
}
handler.command = /^(mantap)$/i

module.exports = handler