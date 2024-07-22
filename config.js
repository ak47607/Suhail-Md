const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/a858e965e25060d93e9c8.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Akash:akash@cluster0.ilcd2ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/K6OVW2JLF6DTI1";
global.website=process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a858e965e25060d93e9c8.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𐌀ӄꍏรʜ↦↦↦↦↦" 


global.devs = "919064560840" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919064560840";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064560840";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/a858e965e25060d93e9c8.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "91xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_41_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpTelF1dTA1MjVJNkJ5UzYyV1lrTHpEMmZjaFJqVSt3Wk4zQzNlaXAvcjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDY0NTYwODQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRjgxNDFFNzU4NzNDOTNFQThBNzlGOTFGODUwNkE4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0OTAwODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkwNjQ1NjA4NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNDMzFDQjNERDY5QTNGRjhCREU0MjVBNDk1OTZBQkREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ5MDA4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJReF95MnN2WFQ0NjBzQ2NLLWdhbTFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3YzM3NzQ5LWQ1YjMtNDAzNi1hM2M1LWIyMjZkMjhkZTljY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAyMixcbiAgICAgIDI1MixcbiAgICAgIDExMSxcbiAgICAgIDIwNSxcbiAgICAgIDIzMixcbiAgICAgIDE3MSxcbiAgICAgIDEyNCxcbiAgICAgIDMwLFxuICAgICAgMTUwLFxuICAgICAgMTQ3LFxuICAgICAgMTk1LFxuICAgICAgMjAsXG4gICAgICAxOTEsXG4gICAgICAyMyxcbiAgICAgIDc4LFxuICAgICAgMjQxLFxuICAgICAgMTI3LFxuICAgICAgMjMyLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDUwLFxuICAgICAgMjI4LFxuICAgICAgMjAzLFxuICAgICAgNjYsXG4gICAgICAyNTUsXG4gICAgICAxNzMsXG4gICAgICAyMTYsXG4gICAgICAxMzksXG4gICAgICAxMTYsXG4gICAgICA2NSxcbiAgICAgIDUzLFxuICAgICAgODgsXG4gICAgICAxMCxcbiAgICAgIDIxNCxcbiAgICAgIDU0LFxuICAgICAgNjYsXG4gICAgICA5NyxcbiAgICAgIDQzLFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw2SFBBWldRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwNjQ1NjA4NDA6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwkIyA04TqjY/guKPKnOKGpuKGpuKGpuKGpuKGplwiLFxuICAgIFwibGlkXCI6IFwiNzAyNTMxOTk1MDMzNzg6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9scDdrSEVKNjE3N1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzclhyS3kyTnRhUDZyNE8xSE16KzZqOGZGM2dXYjVlNjY1RjMyTmUweUZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlB2RjhrUmZzZWNXZTV1cGV2N2JsNHQ5amZMMEI2ZHprSlNPRGxxZDcya0tGMU43QjV1ZHJuNW1ObHA5N3puUmZ4dXJCdVllYzZHeTE2QzF5blh1dkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9VS21IaEgxSDdSWkg2N1FGOW1oR0l2M2FObHNRZzZxOXV5VmhCSTNuN2pmK0NlSGlieXhpNkNYMTc1Uy93aWlIQk15d1FLckVpOGpUVm9nZ0NUL2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTA2NDU2MDg0MDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTAwODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxZWS5qc29uIjogIntcImtleURhdGFcIjpcIk56SUgwNkdmQ1hHbjRxWmwwQlowTVN1ZFpNMUYwK29zVko2cS9FRlltdjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5OTIzNzgzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDg5NjQzNDkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Hey I am here to help you." , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "AKASH",
  packname: process.env.PACK_NAME || "AKASH-XD",
  botname : process.env.BOT_NAME  || "⏤͟͟͞͞★͙≛͙⃝͙♥️𐌀ӄꍏรʜ↦↦↦↦↦",
  ownername:process.env.OWNER_NAME|| "𐌀ӄꍏรʜ↦↦↦↦↦",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
