var fetch = require('node-fetch')

async function handler(m) {
  var dann = await fetch(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolhuman}`)
  var res = await dann.json()
  var hasil = `Title: *${res.result.title}*\nCreator: *${res.result.creator}*\n\n${res.result.cerpen}`
  await m.reply(m.chat, hasil, fgif, adReply)
}

handler.command = handler.help = ['cerpen']
handler.tags = ['internet']

module.exports = handler