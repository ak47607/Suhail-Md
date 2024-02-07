const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ab5247607@gmail.com"
global.location="India."
global.mongodb= process.env.MONGODB_URI || "mongodb://ue4ugffvkqfcfnm0t0mq:eO9PjAKX5VhGxLB2MLm@bang06wfxrfq5eptivaf-mongodb.services.clever-cloud.com:2310/bang06wfxrfq5eptivaf""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d9d04230dbb0544d48c05.png" ; // SET LOGO FOR IMAGE 



global.devs = "919064560840" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919064560840";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064560840";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "⏤͟͟͞͞★͙≛͙⃝͙♥️𝐒𝐊𝐄𝐓𝐎𝐑 -𝐗𝐃✨⃝⃪" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "⏤͟͟͞͞★͙≛͙⃝͙♥️𝐒𝐊𝐄𝐓𝐎𝐑 -𝐗𝐃✨⃝⃪",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "⏤͟͟͞͞★͙≛͙⃝͙♥️𝐒𝐊𝐄𝐓𝐎𝐑 -𝐗𝐃✨⃝⃪",
  ownername:process.env.OWNER_NAME|| "⏤͟͟͞͞★͙≛͙⃝͙♥️𝐒𝐊𝐄𝐓𝐎𝐑 -𝐗𝐃✨⃝⃪",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_32_02_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0RTa3owa01Cdmh0L2tkTWE2aGVhM0dMYktnOVZHelFadzkrNWVkVjMzQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhGdnd1Ykg5Mk9yd3JXNVNCeWZLK09VVFl3eExxYkNVbUczSU5aemRlUlk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWUxRSzlNa2luYVpCT1AzMGJvRDQzOHZMazdac1NOUTBJRGJYcHhabFkwTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhNcHQ5cWIycEkwSGtncWdhVVo0OHZKRVZxaTlIUDZqOFM5WmdsVis0VnM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUZOUzFObmg4R2JSOXk0NGFqMUFkeVJHMWFPU0JTUDNocFhkdEtKOHczYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZ5cG5yditzQ2JRVnlDWjJHZGVGVXdZZUp5b0FqM2lQRkdrNkhWTHBDMU09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJlUFdWaHhwWVVIa1g0RFYxa0g3TSs0bU1iN2xURmFLL3JvQlJkL3RHNDJrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUkVGdkJBd1UxTE5Ud1YwLzZtRTdqSXVlSGM2Q0dJN0M1VFlENWNqdHVWWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJZY3crOWtSeTZwQ1Z3WW5OSDRBMHpQSzNCV0FubmpTSWoxSXROTGd3QXZHaWUraUVNbzhLMERHUHd5WGRnN3pwUk1xOVg4QlBMaEUrL0lYcnh2YXZoUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTQsXCJhZHZTZWNyZXRLZXlcIjpcIjBNNTk2S3JISVQvYjRtVUdXSjI5M1NtdmRuWjYwMXRyN2YyeThvUWpnYUU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MTkwNjQ1NjA4NDBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRkQyNTM0RjlCMzE0QUQ4RkM2RDhEMUEzN0RBQ0Y0N0VcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNzI5NDc1NX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MTkwNjQ1NjA4NDBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRDlEQUVFQUI2MTdEMjk1Njk1NENFQzdDQUE5MTkxRURcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNzI5NDc1Nn1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImNWbDAzT01SUjNHSFJTcEZzZTk5MndcIixcInBob25lSWRcIjpcIjJhYjBiOGM1LWVmYmUtNGJiMi1hYWM3LTVjZTYyNTQ3Yzc4NFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMzdYcDJuZGZuMFY0czlSd1BLaTcxanJocjlJPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJETGF0R0NzalA0Nytadlp2bU9VZ08xSmpiQTg9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0xqRTl0RUJFSjJBamE0R0dBRT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImhjSTlxeWV6dTVwbmtYOHgyalZXZjBaSDB0eUJQSHFWbXR4T0hiclZkbkE9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJ6M2xCdWgxVklvK09RaDJBOUt1THpacHd5ZFg4Qi9seGJHQTdQRXRVMCtiN0dPaHNpWWFXRkpJb2pmMk5OblorYzVGM3ppQUt0eFlKdlhnVmxCY1lEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImxIKzJRRnVuS05pY014MXovSFpvUi9xdEhWYjBlTkZHbk9JQm5ZMW9VN3Z6c3NxbVRRT0ZiZ09iNXNwZnR4M2JpQy80bjhaTmV1N2VZM3dDNE5MQml3PT1cIn0sXCJtZVwiOntcImlkXCI6XCI5MTkwNjQ1NjA4NDA6NzRAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTgzNzQ3MzA3NjU5MjgyOjc0QGxpZFwiLFwibmFtZVwiOlwi4o+kzZ/Nns2fzZ7imIXNmeKJm82Z4oOdzZnimaXvuI/wnZCS8J2QivCdkITwnZCT8J2QjvCdkJEgLfCdkJfwnZCD4pyo4oOd4oOqXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTE5MDY0NTYwODQwOjc0QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQllYQ1Bhc25zN3VhWjVGL01kbzFWbjlHUjlMY2dUeDZsWnJjVGgyNjFYWndcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA3Mjk0NzUyLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBRVVBQUVNSlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNQS5qc29uIjogIntcImtleURhdGFcIjpcIkNFZVMxT1hBdVBCRXVEUHZPTXJRcWRJYzEwcG5WT0RTN3dISFh1WnFhT009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCWis4YlRpT0JRMk5odWRWRk5DYlVxVkJmZVhBZFJvQTRIMHRGUjR2ZEZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0MDI0NjgzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjgwMDgxNjkxMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNQy5qc29uIjogIntcImtleURhdGFcIjpcIlJGYkhJem8wdndpMmNlL2k0d2hJalNLQUtPeGNzOVljUjVGK3AzQ0FzRUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA2ODUwMzQxMzU5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRU1ELmpzb24iOiAie1wia2V5RGF0YVwiOlwiWG12VkRKS2RhOE5CY05kR2ExNkZIR1d5WjQ0a25IdGhWTmsxVEpaL0h5WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDAyNDY4MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNRS5qc29uIjogIntcImtleURhdGFcIjpcIjdDOXIrVWVwbkRVZG9ROEpzSFJpa0w0WmdBb0ZvZ05qR1hxNlJtZEl0amM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA2ODU1NzA2MDAwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRU1GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ3drR2FPTGxkZXZDNU00QjBXTDJCTTFSYVNwTTUxTDU2SVJTd3RidWJ5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDAyNDY4MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjk1ODY1NzM1NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNRy5qc29uIjogIntcImtleURhdGFcIjpcInFhQlNCS0tMdW4xNVI1RnpvZU5ZejEwL29pMlA5MDdqNHRiS0l2S2FjS2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA2OTU4Njg0MTQ0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRU1ILmpzb24iOiAie1wia2V5RGF0YVwiOlwiWlRRRExOVXdEaGM5RnF3UVFrS3VUMU9NeURlY2xZRUxUUVUycUk4VDd0RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDAyNDY4MzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzA2OTc1NTU3OTU5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRU1JLmpzb24iOiAie1wia2V5RGF0YVwiOlwieUhZS0lDNjNmbjNpZTBCVVNjRC9BaUVSS1FtUk8rWHJ2Ry9vSXR5OGwwdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDAyNDY4MzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjk3NjUwNzE0MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNSy5qc29uIjogIntcImtleURhdGFcIjpcIi9taUcyS3k5NFora3VGN3NZUjZMV01qZUhKQmlSbldGak5vd0JLL0YwT289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODM2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY5NzgyMjcyNDhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPNUo4ZFltRzVWQlZhMWpUQnloQ1JYQ1B6QXJqMWhNTEhqZmFYZGZ5T2V3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0MDI0NjgzNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjk3ODgzMTY0NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNTS5qc29uIjogIntcImtleURhdGFcIjpcIlpWRXJXT1ZWT1BpVW1abUh2WVpHM0lXY1BiWHJkU0R5bUJWcHprTVo5cXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDcwNjg4NzEwMjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVbUlCVE9ERUxreFpxMWprS3k3Q2NsY05Pek5KT3hrTkFhWGRaejVURzNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0MDI0NjgzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzA2ODkxOTczMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNTy5qc29uIjogIntcImtleURhdGFcIjpcIkNqalA3WGVLdm9UckdSNzNDaXQrZTVSOTlGYWFMUWVYY1lEU2tKNE04bnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNTytkdFA2ZjI0YjhjSy9QQ3lqK3BySjZqRHlkVEl0QU9UTjJpb2JVSUNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0MDI0NjgzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzI1MDE0MzA5NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVNUS5qc29uIjogIntcImtleURhdGFcIjpcInZpUDZMNWRlRmVmVlh1Vk5MQ1locmhTUE5tbFZXZUZSK2tPZ3J0SUVuTkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQwMjQ2ODM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUVVQUFFTUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhQ2h4VFdGaU9mNTlYQ2doaytYaXgvK3Y4eGxNcGQ0R0U2QkR6aG9YVWE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0MDI0NjgzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
