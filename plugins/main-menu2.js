let handler = async (m, { conn, usedPrefix }) => {

  const who = m.sender
  const taguser = `@${who.split('@')[0]}`
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)

  let sections = [
    {
      title: "📂 Categorías",
      rows: [
        {
          title: "Main",
          description: "Ver comandos principales",
          rowId: `${usedPrefix}main`
        },
        {
          title: "Downloader",
          description: "Descargar contenido",
          rowId: `${usedPrefix}downloader`
        },
        {
          title: "Groups",
          description: "Comandos de grupo",
          rowId: `${usedPrefix}groups`
        },
        {
          title: "Tools",
          description: "Herramientas útiles",
          rowId: `${usedPrefix}tools`
        },
        {
          title: "Owner",
          description: "Comandos exclusivos del owner",
          rowId: `${usedPrefix}owner`
        }
      ]
    }
  ]

  await conn.sendMessage(m.chat, {
    image: { url: banner }, // ← tu imagen aquí
    caption: `🌷 Hola ${taguser}

Bot: ${botname}
Versión: ${vs}
Uptime: ${uptime}

Selecciona una categoría del menú ↓`,
    footer: `© ${botname} · ${author}`,
    title: `${botname} - Menú`,
    buttonText: "Seleccionar",
    sections,
    mentions: [who]
  }, { quoted: m })

}

handler.command = ['menu2', 'allmenu', 'help']

export default handler


function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}