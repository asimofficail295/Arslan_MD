const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hFWXMrbGl0VVFYRGxDbGVINGlZOVdJbFkzVVlseHBoV0E2UjV4SHNrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGR5eE9iSnZUVVNXTXV0bDB4a1V5aVFVVnIrYitQb1JnTHZTMStvS0lUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySzF0Q3Y3ZmNxb0FpQ0ZiaCtxUGYwek5BelJZNnNTdXhoZnVHdFFmQVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzNlJFRmx4Zi9FRlp1S01pRmlDVFhPQlI0WXdGamx2eUpRNFhSRlZ2NWtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMcXQ0cldOV2tqeU1YSWduYUYrMzRVRjBsNU9ta3VLcEVSckRRcmVxblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFuOU5iUllSNkFhUXJNdzZXTGE2OUFQVVpTb0ErZjFWSjF4d0FJRG0rMkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RjYVJ3eEszLzFlUXQvT2MrK3ViMXhlT0lvL1NkU3k2QXVmOEFIZ2VFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXVvd01qRVB4Yi8ybVkzOXVGZVZKVXhHZnVnSHl3aG9KdkE5bWpaOEltMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhIa29rMXYydERmNzdSeU96b0xXSnlOL1JpbWdTWTlRV0NIMlFFN3NYRWtyeStEamh6NlF6SjRvbElDbWtEYVFnY0t2c25NaWVKWk52VTVQSkN5dmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiIrWmgrTmpMTDlFNDRBL0dQaU1iNmEwbWZqbWNOWDZJRHI2eTZma21uZ3pzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2MDcxMzY5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRThDNTQ4NDIxRTE0QzE2OTk3RDJEMDMyNzYxNkM4NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NDk2NTMyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNjA3MTM2OTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTQ4MDA3MjUyOTI4NUFBOTFFNTg3QjIyREQ1MjlDNEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDQ5NjUzMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNkdKUkxGS00iLCJtZSI6eyJpZCI6IjkyMzM2MDcxMzY5MToyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjA3OTM3MTAwMzc0MTY5OjJAbGlkIiwibmFtZSI6IkFTSU0gQUxJIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZnY2S29ERUkvOHpjUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJta2FIRk15U0ova1VKOG9Dd2l0aXhncFFTbWtvT2JzSWJsQVZMM0txc3c4PSIsImFjY291bnRTaWduYXR1cmUiOiJTVUg4Qm4wQllZcjNkNXZKeEFTb3BjYU9wTlkwNUlxNUJLWDkvR1ZtSUJJVmNYSm1xZ3JPbFFUcWUzMjFYVWFTd1lESm1XNUtLbUVXdmkwY2k0U3BBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibFRMOE85dU80cGY1bmFzN09nMzh6U0g2SDJIZStuZkxzNDVIUmkzWHprYnlHdVNVRjN2eVYvbFltTSt1UXFaTVUwSW1mZ0tEL1dzNnZlTzVGSWFFZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNjA3MTM2OTE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacEdoeFRNa2lmNUZDZktBc0lyWXNZS1VFcHBLRG03Q0c1UUZTOXlxck1QIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0OTY1MjksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjRVIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yj7zp0.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
