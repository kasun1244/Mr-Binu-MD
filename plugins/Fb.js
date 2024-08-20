const {cmd , commands} = require('../command')
const fbVideoDownloader = require('fb-video-downloader')

cmd({
    pattern: "fb",
    desc: "fb video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Fb URL...⚡")

    fbVideoDownloader(videoUrl, function (error, data) {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Video Data:', data);
    // data will contain the video URL and other details
};    

//========== Download Audio ==========

let down = await fbVideoDownloader(url)
let downloadUrl = down.dl_url

//========== Send Audio And Audio Document Message ==========
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
