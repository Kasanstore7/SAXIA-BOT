let handler = async(m,{text, conn}) => {
let supa = 'https://api.lolhuman.xyz/api/random/blackpink?apikey=echa'
conn.sendFile(m.chat, supa, null, 'blackpink Image 🖼️', m)
}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^(blackpink|imagebp|blackpinkimage)$/i

module.exports = handler