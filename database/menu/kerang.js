const kerang = (prefix, botName, ownerName) => {
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
┷┯ *〈 MIRACLE SHELL 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : Perguntar é
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <optional>
   ┃ *Desc* : Ask Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : Ask When
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitindo personagens ao acaso
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Envio aleatório de hobbies
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Quão bonito
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Que bonito
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.kerang = kerang
