/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/6282113821188
   * Follow https://github.com/nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['0640164197']
global.ownernomer = "0640164197"
global.premium = ['6285875158363']
global.packname = 'Sticker By'
global.author = 'Ken_kaneki Dev'
global.sessionName = 'Ken_kaneki'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Bot must be admin in Group!',
    botAdmin: 'Bot Must Be Admin First',
    premime: 'Special Premium Features If you want to register, type rent / chat owner',
    owner: 'Sorry it can only be used by Owner',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Special Features for Bot Number Users',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Maybe Invalid Apikey!',
    errmor: 'System Error',
    endLimit: 'Your Daily Limit Has Been Expired, The Limit Will Reset Every 12 Hours',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/Cp1OJenk6Q9D9vgLjLU558"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Ken_kaneki'
global.akulaku = 'Bot By Ken'
global.ytname = 'Ůhm modding pro'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
}
