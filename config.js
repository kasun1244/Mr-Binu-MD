const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/982640de2d7f18fced629.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 ʜᴇʟʟᴏ ᴅᴇᴀʀ, ɪ'ᴍ ʙɪɴᴜ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ. . . 👋                                                        ɪ'ᴍ   ᴀ ʟ ɪ ᴠ ᴇ   ɴ ᴏ ᴡ . . . .🍃                                       👉 ɢʀᴏᴜᴘ - https://chat.whatsapp.com/BanbIuf6wtI14pCbtWy2i6                                          *🌹☺️ - ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ - ☺️🌹*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
