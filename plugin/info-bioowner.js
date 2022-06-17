let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Rel-Bot
*✉️ Nama RL* : Farel
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 26 April 2007
*🎨 Umur* : 15
*🧮 Kelas* : 8
*🧩 Hobby* : Coli
*💬 Sifat* : Baik, ramah, Ganteng, Tapi gay
*🗺️ Tinggal* : Indo, Sulawesi tengah, kabupaten buol desa pajeko
*❤️ Suka* : seme yang tahan lama
*💔 Benci* : autis

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : ----
*🇫  Facebook* : Farel menolak gans/Farel Rel
*🏮 Chanel Youtube* : ----
*🐈 Github:* ----

*───────[ CATATAN ]───────*
Nyari seme ada gak?
`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
