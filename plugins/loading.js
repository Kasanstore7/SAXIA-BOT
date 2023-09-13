(async() => {
const arr = [
  "Loading... 0%",
  "Loading... 10%",
  "Loading... 20%",
  "Loading... 30%",
  "Loading... 40%",
  "Loading.. 60%",
  "Loading 100%",
  "Berhasil"
];

const { key } = await conn.sendMessage(m.chat, { text: 'Trend Kontol Please Wait...' });

for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await conn.sendMessage(m.chat, { text: arr[i], edit: key });
}})()
}
handler.command = /^(loading)$/i

module.exports = handler