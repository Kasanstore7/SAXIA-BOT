let fetch = require('node-fetch');

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) throw `*🚩 Contoh:* ${usedPrefix + command} Vivo V7`;  
  let teks = '';
    try {
      m.reply(wait)      
        const api = await fetch(API('kasan', '/api/webzone/gsmarena', { query: `${text}`, apikey: kasan }));
        let json = await api.json();
        let res = json.result.fitur;
        for (let i in res) {
          teks += `${res[i].desc}\n`;
        }
        for (let i in json.result.spek) {
          let spec = json.result.spek[i];
          teks += `${spec.name}\n`;
          teks += `*Specification :* ${spec.fitur}\n\n`;
        }
        teks += `*Priview :* ${json.result.img}\n\n`;
        await conn.relayMessage(m.chat, {
          extendedTextMessage: {
            text: teks,
            contextInfo: {
              externalAdReply: {
                title: 'Spesifikasi Handphone',
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                thumbnailUrl: json.result.img,
                sourceUrl: '',
              }
            },
            mentions: [m.sender]
          }
        }, {});
  } catch (e) {
    throw `🚩 *Gagal Memuat Data!*`;
  }
};

handler.command = handler.help = ['spek','gsmarena','spesifikasi'];
handler.tags = ['internet'];
handler.premium = false;
handler.group = false;
handler.limit = true

module.exports = handler;