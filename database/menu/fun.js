const fun = (prefix, botName, ownerName) => {
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
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Mudando Palavras em Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Envie um Escravo do Amor Aleatório
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Envie uma verdade aleatória
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Envie um desafio aleatório
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Fale com simi
   ┠──────────────╼
   ┠≽ *${prefix}say* <text>
   ┃ *Desc* : Dizendo: v
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
