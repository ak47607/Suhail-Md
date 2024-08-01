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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_05_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSTEZNUklmVndZa2FMcGxIL1lFRE84NlF6UkhrNEd1L0gybEM5eExWenZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTA2NDU2MDg0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOURCQjM0MzFBRjQzODZERTFBRjQxOUM1RTM0QkJGREVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTI0NzQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDY0NTYwODQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRUM5RTQ4Q0MwMTkwOTIzNEM3REYxQ0ZFQThCMTA0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MjQ3NDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczBSZGpaTzRSQVduSHdvWk5pNDlVd1wiLFxuICBcInBob25lSWRcIjogXCI5ZjJlOTY3OS0xNDI4LTRjZGMtOTBlYS1mNTgyNGE1MGIwODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAyMDAsXG4gICAgICAyLFxuICAgICAgOTMsXG4gICAgICAxMDQsXG4gICAgICAyNDQsXG4gICAgICAyNDEsXG4gICAgICAyMDgsXG4gICAgICA1NSxcbiAgICAgIDI1MyxcbiAgICAgIDE5NixcbiAgICAgIDEwMixcbiAgICAgIDEzOSxcbiAgICAgIDE1OSxcbiAgICAgIDE4NixcbiAgICAgIDgsXG4gICAgICAyNTEsXG4gICAgICAxNDMsXG4gICAgICA5NCxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxMTIsXG4gICAgICAxNDAsXG4gICAgICAxOTYsXG4gICAgICAxMjQsXG4gICAgICAxNDMsXG4gICAgICAxMzAsXG4gICAgICAxNDUsXG4gICAgICAxMzMsXG4gICAgICAxNDQsXG4gICAgICA3MCxcbiAgICAgIDI0NCxcbiAgICAgIDIzNCxcbiAgICAgIDE4MCxcbiAgICAgIDIxMCxcbiAgICAgIDI0MyxcbiAgICAgIDczLFxuICAgICAgMTc3LFxuICAgICAgMTc1LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1dSQ040RjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTA2NDU2MDg0MDo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCQjIDThOqNj+C4o8qc4oam4oam4oam4oam4oamXCIsXG4gICAgXCJsaWRcIjogXCI3MDI1MzE5OTUwMzM3ODo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUERpbFVRd3NpdXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIms5MCsrWE9IR1REeldWK0E1L0VJUmVnUUZxZHo4L3VlR1ZZajRXOTY5ejQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaDAwYmVLNUYrY3ZqUExNWFljL2tTUGJUVm05NXp1eHlXTUpTeFdDZko2aVhGQ1Nqd1ZnNVBLR1NvVGQ1ajg1V2p5ak83ajZoOXRjcFNleFFmQmhKQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSGg2SVFJZlhXUnE4elNlYmJQajJSdXlXTndMWlJFeXFGYzdBdmZLdTdTMi9henliMm5mOWg4cUY4WVNmQitNZ0U0M0xPL3dzcGZyQ3RCbGRLZkRWaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MDY0NTYwODQwOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUyNDc0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdWblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1ZuLmpzb24iOiAie1wia2V5RGF0YVwiOlwia3RyR0l3bGZHNHVuVWdoR2ttL0ZpZmE5M3RET2RBejVvUEFyeWVoVXFiOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg0MzAzNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUyNDc0NDA2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
