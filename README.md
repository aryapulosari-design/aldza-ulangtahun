# Forever 27 — untuk Aldza Salwatul Aisy 🌸

Website ulang tahun interaktif ke-27 yang dibuat menggunakan **HTML5, CSS3, dan Vanilla JavaScript murni** (tanpa dependency eksternal, tanpa proses build, tanpa node_modules, dan tanpa koneksi CDN eksternal). Memiliki performa rendering yang sangat tinggi (NVIDIA-style FPS), estetika minimalis & premium (Apple-style design), dan transisi navigasi yang halus (Fashion-website feel).

---

## 1. Panduan Konfigurasi Konten (`data.json`)

Seluruh data teks dan target ulang tahun dipisahkan ke dalam berkas **`data.json`**. Anda dapat mengubah konten sesuka hati tanpa menyentuh baris kode HTML atau JS.

*   `birthday.targetISO`: Target tanggal ulang tahun (Format ISO 8601).
    *   Bawaan: `"2026-07-26T00:00:00+07:00"` (Menggunakan WIB/GMT+7 secara eksplisit).
    *   Countdown akan menghitung mundur secara real-time. Setelah waktu terlewati, kejutan (confetti, kembang api, balon, kado) otomatis terbuka dan tidak memerlukan refresh halaman.
*   `timeline`: Daftar 5 momen perjalanan cinta (mengandung judul, tanggal, deskripsi cerita, dan path foto).
*   `gallery`: Daftar foto memori dan keterangannya.
*   `letters`: 4 surat kecil digital berbentuk amplop interaktif yang bisa diklik.
*   `reasons`: Daftar alasan yang akan tampil secara acak/berurutan di dek kartu.
*   `loveQuotes`: Kutipan cinta acak yang keluar ketika menekan tombol Quote generator.
*   `longLetter`: Surat ulang tahun utama yang tersimpan rapi di dalam kotak kado 3D.

---

## 2. Aset Pendukung (Foto & Efek Suara)

1.  **Foto & Gambar**:
    *   Letakkan berkas gambar di dalam folder `assets/images/`.
    *   Nama berkas harus disesuaikan dengan isi `data.json` (contoh: `timeline-1.jpg`, `gallery-1.jpg`).
    *   *Toleransi Error*: Jika berkas foto tidak ditemukan atau belum ada, website akan otomatis memotong ruang tersebut secara aman atau menggantinya dengan gradasi warna pink-lavender lembut yang estetik.
2.  **Efek Suara (SFX)**:
    *   Letakkan 4 berkas efek suara pendek berformat `.mp3` di dalam folder `assets/sfx/` dengan nama:
        *   `click.mp3`: Suara klik/pop tombol umum.
        *   `paper.mp3`: Suara amplop surat dibuka.
        *   `gift.mp3`: Suara kado dibuka/swoosh.
        *   `firework.mp3`: Suara ledakan kembang api.
    *   *Toleransi Error*: Jika berkas suara belum ditaruh, efek suara akan berjalan dalam mode senyap tanpa memunculkan pesan kesalahan atau membuat website crash.

---

## 3. Cara Penyebaran (Deploy) ke Vercel

### Opsi A — Melalui GitHub (Sangat Disarankan)
1. Buat repositori baru di GitHub dan unggah seluruh isi folder ini.
2. Buka dashboard [vercel.com](https://vercel.com) dan klik **Add New Project**.
3. Hubungkan akun GitHub Anda dan pilih repositori tersebut.
4. Pada bagian **Framework Preset**, biarkan pilihan default (**Other** / **No Framework**).
5. Kosongkan kolom **Build Command** dan **Output Directory** (biarkan default `.`).
6. Klik **Deploy**. Selesai! Vercel akan otomatis menyebarkan ulang website ini setiap kali Anda melakukan *commit & push* ke GitHub.

### Opsi B — Melalui Vercel CLI (Tanpa GitHub)
Instal CLI Vercel secara global lalu deploy dari komputer Anda:
```bash
npm i -g vercel
cd Aldza-Ultah
vercel --prod
```
Ikuti petunjuk login dan persetujuan di terminal Anda.

### Opsi C — Unggah Seret & Lepas (Drag & Drop)
Kunjungi halaman [vercel.com/new](https://vercel.com/new), lalu seret folder proyek ini langsung ke area upload yang disediakan.

---

## 4. Ketahanan dan Kompatibilitas Lokal (Offline/CORS)

Browser modern umumnya memblokir permintaan AJAX lokal (`fetch`) melalui protokol `file://` (ketika Anda mengklik dua kali file `index.html` dari Explorer). 

Untuk itu, website ini dilengkapi dengan **Sistem Cadangan Mandiri (Resilient Fallback Mode)**. Jika JavaScript mendeteksi kegagalan muat data eksternal `data.json` karena CORS di lingkungan lokal, ia akan secara otomatis beralih menggunakan basis data bawaan yang sama yang disematkan langsung di dalam kode. Halaman web dijamin **selalu dapat diakses dan berfungsi 100%** di perangkat mana pun secara offline.
