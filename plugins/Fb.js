const {cmd , commands} = require('../command')
const getFbVideoInfo = require('fb-downloader-scrapper')

cmd({
    pattern: "fb",
    desc: "fb video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Song Name...⚡")
const search = await getFbVideoInfo(q)
const data = search.videos[0];
const url = data.url

let desc = `
𝗕𝗜𝗡𝗨 𝗠𝗗 𝗕𝗢𝗧 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥...🌟

*Title* ► ${data.title}

*Description* ► ${data.description}

*Time* ► ${data.duration}

*Ago* ► ${data.ago}

*Views* ► ${data.views}


𝑃𝑂𝑊𝐸𝑅𝐸𝐷 𝐵𝑌 𝐵𝐼𝑁𝑈𝐾𝐴
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});    

//========== Download Audio ==========

let down = await fg.getFbVideoInfo(url)
let downloadUrl = down.dl_url

//========== Send Audio And Audio Document Message ==========
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
