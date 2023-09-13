let didyoumean = require('didyoumean')
let similarity = require('similarity')

let handler = m => m

handler.before = function (m, { match, usedPrefix, text, args }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let kasan = `• Halo Kak @${m.sender.split`@`[0]}  Apakah Anda sedang mencari ${usedPrefix + mean} ? 

 ◦ Nama menu: *${usedPrefix + mean}* 
 ◦ Kempiripan: *${parseInt(som)}%*`
	 if (mean) this.sendMessage(m.chat, {
text: kasan,
contextInfo: {
externalAdReply: {
title: 'Apakah Benar',
body: '>SaxiaMiaw',
thumbnailUrl: 'https://i3.wp.com/tmpfiles.org/dl/2111435/tmp.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: ftroli})
	}
  }

module.exports = handler

/*
  * Saxia - Md
  * @Kasanudin
*/