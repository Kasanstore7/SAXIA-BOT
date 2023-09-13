const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://www.capcut.com/template-detail/7270686022374149378?template_id=7270686022374149378&share_token=178af2cb-8e25-404f-8532-2b9fa02d1fa3&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1/`;
  if (!args[0].match(/capcut/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("Tunggu sebentar...");  
		const url = args[0];
		const apis = await fetch(API('kasan', '/api/download/capcut', { url: url, apikey: kasan }));
		if (!apis.ok) throw await apis.text()
var jsons = await apis.json()
if (!jsons.status) throw jsons
var { 
video_ori, 
title,
description,
audio
} = jsons.result
await conn.sendFile(m.chat, video_ori, 'capcut.mp4', `
*Deskripsi*: ${description}
\n*Title*: ${title}`, m)
};
handler.help = ['capcut']
handler.command = /^(capcut|cc|capcutdl|capcutnowm|dlcc)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;