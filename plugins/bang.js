let handler = async m => {
conn.sendMessage(
    m.chat, 
    { location: { degreesLatitude: 35.685506276233525, degreesLongitude: 139.75270667105852,
name: wm,
address: 'Jadi Gini Le',
url: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz' } }, { quoted: fgif })
}
handler.command = /^(bang)$/i

module.exports = handler