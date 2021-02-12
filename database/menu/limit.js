const limit = (prefix, botName, ownerName) => {
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
┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Verifique o seu limite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Verifique o seu dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Limite de compra
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Nota: Você pode comprar limites recolhendo dinheiro primeiro. Verifique seu dinheiro digitando o comando * ${prefix} bal *, o preço de 1 limite = 1000 dinheiro.
Nota2: Você pode coletar uan`
}
exports.limit = limit
