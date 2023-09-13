let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.botcahx.live/api/nsfw/${command}?apikey=ReellyXD')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nih Kak', m)
}
handler.help = ['gay', 'ahegao', 'ass', 'bdsm', 'blowjob', 'cuckold', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'gifs', 'jahy', 'manga', 'mastrubation', 'nekopoi', 'nekopoi2', 'orgy', 'panties', 'pussy', 'tentacles', 'yuri', 'thighs', 'zettai']
handler.tags = ['nsfw']
handler.command = /^(gay|ahegao|ass|bdsm|blowjob|cuckold|cum|ero|erok|femdom|foot|gangbang|glasses|hentai|gifs|jahy|manga|masturbation|nekopoi|nekopoi2|orgy|panties|pussy|tentacles|yuri|thighs|zettai)$/i
handler.premium = true

module.exports = handler