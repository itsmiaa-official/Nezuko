let handler = async (m, { conn, usedPrefix }) => {

  const who = m.sender
  const taguser = `@${who.split('@')[0]}`


  const productMessage = {
    product: {
      productImage: { url: banner },
      productId: '24529689176623820',
      title: botname,
      description: '',
      currencyCode: 'USD',
      priceAmount1000: '100',
      retailerId: 1677,
      url: 'https://wa.me/0',
      productImageCount: 1
    },

    businessOwnerJid: who || '0@s.whatsapp.net',

    caption: `
👤 Usuario: ${taguser}
🌷 Versión: ${vs}

*+ MENU DOWNLOADER*
> ${usedPrefix}play
> ${usedPrefix}ig
> ${usedPrefix}instagram 
> ${usedPrefix}fb
> ${usedPrefix}facebook 

*+ MENU INFO*
> ${usedPrefix}ping
> ${usedPrefix}menu

*+ MENU OWNER*
> ${usedPrefix}update 
> ${usedPrefix}cleartmp 
> ${usedPrefix}detectar

*+ MENU MAKER*
> ${usedPrefix}s
> ${usedPrefix}sticker

*+ MENU GRUPO*
> ${usedPrefix}kick
> ${usedPrefix}link
> ${usedPrefix}tag
> ${usedPrefix}promote
> ${usedPrefix}demote
> ${usedPrefix}open
> ${usedPrefix}close
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