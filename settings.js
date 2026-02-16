import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

global.botNumber = '' 
global.owner = [
  ['5492644996684', '𝕮𝖍𝖎𝖓𝖆 💋', true],
  ['923297474483', '𝕮𝖍𝖎𝖓𝖆 💋', true],
  ['5492645765402','𝕮𝖍𝖎𝖓𝖆 💋',true]
]
global.mods = []
global.prems = []
global.suittag = ['923297474483']

global.botname = '🅂ᥱᥒk᥆ 🄱᥆𝗍 🦊'
global.vs = '0.5.0 (Beta)'
global.author = '@its.chinitaaa_'
global.sticker = 's𝗍іᥴkᥱr ᥴrᥱᥲ𝗍ᥱძ ᑲᥡ sᥱᥒk᥆'

global.banner = 'https://files.catbox.moe/tsz005.jpg'
global.icono = ''
global.logo = ''

global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.moneda = 'dolares 💸'
global.multiplier = 60
global.prefix = /^[./!#?]/

global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.md = 'https://github.com/itsmiaa-official/Sylpha'
global.ch = { id: '120363345778623279@newsletter' }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright(`✨ [CONFIG] Se han actualizado los ajustes del bot`))
  import(`${file}?update=${Date.now()}`)
})
