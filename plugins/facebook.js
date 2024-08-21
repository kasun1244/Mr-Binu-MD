const {cmd , commands} = require('../command')
const fg = require('api-dylux')

//=========== Video DL ============

cmd({
    pattern: "fb",
    desc: "download fb",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Video Name...⚡")
const search = await ymp4(q)
const data = search.videos[0];
const url = data.url
    
//========= Download Video ==========

let down = await fg.ytmp4(url)
let downloadUrl = down.dl_url

//========== Send Video And Video Document Message ==========
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
