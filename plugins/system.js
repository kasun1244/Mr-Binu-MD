const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["panel","infobot","status"],
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `> Uptime ► ${runtime(process.uptime())}
> Ram Usage ► ${(process.memoryUsage().helpUsed / 1024 / 1024).toFixed(2)}MB /${Math.round(require('os').totalmem / 1024 /1024)}MB
> Host Platform ► ${(os.hostname)}
> Owner ► Binuka Lasad Udayanga
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)


}
})
