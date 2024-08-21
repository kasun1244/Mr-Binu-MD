const {cmd , commands} = require('../command')
import fg from 'api-dylux';
cmd({
    pattern: "facebook",
    desc: "download facebokk",
    category: "download",
    filename: __filename
},
const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `✳️ කරුණාකර ෆෙස්බුක් වෙබ් ලිපිනය යොදන්න / Please send the link of a Facebook video\n\n📌 EXAMPLE :\n*${usedPrefix + command}* https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '⚠️ කරුණාකර වලංගු වෙබ් ලිපිනයක් යොදන්න /PLEASE GIVE A VALID URL.';
  };

  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
⊱ ─── {* AVI FBDL*} ─── ⊰
↳ *VIDEO TITLE:* ${result.title}
⊱ ────── {⋆♬⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
  } catch (error) {
    console.log(error);
    m.reply('⚠️කරුණාකර නැවත උත්සහ කරන්න / An error occurred while processing the request. Please try again later.');
  }
};
}catch(e){
console.log(e)
reply(`${e}`)
})
