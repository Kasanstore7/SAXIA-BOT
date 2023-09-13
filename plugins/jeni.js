let handler = async(m,{text, conn}) => {
let kasan = 'https://api.betabotz.org/api/cecan/jeni?apikey=kasanLovetiara'
conn.sendFile(m.chat, kasan, null, 'jeni Image 🖼️', m)
}
handler.help = ['jeni']
handler.tags = ['internet']
handler.command = /^(jeni|imagejeni)$/i

module.exports = handler