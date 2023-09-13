let handler = async(m,{text, conn}) => {
let supa = 'https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=dannkristi'
conn.sendFile(m.chat, supa, null, 'Milf  Image 🖼️', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf|nsfwmilf)$/i

module.exports = handler