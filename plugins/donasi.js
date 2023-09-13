let handler  = async (m, { conn, usedPrefix: _p }) => {
let donasi = `–  *S E W A - B O T*
   
  ➠ Sewa 
    ┌  ◦  5k / 7 Hari
    │  ◦  10k / 15 Hari
    │  ◦  15k / 30 Hari
    └  ◦  30k / 60 Hari
  Bot masuk ke grup Kamu
    
  ➠ Premium
    ┌  ◦  10k / 30 Hari
    └  ◦  20k / 60 Hari
  Untuk mendapatkan fitur khusus Premium
  
  ➠ Pembayaran
    ┌  ◦  Pulsa : -/ belum tersedia 
    └  ◦  Dana : -/ belum tersedia 
  Metode pembayaran`

await conn.sendMessage(
    m.chat, 
    { location: { degreesLatitude: 0, degreesLongitude: 0,
name: donasi,
address: '',
url: null } }, { quoted: m })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i
module.exports = handler