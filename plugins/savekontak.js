let handler = async (m, { conn, participants, groupMetadata }) => {
const mem = await (await conn.groupMetadata(m.chat)).participants.map(v => v.id)
let txt = ''
mem.forEach(function (x) {
  const vcard = [
                      "BEGIN:VCARD",
                      "VERSION:3.0",
                      `FN:${conn.getName(x)}`,
                      `TEL;type=CELL;type=VOICE;waid=${
                        x.split("@")[0]
                      }:+${x.split("@")[0]}`,
                      "END:VCARD",
                      "",
                    ].join("\n");
                    txt += vcard;
})
return conn.sendMessage(m.chat, { document: Buffer.from(txt, 'utf-8'), caption: `Total Kontak ${participants.length}`, fileName: "contacts.vcf", mimetype: "text/vcard" }, { quoted: fsw })
}
handler.menu = ['savekontak']
handler.tags  = ['main']
handler.group = true
handler.command = /^(savekontak)$/i

handler.limit = false

module.exports = handler