//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/E3qlnNzNXRFDPwzkpp7LR9";
global.website = process.env.GURL || "https://chat.whatsapp.com/E3qlnNzNXRFDPwzkpp7LR9";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://photos.app.goo.gl/Ha578BFzQuNCzEaC7";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348077825595";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://photos.app.goo.gl/iX5ehH6ASjfYfw2n7";
global.waPresence = process.env.WAPRESENCE || "false";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1tY0hQSkh6bnMyUjFhOFUyTnFOVmZwOW0rZWlzN0tPTEh0T1l6RG5rMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkRkanNNV1JUcXVDT0lhaUZoMzRJcDZvRnFmaGc4NWZsdHFxT3NnMmFoUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQUNDekg3Wm9jOGxRVGU3Q2t4R05UYTJ0ZUxUTWlDQjdFaXZsUGtXM25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dnRmeHJpWnh4b0xYK0U1TW00ZjRjdG9qTVNEUmwwd3lZRW5XbmJtU2w0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKdC8xNUh4ZjJ1amdPZ0E4a3ZSYmNmcmRpaFJNQlBWMzhBVUFaRFpaMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFWRTYwTG95a0o3eEkyZUtreXlwK212MTVkSXAzd1lDMm1meTJPVkVFbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5NU2RjSnlQdmZvYzlVbnFHVEx6cUQ0YnQrNmJXWFI5a1B6WjJJaG5tVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE45UGJrcWFETis3czY1RlNNdUZzakxWRVFveGR4Rjc4ZFV5Y3RlTjZqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkxY0wyRlRDNEg2UWh4TWdlSktybXN4ZEZaZ2h2bWpIRzVQQ2pVa3l5Y3pNYUFCeGxBTUk2czgvY2RXaDBkTGhkbCtBSnNMRWdLSHNVTk9SblVQWEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgzLCJhZHZTZWNyZXRLZXkiOiJRTUJQMTJpQmQyN3MyaDN6eEljd1QzOTl4dUxDUTl4Q2U5RkowWEdsQUtBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfNzlPXzFmeVFaZUF0X0NhQUU0YzdBIiwicGhvbmVJZCI6IjI2YmY1NzZhLWEwYTItNDFlMS04ZGRlLTMxYzBiNjJkYTcwZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJVElFcU14YWdpSGo1S3BsdWQ2OFgrQTM0d3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTA1UlplRFM0RzBuYnJZa054bE5CaFdIeHVFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkyMUpLQU5MIiwibWUiOnsiaWQiOiIyMzQ4MDc3ODI1NTk1OjM2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iuatu1/vvK7vvKXvvK3vvKXvvLPvvKnvvLgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPczRpa1F5ZC95dWdZWUNTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJGTTNmS1FJU1dHYU1CMjlMb0MvR0drR2s1cnk3V0tLaU9DVzc5TUJ4R0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZEVVRGcnlXY1VJL0VXL2dTa2VIM1kwVFFDaiswbzlxZEFPeTRiYkk4cjhQZVBReHlYam9LanBnV1AzRmdQMUZyZkxOSklkdEtSS21ic1JiUE1rMURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmYk1vVXE4OS84WXluV3Fmc3RTQ3hXalhud3lUZ05Ea1BJS0s3cmM0Z3pKZHA5UitFeVdIanhoVU1qVVM0bDRTS3F0TStxSTIyckQ2cllUY0FNNGdBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzc4MjU1OTU6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVJUTjN5a0NFbGhtakFkdlM2QXZ4aHBCcE9hOHUxaWlvamdsdS9UQWNSZyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDEyNzU3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCbVIifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || "X",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "死_ＮＥＭＥＳＩＸ™`",
  author: process.env.PACK_AUTHER || "ENMA",
  packname: process.env.PACK_NAME || "E N M A",
  botname: process.env.BOT_NAME || "ENMA",
  ownername: process.env.OWNER_NAME || "死_ＮＥＭＥＳＩＸ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
