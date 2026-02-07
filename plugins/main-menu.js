let handler = async (m, { conn, usedPrefix }) => {

  const who = m.sender
  const taguser = `@${who.split('@')[0]}`
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

  const productMessage = {
    product: {
      productImage: { url: banner },
      productId: '24529689176623820',
      title: `${botname} |  ${vs}`,
      description: '',
      currencyCode: 'USD',
      priceAmount1000: '0',
      retailerId: 1677,
      url: 'https://wa.me/0',
      productImageCount: 1
    },

    businessOwnerJid: who || '0@s.whatsapp.net',

    caption: `

> . ﹡ ﹟ 🍁 ׄ ⬭ *¡ʜᴏʟᴀ!* ${taguser}

*ㅤꨶ〆⁾ ㅤׄㅤ⸼ㅤׄ *͜🌷* ㅤ֢ㅤ⸱ㅤᯭִ*
ㅤ𓏸𓈒ㅤׄ *sᴏʏ ::* ${botname}
ׅㅤ𓏸𓈒ㅤׄ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ::* 𝕮𝖍𝖎𝖓𝖆 💋
ׅㅤ𓏸𓈒ㅤׄ *ᴠᴇʀsɪᴏɴ ::* ${vs}
ׅㅤ𓏸𓈒ㅤׄ *ᴜᴘᴛɪᴍᴇ ::* ${uptime}

> https://sylpha-wabot.vercel.app

> ## \`DOWNLOADER 🌱\`

> \`•\` ${usedPrefix}play
> \`•\` ${usedPrefix}ig
> \`•\` ${usedPrefix}instagram 
> \`•\` ${usedPrefix}fb
> \`•\` ${usedPrefix}facebook 

> ## \`INFO 🌱\`
 
> \`•\` ${usedPrefix}ping
> \`•\` ${usedPrefix}menu

> ## \`OWNER 🌱\`

> \`•\` ${usedPrefix}update 
> \`•\` ${usedPrefix}cleartmp 
> \`•\` ${usedPrefix}detectar

> ## \`GROUPS 🌱\`
 
> \`•\` ${usedPrefix}kick
> \`•\` ${usedPrefix}link
> \`•\` ${usedPrefix}tag
> \`•\` ${usedPrefix}promote
> \`•\` ${usedPrefix}demote
> \`•\` ${usedPrefix}open
> \`•\` ${usedPrefix}close

> \`TOOLS 🌱\`

> \`•\` ${usedPrefix}s
> \`•\` ${usedPrefix}sticker
> \`•\` ${usedPrefix}toimg
> \`•\` ${usedPrefix}inspect

`.trim(),

    title: '',
    subtitle: '',
    footer: `© ${botname} · ${author}`,

    interactiveButtons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: 'instagram',
          url: 'https://www.instagram.com/its.chinitaaa_'
        })
      }
    ],

    mentions: [who]
  }

  await conn.sendMessage(m.chat, productMessage)
}

handler.command = ['menu', 'allmenu', 'help']

export default handler


function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}