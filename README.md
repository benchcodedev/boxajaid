# boxaja.id — Multi-Page Modern Packaging & Offset Printing Website

Website resmi multi-halaman untuk brand **boxaja.id**, dirancang dan dikembangkan dengan standar visual modern dengan presisi tinggi mengacu pada referensi desain, responsif otomatis ke seluruh perangkat (Mobile, Tablet, Desktop), serta terintegrasi langsung dengan WhatsApp official: **[wa.me/6281128862016](https://wa.me/6281128862016)**.

---

## 🌐 Akses Server Lokal

Website saat ini **sedang aktif berjalan** di server lokal:

👉 **[http://localhost:8092](http://localhost:8092)**

Untuk menyalakan ulang server di kemudian hari:
```bash
# Jalankan dari folder workspace:
python -m http.server 8092 --directory boxaja

# Atau menggunakan npx serve:
npx serve boxaja -l 8092
```

---

## 📑 Struktur Multi-Halaman (Pages)

1. **[index.html](index.html) — Homepage (Halaman Utama)**
   - Mengikuti tata letak, proporsi, kartu, tipografi, dan komposisi referensi desain section demi section:
     - **Header / Navigation Bar**: Logo `boxaja.id`, link navigasi multi-halaman, tombol CTA *"Get Started"*, dan hamburger drawer mobile.
     - **Hero Section**: Headline *"One Stop Solution Digital & Offset Printing"*, deskripsi, dan 2 foto berdampingan (mesin pemotong kertas & operator mesin cetak offset).
     - **Client Logo Bar**: *"Trusted by 100+ great customers"* dalam 2 baris rapi berisi 10 brand terkemuka (Fore, Janji Jiwa, Mixue, Kopi Kenangan, Somethinc, Wardah, dll).
     - **Services Section**: *"We provide various types of printing services"* dengan 3 kartu produk utama (packaging/box, paper bag, brosur & kalender) dan tombol panah melingkar.
     - **Elevate Your Brand**: Headline persuasif, deskripsi, 3 metrik statistik (*200+ Happy clients, 5k+ Project finish, 20+ Machine printing*), dan foto spesialis percetakan dengan *color swatches*.
     - **Customer Satisfaction**: 4 poin keunggulan dengan icon outline minimalis (*Accurate color calibration, High quality paper material, Custom size & finishing, Faster on-time delivery*) dan foto teknisi mesin cetak.
     - **Explore Our Excellence Printing Works**: Tab filter interaktif (*all works, packaging, box, paper bag, brosur, kalender, offset printing*) dengan 2 kartu portofolio besar berdampingan.
     - **Customer Feedback (Testimoni)**: 5 kartu ulasan pelanggan (3 kartu atas, 2 kartu bawah) lengkap dengan avatar, nama, dan perusahaan.
     - **Our Printing Journey (Alur Kerja)**: 3 tahapan bernomor (*Initial Consultation, Pre-press and Proofing, Printing and Finishing*) dan foto inspeksi kualitas.
     - **Quotation Form Card**: *"Send your project and get minimum price"* dengan grid 4 kolom (*Your Name, Phone/WhatsApp, Product Type, Estimated Quantity*), kolom *Message*, dan tombol *"Send project ->"* yang otomatis memformat dan membuka pesan WhatsApp.
     - **Footer Modern**: Kolom identitas & kontak, daftar produk, navigasi, dan copyright.

2. **[about.html](about.html) — Tentang Kami (Company Profile & Fasilitas Pabrik)**
   - Sejarah dan visi misi PT Boxaja Digital Solusindo.
   - Fasilitas mesin industri: Heidelberg Speedmaster 5-Color Offset Press, Polar Mohr Hydraulic Guillotine, Auto Die-Cutter, dan Hot Foil / Spot UV Line.
   - Nilai inti: Akurasi warna standar ISO, bahan bersertifikasi food-grade, dan harga langsung produsen tanpa perantara.

3. **[products.html](products.html) — Katalog Produk & Layanan Lengkap**
   - **Box Packaging**: Hardbox Eksklusif (Rigid Box), Corrugated Mailer Box (Karton Gelombang E-Flute), Food Grade Box (Ivory PE Coating), Cosmetic & Skincare Box.
   - **Paper Bag**: Eco Kraft Paper Bag (Coklat/Putih), Luxury Art Carton Shopping Bag, Takeaway Bag.
   - **Brosur & Flyer**: Brosur Lipat 3 (Trifold), Lipat 2 (Bifold), Flyer A5 & A4 Art Paper 150gr, Company Profile.
   - **Kalender**: Kalender Meja Spiral Dudukan Hardboard Linen, Kalender Dinding Klep Seng / Spiral Kawat.
   - **Aksesoris & Stiker (and More)**: Hangtag baju mata ayam, stiker vinyl anti air die-cut, sleeve packaging (paper belt box).
   - Dilengkapi filter kategori interaktif, spesifikasi bahan, MOQ, dan tombol pesan langsung via WhatsApp.

4. **[portfolio.html](portfolio.html) — Portofolio & Galeri Karya Klien**
   - Galeri foto riil hasil produksi untuk brand F&B, Skincare & Beauty, Fashion & Retail, Corporate, dan Bakery.
   - Filter tab kategori (*All Works, Box Packaging, Paper Bag, Brosur & Flyer, Kalender, Offset & Finishing*).
   - Tombol 1-klik untuk menanyakan produk portofolio tertentu langsung ke WhatsApp.

5. **[pricing.html](pricing.html) — Kalkulator Harga & Panduan Bahan**
   - **Live Interactive Calculator**: Pengguna dapat memilih produk, kualitas bahan, jenis finishing (doff/glossy/spot UV/foil emas/combo), dan kuantitas oplag untuk melihat estimasi total dan harga satuan per pcs secara real-time.
   - Tombol *"Kirim Hasil Hitungan ke WhatsApp"* yang langsung meneruskan konfigurasi kalkulator ke chat WhatsApp CS.
   - **Tabel Referensi Grosir**: Perbandingan harga per pcs pada oplag 500, 1.000, 2.500, dan 5.000+ unit.
   - **Panduan Bahan & Finishing**: Edukasi perbedaan Ivory, Duplex, Kraft, Corrugated, Doff, Glossy, dan Spot UV.

6. **[contact.html](contact.html) — Hubungi Kami & Penawaran Cepat**
   - Informasi kontak terpadu: WhatsApp CS (`0811-2886-2016`), email resmi, jam operasional, dan lokasi pabrik.
   - Formulir penawaran harga instan terhubung ke WhatsApp.
   - FAQ interaktif (Accordion) mengenai minimal order, bantuan desain die-cut pisau pond, proofing sampel, dan pengiriman ke seluruh Indonesia.

---

## 🎨 Teknologi & Fitur Unggulan

- **Pure HTML5 + Modern CSS3 + Vanilla JavaScript** (Ringan, cepat, tanpa dependency berat).
- **Tipografi Modern**: Plus Jakarta Sans (Headings) & Inter (Body Copy).
- **WhatsApp Direct Integration**: Menggunakan link resmi `https://wa.me/6281128862016` dengan template pesan otomatis.
- **Floating WhatsApp Widget**: Tombol WhatsApp melayang dengan animasi pulse di sudut kanan bawah setiap halaman.
- **Kalkulator Harga Interaktif**: Kalkulator harga real-time berbasis formula diskon kuantitas oplag percetakan.
- **100% Responsif**: Diuji pada resolusi Mobile (375px - 414px), Tablet (768px), dan Desktop (1024px - 1440px+).

---

## 📁 Struktur Direktori

```text
boxaja/
├── index.html                   # Halaman utama (Homepage)
├── about.html                   # Halaman Tentang Kami & Pabrik
├── products.html                # Halaman Katalog Produk & Layanan
├── portfolio.html               # Halaman Portofolio & Studi Kasus
├── pricing.html                 # Halaman Kalkulator Harga & Panduan
├── contact.html                 # Halaman Kontak & Form Penawaran
├── css/
│   └── style.css                # Desain sistem & styling responsif
├── js/
│   └── main.js                  # Interaktivitas JS, filter, kalkulator & modal
├── assets/
│   └── images/                  # Aset foto beresolusi tinggi (hero, produk, tim, portofolio)
├── preview_desktop.png          # Screenshot tampilan Desktop
├── preview_mobile.png           # Screenshot tampilan Mobile
├── preview_mobile_menu.png      # Screenshot navigasi Drawer Mobile
└── README.md                    # Dokumentasi lengkap
```
