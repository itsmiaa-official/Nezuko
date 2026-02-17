case 'take': case 'wm': {
if (!m.quoted) return m.reply(`❀ Responde a un sticker con el comando *${usedPrefix + command}* seguido del nuevo nombre.\n> Ejemplo: *${usedPrefix + command}* NuevoNombre`)
await m.react('🕒')
const stickerData = await m.quoted.download()
if (!stickerData) return await m.react('✖️'), m.reply('ꕥ No se pudo descargar el sticker.')
const parts = text.split(/[\u2022|]/).map(p => p.trim())
const nuevoPack = parts[0] || texto1
const nuevoAutor = parts[1] || texto2
const exif = await addExif(stickerData, nuevoPack, nuevoAutor)
await conn.sendMessage(m.chat, { sticker: exif }, { quoted: m })
await m.react('✅')
break
}}} catch (e) {
await m.react('❌')
conn.sendMessage(m.chat, { text: `⚠︎ Se ha producido un problema.\n> Usa *${usedPrefix}report* para informarlo.\n\n${e.message}` }, { quoted: m })
}}

handler.tags = ['sticker']
handler.help = ['take','wm']
handler.command = ['take', 'wm']

export default handler