let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['4915147222100'],
  ['4915147222100'],
  ['491514 7222100'],
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6283824251440'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  lolhuman: 'https://api.lolhuman.xyz',
  kasan: 'https://api.betabotz.org',
}
global.APIKeys = { 
  'https://api.betabotz.org': 'kaxelRDev1228',
  'https://api.lolhuman.xyz': 'GataDios',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'SAXIA'
  var sticker_author = 'Powered By 𝘚𝘈𝘕𝘡4𝘜'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Database
global.version = '1.0.3'
global.sound = fs.readFileSync("mp3/menu.opus")
global.sessionName = //Ubah Di Main.js
global.gcbot = 'https://chat.whatsapp.com/KsflYNKrP1BnLMKHyulz'
global.instagram = 'https://instagram.com/xander'
global.namebot = 'Simple Bot WhatsApp Saxia'
global.giflogo = 'https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg'
global.thumb = 'https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg'
global.thumbnail = 'https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg'
global.giflogo2 = 'https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg'
global.qris = 'https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg'
global.wait = 'Tunggu Sebentar , permintaan Kamu Sedang Di Prosessss....'
global.btc = 'mark'
global.kasan = 'kaxelRDev1228'
global.script = 'Whatsapp : http://wa.me/4915147222100\n\nNama: Kasanudin\n*Lagian udh 2023 Masih mungut SC aja*'
global.lolhuman = 'GataDios'
global.btc = 'mark'

// Sosial Media
global.sig = 'https://instagram.com/'
global.syt = 'https://youtube.com/'
global.sgh = 'https://github.com/'
global.sgc = 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
global.swa = 'https://wa.me/-'
global.swb = '-'
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

// Pembayaran
global.pdana = '6283824251440'
global.povo = 'COMING SOON'
global.pgopay = '6283824251440'
global.pulsa = 'COMING SOON'
global.pulsa2 = 'COMING SOON'
global.psaweria = 'https://saweria.co.'
global.ptrakteer = 'https://trakteer.id.'
global.psbuzz = 'https://socialbuzz.com/'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true

// Sticker WM
global.packname = sticker_name
global.author = sticker_author
global.wm = 'SaxiaBbotzMd'
global.wm2 = 'SAXIA-MD'
global.wibs = `Wibs : ${wibs}`
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.author = 'by @𝙠𝙨𝙣𝙙𝙣'
global.packname = 'saxia - bot multi'
global.danied = '✘ 𝗘𝗥𝗥𝗢𝗥 𝟰𝟬𝟰'
global.ultahowner = '9 Agustus 2002'
global.nomorown = '4915147222100'
global.nameown = 'SAXIA - TEAM'

// Tampilan
global.htki =  '⃝▣──「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.apikey = ''

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})