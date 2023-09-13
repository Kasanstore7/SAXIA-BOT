let handler = async(m,{text, conn}) => {
let supa = `https://api.betabotz.org/api/cecan/china?apikey=${kasan}`
conn.sendFile(m.chat, supa, null, 'china Image 🖼️', m)
}
handler.help = ['china']
handler.tags = ['internet']
handler.command = /^(china|imagechina|cina)$/i

module.exports = handler