global.flok = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"Saxia","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}