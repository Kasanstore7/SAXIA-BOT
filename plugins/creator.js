let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  let name = m.sender
    var fkonn = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {})
      },
      message: {
        contactMessage: {
          displayName: `${await conn.getName(name)}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
     }
    }
    const sentMsg = await conn.sendContact(m.chat, [
      [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `ig: @dannalwaysalone`, `DannTeam`, `danigtps@gmail.com`, `🇮🇩 Indonesia`, `📍 ${sig}`, `Name: ${namebot}`],
      [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `${namebot}`, `Available`, `🇮🇩 Indonesia`, `📍 ${sgh}`, `Jangan Lupa Donasi Kak ☺`]
    ], m)
    var caption = `👋 Halo *@${m.sender.split("@")[0]}* itu owner ${namebot}, jangan dispam yah kak`
    await conn.reply(m.chat, wait, fkonn)
    await conn.reply(m.chat, caption, sentMsg, { mentions: conn.parseMention(caption) })
}
handler.help = ['creator', 'owner']
handler.tags = ['info', 'main']
handler.command = /^(creator|owner)$/i

module.exports = handler