const handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin }) => {
const primaryBot = global.db.data.chats[m.chat].primaryBot
if (primaryBot && conn.user.jid !== primaryBot) throw !1
const chat = global.db.data.chats[m.chat]
let type = command.toLowerCase()
let isEnable = chat[type] !== undefined ? chat[type] : false
if (args[0] === 'on' || args[0] === 'enable') {
if (isEnable) return conn.reply(m.chat, `ꕥ *${type}* ya estaba *activado*.`, m)
isEnable = true
} else if (args[0] === 'off' || args[0] === 'disable') {
if (!isEnable) return conn.reply(m.chat, `ꕥ *${type}* ya estaba *desactivado*.`, m)
isEnable = false
} else {
return conn.reply(m.chat, `「✦」Un administrador puede activar o desactivar el *${command}* utilizando:\n\n● _Activar_ » *${usedPrefix}${command} enable*\n● _Desactivar_ » *${usedPrefix}${command} disable*\n\nꕥ Estado actual » *${isEnable ? '✓ Activado' : '✗ Desactivado'}*`, m)
}
switch (type) {
case 'welcome': case 'bienvenida': {
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
}
case 'goodbye': case 'despedida': {
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.goodbye = isEnable
break
}
case 'antilink': case 'antienlace': {
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}}
chat[type] = isEnable
conn.reply(m.chat, `❀ Has *${isEnable ? 'activado' : 'desactivado'}* el *${type}* para este grupo.`, m)
}

handler.help = ['welcome', 'bienvenida','despedida', 'goodbye', 'antilink', 'antienlaces']
handler.tags = ['nable']
handler.command = ['welcome', 'bienvenida','despedida','goodbye','antilink', 'antienlace']
handler.group = true

export default handler
