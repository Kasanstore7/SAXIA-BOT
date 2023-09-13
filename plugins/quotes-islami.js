var fs = require('fs')
var fetch = require('node-fetch');
var util = require('util');
 text, 


async function handler(m) {
  var dann = await fetch(`https://api.lolhuman.xyz/api/quotes/islami?apikey=gunturganteng`)
  var res = await dann.json()
  var hasil = `Quotes Islami`
  await m.reply(res)
}

handler.command = handler.help = ['qislami']
handler.tags = ['internet']

module.exports = handler