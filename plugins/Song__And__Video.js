const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Song Name...⚡")
const search = await yts(q)
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

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//========== Send Audio And Audio Document Message ==========
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=========== Video DL ============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Video Name...⚡")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
𝗕𝗜𝗡𝗨 𝗠𝗗 𝗕𝗢𝗧 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥...🌟

*Title* ► ${data.title}

*Description* ► ${data.description}

*Time* ► ${data.duration}

*Ago* ► ${data.ago}

*Views* ► ${data.views}

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙɪɴᴜ ᴍᴅ`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});    

//========== Download Video ==========

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//========== Send Video And Video Document Message ==========
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/md4",fileName:data.title + ".mp4"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})



