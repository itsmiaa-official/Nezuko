import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

  let q = m.quoted ? m.quoted : null
  if (!q)
    return conn.reply(
      m.chat,
      `❀ Responde a un sticker con *${usedPrefix + command} pack | author*`,
      m
    )

  let mime = (q.msg || q).mimetype || ''
  if (!/webp/.test(mime))
    return conn.reply(m.chat, '❀ Solo funciona con stickers.', m)

  await m.react('🕓')

  try {

    const buffer = await q.download()
    if (!buffer || buffer.length < 10)
      throw 'Sticker inválido'

    const parts = (text || '').split('|').map(v => v.trim())

    if (!parts[0] || !parts[1])
      return conn.reply(
        m.chat,
        `❀ Uso correcto:\n*${usedPrefix + command} Pack | Author*`,
        m
      )

    const packname = parts[0]
    const author = parts[1]

    const sticker = await addExif(buffer, packname, author)

    await conn.sendFile(m.chat, sticker, 'sticker.webp', '', m)
    await m.react('✅')

  } catch (e) {
    console.error(e)
    await m.react('✖️')
    conn.reply(m.chat, '⚠️ Error al cambiar la marca del sticker.', m)
  }
}

handler.help = ['wm pack | author']
handler.tags = ['sticker']
handler.command = ['wm']

export default handler