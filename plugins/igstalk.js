let fetch = require('node-fetch')
let handler = async m => {
if (!text) throw `Masukkan text nya`
  
let res = await fetch (`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=GataDios`)
let json = await res.json()
let kasan = `usernamel: ${json.result.username}
posts : ${json.result.post}
followers : ${json.result.followers}`

await conn.sendFile(m.chat, json.result.photo_profile, 'photo_profile.jpg', `${kasan}`, fgif, adReply)
}
handler.help = ['igstalk']
handler.tags = ['internet','fun']
handler.command = /^igstalk$/i

module.exports = handler

/*
  * Saxia - Md
  * Made By Saxia Team
*/