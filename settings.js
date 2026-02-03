import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import moment from 'moment-timezone'

global.botNumber = '' 
global.owner = [
  ['5492644996684', 'Neji ssj', true],
  ['923297474483', 'BrayanX330', true],
  ['5492645765402','DuarteXV',true]
]
global.mods = []
global.prems = []
global.suittag = ['923297474483']

global.botname = '𝙽𝚊𝚐𝚒𝙱𝚘𝚝-𝙰𝚒'
global.author = '@its.chinitaaa_'
global.sticker = 'sticker created by NagiBot'

global.banner = 'https://files.catbox.moe/625wyi.jpg'
global.icono = ''

global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.moneda = 'dolares'
global.multiplier = 60
global.prefix = /^[./!#?]/

global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.md = 'https://github.com/El-brayan502/NagiBotV3'
global.ch = { id: '120363417186717632@newsletter' }

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright(`✨ [CONFIG] Se han actualizado los ajustes del bot`))
  import(`${file}?update=${Date.now()}`)
})