const {cmd , commands} = require('../command')
const fg = require('api-dylux')

cmd({
    pattern: "fb",
    desc: "downloa songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Song Name...⚡")
const search = await fg.fbdl(q)
const data = search.videos[0];
const url = data.url

let desc = `
𝗕𝗜𝗡𝗨 𝗠𝗗 𝗕𝗢𝗧 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥...🌟

*Title* ► ${data.title}

*Description* ► ${data.description}

*Time* ► ${data.duration}

*Ago* ► ${data.ago}

*Views* ► ${data.views}

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙɪɴᴜ ᴍᴅ`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});    

//========== Download Audio ==========

let down = await fg.fbdl(url)
let downloadUrl = down.dl_url

//========== Send Audio And Audio Document Message ==========
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
