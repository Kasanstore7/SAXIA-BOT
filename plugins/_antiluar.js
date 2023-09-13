let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('92' || '212')) {
   	global.db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('91' || '961')) {
   	global.db.data.users[m.sender].banned = true
   } 
    }

module.exports = handler