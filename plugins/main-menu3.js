import fs from 'fs'
import path from 'path'

let handler = async (m, { conn, usedPrefix }) => {
  try {
    const totalUsers = Object.keys(global.db?.data?.users || {}).length || 0
    const totalCommands = Object.values(global.plugins || {}).filter(v => v.help && v.tags).length || 0
    const isSubBot = conn.user?.jid !== global.conn?.user?.jid
    const botConfig = conn.subConfig || {}

    const botName =
      botConfig.name ||
      (isSubBot
        ? `SubBot ${conn.user.jid.split('@')[0].slice(-4)}`
        : global.botname || 'ᴀsᴛᴀ-ʙᴏᴛ')

    const botPrefix =
      botConfig.prefix ||
      (typeof global.prefix === 'string' ? global.prefix : '#')

    const botMode = isSubBot ? (botConfig.mode || 'public') : 'private'
    const version = global.vs || '1.5'

    // ========= IMAGEN =========
    let imageUrl = null

    if (isSubBot && botConfig.logoUrl) imageUrl = botConfig.logoUrl
    if (!imageUrl && global.icono) imageUrl = global.icono

    if (!imageUrl) {
      imageUrl =
        'https://raw.githubusercontent.com/Fer280809/Asta_bot/main/lib/catalogo.jpg'
    }

    const infoText = `╭━━━━━━━━━━━━━━━━━━╮
│  🎭 *${botName.toUpperCase()}* ⚡
╰━━━━━━━━━━━━━━━━━━╯

👋 ¡Hola @${m.sender.split('@')[0]}!

╭─═⊰ 📡 *ESTADO ACTIVO*
│ 🤖 *Tipo:* ${isSubBot ? '🔗 SUB-BOT' : '🟢 BOT PRINCIPAL'}
│ ⚙️ *Prefijo:* ${botPrefix}
│ 🔧 *Modo:* ${botMode === 'private' ? '🔐 PRIVADO' : '🔓 PÚBLICO'}
│ 👥 *Usuarios:* ${totalUsers.toLocaleString()}
│ 🛠️ *Comandos:* ${totalCommands}
│ 📚 *Librería:* ${global.libreria || 'Baileys Multi Device'}
│ 🌍 *Servidor:* México 🇲🇽
│ ⚡ *Ping:* ${Date.now() - m.timestamp}ms
│ 🔄 *Versión:* ${version}
╰───────────────────

📌 *Selecciona una categoría:*`

    const buttons = [
      {
        buttonId: `${usedPrefix}menu-descargas`,
        buttonText: { displayText: '📥 Descargas & Utils' },
        type: 1
      },
      {
        buttonId: `${usedPrefix}menu-juegos`,
        buttonText: { displayText: '🎮 Economía & Gacha' },
        type: 1
      },
      {
        buttonId: `${usedPrefix}menu-grupos`,
        buttonText: { displayText: '👥 Grupos & Perfil' },
        type: 1
      },
      {
        buttonId: `${usedPrefix}menu-extras`,
        buttonText: { displayText: '🎌 Anime & Más' },
        type: 1
      }
    ]

    await conn.sendMessage(
      m.chat,
      {
        image: { url: imageUrl },
        caption: infoText,
        footer: `${botName} • v${version} • By ${global.etiqueta || 'ғᴇʀɴᴀɴᴅᴏ'}`,
        buttons: buttons,
        headerType: 4,
        mentions: [m.sender],

        contextInfo: {
          externalAdReply: {
            title: `${botName} Official Menu`,
            body: `Sistema activo • ${totalCommands} comandos`,
            thumbnailUrl: imageUrl,
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: false
          }
        }
      },
      { quoted: m }
    )

  } catch (error) {
    console.error('❌ Error menú principal:', error)
    await conn.reply(
      m.chat,
      `❌ Error al cargar el menú. Usa ${usedPrefix}menu2`,
      m
    )
  }
}

handler.help = ['menu', 'menú', 'help', 'start']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'start', 'iniciar']

export default handler