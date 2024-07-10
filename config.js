const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "919064560840" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "9064560840";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064560840";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx,91xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_07_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnWmFUQzlBb1l3d3hYcUpiaGpZWGk4STBjV1huWWlONXhtY1I0TUlrU0hzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTA2NDU2MDg0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREE4OUM5ODFFRDRCQjVFMDU2QkI5OEIxNEIyNDYyQzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjA2MDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDY0NTYwODQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MEI2OEVEQjlGRjBEMTIxQkMyRjhERkE3MTREODc3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MDYwNDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmhXRTdic3RSLS1pQnQ4amowaEQ4UVwiLFxuICBcInBob25lSWRcIjogXCI2ZmRhNjZlMi0yZTBhLTQ1ZjYtOTI0Zi05YmYyZTJlZWFjMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDk3LFxuICAgICAgNjAsXG4gICAgICAxMDgsXG4gICAgICAxMjUsXG4gICAgICAyNTAsXG4gICAgICA2MixcbiAgICAgIDY4LFxuICAgICAgNzcsXG4gICAgICAxODIsXG4gICAgICA4MyxcbiAgICAgIDE5NCxcbiAgICAgIDE1MyxcbiAgICAgIDIzMyxcbiAgICAgIDI0MixcbiAgICAgIDIxNyxcbiAgICAgIDE5NixcbiAgICAgIDEyMyxcbiAgICAgIDIyNyxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDE3LFxuICAgICAgMjM4LFxuICAgICAgMTkzLFxuICAgICAgMjksXG4gICAgICAyMzEsXG4gICAgICAxOTYsXG4gICAgICAyMjIsXG4gICAgICAxMTUsXG4gICAgICAyMTYsXG4gICAgICAyMzAsXG4gICAgICAyNDQsXG4gICAgICA2MCxcbiAgICAgIDMxLFxuICAgICAgNzUsXG4gICAgICAxMDYsXG4gICAgICAxMjQsXG4gICAgICAxMzgsXG4gICAgICAyMSxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJCRFkzSDFOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwNjQ1NjA4NDA6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcwMjUzMTk5NTAzMzc4OjQ1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKPpM2fzZ7Nn82e4piFzZniiZvNmeKDnc2Z4pml77iP8J2QkvCdkIrwnZCE8J2Qk/CdkI7wnZCRIC3wnZCX8J2Qg+KcqOKDneKDqlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1WTdmUURFTkM2dWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjRsaFpVN0twNFVQcGVLbXIwNWlYNEpPdzUwK1hXVUkxVWhZMFZ1UW5EQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyeXFraXJTNUFwdUMrWXV4Q05oMG41YzRyWmVwMDlCVnZCN3JPUmVOc2ovZnNWWlhDS1czOWdtTkdFalpYQU1SeE9lM3VMdGZsUkNCU2IxcnFpTWNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvdnllRk9LVGl2VWNLaEVqaWFXeGgzR0NRRVdKK2tQaG50ZlZDZDBFL090bFpHQnVDWVl1MjBaQWN4V05XTzcwdloycGhIamNob25WMWE5aEswaVZCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwNjQ1NjA4NDA6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MDYwMzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOVDNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5UMy5qc29uIjogIntcImtleURhdGFcIjpcInlQMGV2YVdzTis2THJHWU1WUEtiRHpNNG0yWGYzQlhtM2Q4b2xyUHd4ZU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MDM2NDk3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjA2MDM5OTcxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Hey I am here to help you." , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "AKASH",
  ownername:process.env.OWNER_NAME|| "AKASH",


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
