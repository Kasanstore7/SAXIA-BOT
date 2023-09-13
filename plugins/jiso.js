let handler = async(m,{text, conn}) => {
let supa = 'https://api.betabotz.org/api/cecan/jiso?apikey=kasanLovetiara'
conn.sendFile(m.chat, supa, null, 'jiso Image 🖼️', m)
}
handler.help = ['jiso']
handler.tags = ['internet']
handler.command = /^(jiso|imagejiso)$/i

module.exports = handler