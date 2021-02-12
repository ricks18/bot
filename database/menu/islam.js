const islam = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 ISLAMISMO 〉*
   ╽
   ┠≽ *${prefix}quran*
   ┃ *Desc* : Envio de versos do Alcorão ao acaso
   ┠──────────────╼
   ┠≽ *${prefix}jsholat* <area>
   ┃ *Desc* : Envio de informações do cronograma de oração
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.islam = islam
