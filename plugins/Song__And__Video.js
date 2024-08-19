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
if(!q) return reply("Please Give Me Your Song Name Or Song URL...☄️")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎵 *<│ᴹᴿ 𝗕 𝗜 𝗡 𝗨 🐰💙 BOT SONG DOWNLOADER* 🎵

Title: ${data.Title}


`

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})



