const stalk = (prefix, botName, ownerName) => {
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
┷┯ *〈 STALK 〉*
   ╽
   ┠≽ *${prefix}tiktokstalk* <username>
   ┃ *Desc* : Obtenha informações do TikTok, usuário
   ┠≽ *${prefix}igstalk* <username>
   ┃ *Desc* : Obter informações do Instagram, usuário
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.stalk = stalk
