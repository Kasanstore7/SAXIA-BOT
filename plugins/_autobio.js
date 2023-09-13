let fs = require('fs');
let moment = require('moment-timezone');
let handler = m => m;

handler.all = async function (m) {
	let user = global.db.data.users[m.sender];
	let setting = db.data.settings[this.user.jid];

	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000;
		let uptime = clockString(_uptime);
		const ultah = new Date('Agustus 30, 2023 23:59:59');
		const sekarat = new Date().getTime();
		const Kurang = ultah - sekarat;
		const ohari = Math.floor(Kurang / (1000 * 60 * 60 * 24));
		const ojam = Math.floor(Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		const onet = Math.floor(Kurang % (1000 * 60 * 60) / (1000 * 60));
		const detek = Math.floor(Kurang % (1000 * 60) / 1000);
		let wm = 'Made By Kasan';
		let today = moment().tz('Asia/Jakarta').format('DD MMMM YYYY');
		let currentTime = moment().tz('Asia/Jakarta').format('HH:mm:ss');
		let bio = `Saxia - Md \n🗓️Kalender ${today} | 🕕Waktu Wib ${currentTime} |\n📶 Aktif selama ${uptime} |\n◻️ Mode: ${global.opts['self'] ? 'Private' : setting.self ? 'Private' : global.opts['gconly'] ? 'Hanya Grup' : 'Publik'} |\n 👥Total Pengguna: ${Object.keys(global.db.data.users).length}`;

		await this.updateProfileStatus(bio).catch(_ => _);
		setting.status = new Date() * 1;
	}
};

function clockString(ms) {
	let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
	let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
	let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

module.exports = handler;