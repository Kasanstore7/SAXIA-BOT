let handler = async(m,{text, conn}) => {
let supa = `https://api.betabotz.org/api/cecan/korea?apikey=${kasan}`
conn.sendFile(m.chat, supa, null, 'Korea Image 🖼️', fsw, adReply)
}
handler.help = ['korea']
handler.tags = ['internet']
handler.command = /^(korea|imagekorea)$/i

module.exports = handler