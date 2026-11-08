# Nizar Portfolio — Muhammad Nizar Asagaf

Website portofolio bergaya bold magenta-kuning (inspirasi ridhysepta.id) + dashboard admin bawaan.

## Fitur
- Hero besar + social links dinamis
- 4 ruang karya: Graphic Design, Photography (lightbox), Videography (YouTube), Research + Certification
- Section News + About
- Dashboard admin (tombol ⚙ kanan bawah): kelola semua karya, video, news, profil & kontak
- Upload gambar/PDF, semua data tersimpan di JSON (tanpa setup database)

## Jalankan
```bash
npm install
npm start
# buka http://localhost:3000
```

## Login Admin
- admin / admin
- superadmin / superadmin
(Ganti di `server.js` bagian `USERS` untuk keamanan produksi)

## Deploy
Bisa dijalankan di VPS, Render, Railway, atau hosting Node.js apa pun.
Data ada di folder `data/`, upload di `public/uploads/`.
