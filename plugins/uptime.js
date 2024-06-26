let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

 let message = {
 interactiveMessage: {
  type: 2,
    body: {
     text: '',
      options: [],
  },

     footer: {
         text: `Aktif Selama: ${uptime}`
    },
          nativeFlowMessage: {},
                },
              };

conn.relayMessage(m.chat, message, {})
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}