var nodeF = require("node-fetch");

var handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
  if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("*Please wait..*");
  
  var apiKey = global.APIKeys['https://api.betabotz.org'];
  var tioxd = await nodeF(`https://api.betabotz.org/api/download/tiktok?url=${args[0]}&apikey=${kasan}`);
  if (!tioxd.ok) throw await tioxd.text();
  var tiodl = await tioxd.json();
  if (!tiodl.status) throw tiodl;
  var { video, video2, username, nickname, like, share, comment, description, audio } = tiodl.result;
  
  await conn.sendFile(
    m.chat,
    video,
    "tiovid.mp4",
    `*© Powered By* Saxia-Md`,
    fgif,
    false,
    adReply 
  );
  
  conn.sendFile(m.chat, audio, "tok2.opus", null, m);
};

handler.help = ['tiktok'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(tiktok|tik|tok|tete|tt|\?)$/i;
handler.limit = true;

module.exports = handler;