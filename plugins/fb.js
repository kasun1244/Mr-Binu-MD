const {cmd , commands} = require('../command')
const fg = require('api-dylux')


cmd({
    pattern: "tiktok",
    desc: "download tiktok",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your URL...⚡")
const search = await tiktok(q)
const data = search.videos[0];
const url = data.url

//========== Download Audio ==========

let down = await fg.tiktok(url)
let downloadUrl = down.dl_url

//========== Send Audio And Audio Document Message ==========
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
