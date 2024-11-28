
# **Web Portofolio Ku**

Web Portofolio Ku adalah sebuah halaman web sederhana yang dirancang untuk menampilkan informasi pribadi, perjalanan pendidikan, dan informasi kontak secara interaktif dan responsif. Proyek ini dibuat menggunakan **HTML**, **CSS**, dan **JavaScript**.

---

## **Fitur Utama**
1. **Home Section**: Berisi pengantar singkat tentang pemilik portofolio.
2. **Profil (Tentang Aku)**: Penjelasan singkat tentang diri dan perjalanan pendidikan.
3. **Pendidikan**:
   - Menampilkan kartu interaktif untuk setiap jenjang pendidikan.
   - Klik pada kartu untuk melihat deskripsi singkat.
4. **Kontak**:
   - Menampilkan detail kontak seperti email, nomor telepon, LinkedIn, dan GitHub.
   - Formulir kontak interaktif untuk mengirim pesan langsung.
5. **Desain Responsif**:
   - Tampilan yang menyesuaikan dengan berbagai ukuran perangkat (desktop, tablet, dan ponsel).
6. **Animasi & Interaksi**:
   - Animasi hover pada kartu pendidikan.
   - Efek transisi pada elemen teks dan tombol.

---

## **Struktur File**
```
├── index.html          # File utama HTML
├── styles.css          # File CSS untuk styling
├── scripts.js          # File JavaScript untuk interaktivitas
├── README.md           # File README ini
```

---

## **Teknologi yang Digunakan**
- **HTML5**: Struktur dasar halaman web.
- **CSS3**: Styling dan desain responsif.
- **JavaScript**: Menambahkan interaktivitas pada elemen seperti kartu pendidikan dan formulir kontak.

---

## **Cara Menggunakan**
1. **Clone Repository**:
   ```bash
   git clone https://github.com/AldevaRizky055/CSS-Layouting.git
   ```
2. **Buka File HTML**:
   - Arahkan ke folder proyek yang telah di-clone.
   - Buka file `index.html` menggunakan browser favorit Anda.

---

## **Cara Menambahkan Konten Baru**
1. **Mengubah teks di Home**:
   - Buka file `index.html`.
   - Temukan bagian `<section class="home">` dan sesuaikan teksnya.
2. **Menambahkan pendidikan baru**:
   - Tambahkan elemen `<div>` baru dalam section **Pendidikan**:
     ```html
     <div class="card" onclick="showMessage('Jenjang Baru')">
         <h3>Nama Jenjang</h3>
     </div>
     ```
   - Tambahkan detail baru pada fungsi `showMessage` di `scripts.js`:
     ```javascript
     case 'Jenjang Baru':
         messageElement.textContent = 'Deskripsi untuk jenjang baru.';
         break;
     ```
3. **Mengubah informasi kontak**:
   - Edit detail kontak di `<section class="contact">` di file `index.html`.

---

## **Preview Halaman**
Tampilan akhir halaman akan seperti ini:

1. **Home Section**: 
   - Menampilkan selamat datang dengan teks pengantar.
2. **Tentang Aku Section**:
   - Penjelasan singkat tentang pemilik portofolio.
3. **Pendidikan**:
   - Kartu interaktif dengan deskripsi tiap jenjang.
4. **Kontak**:
   - Formulir dan detail kontak yang rapi.

---

## **Kontribusi**
Jika Anda memiliki ide atau perbaikan untuk proyek ini:
1. Fork repository ini.
2. Buat branch baru: `git checkout -b fitur-baru`.
3. Commit perubahan Anda: `git commit -m "Menambahkan fitur baru"`.
4. Push ke branch Anda: `git push origin fitur-baru`.
5. Kirim pull request ke repository utama.

---

## **Lisensi**
Proyek ini dilisensikan di bawah **MIT License**. Anda bebas menggunakan dan memodifikasinya.
