/*
Thanks To Tio
*/

const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(API('kasan', '/api/tools/remini', { url: `${out}`, apikey: kasan }));
       const image = await api.json();
       const { url } = image 
       conn.reply (m.chat, wait, m)
       conn.sendFile(m.chat, url, null, wm, ftr, false, adReply);
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi.`);
  }
}

handler.help = ['remini'];
handler.tags = ['tools'];
handler.command = /^(remini|hdr|hd|tiara)$/i
handler.premium = false;
handler.limit = false;

module.exports = handler;