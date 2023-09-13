let handler = async(m,{text, conn}) => {
let supa = `https://api.betabotz.org/api/cecan/ryujin?apikey=${kasan}`
conn.sendFile(m.chat, supa, null, 'Ryujin Image 🖼️', fsw, adReply)
}
handler.help = ['ryujin']
handler.tags = ['internet']
handler.command = /^(ryujin|imageryujin)$/i

module.exports = handler