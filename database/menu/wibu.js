const wibu = (prefix, botName, ownerName) => {
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
┷┯ *〈 WEEBOO 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Pesquisar Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Imagem aleatória de Pokémon
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Imagem Random Loli
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Imagem Waifu Aleatória
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Imagem Random Anime
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Imagem Husbu Aleatória
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Imagem Husbu2 Aleatória
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Enviar nome do anime e cena curta
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Imagem Random Nekonime
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.wibu = wibu
