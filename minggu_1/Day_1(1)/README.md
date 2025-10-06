Nomor 2
HTML (HyperText Markup Language) :
- bahasa Markup standar untuk membuat struktur halaman web
- Tag sudah tetap (div, p, h1, dll)
- atribut punya aturan yang ketat (contoh class="btn")
    contoh :
---------------------------------------------------------   
|                                                       |
|<html lang="en">                                       |
|<head>                                                 |  
|    <meta charset="UTF-8">                             |
|    <meta name="viewport" content="width=device-width,initial-scale=1.0">                                     |
|    <title>Document</title>                            |   
|</head>                                                |  
|<body>                                                 |   
|    <p>Hello World</p>                                 |
|</body>                                                |
|</html>                                                |   
--------------------------------------------------------
- tidak bisa langsung menyisipkan ekspresi Javascript  didalamnya                                             

JSX (JavaScript XML) :
- Ekstensi sintaks JavaScript yang mirip HTML, dipakai di React
- Bisa menulis HTML + JavaScript didalamya
- Atribut yang sedikit berbeda :
    class → className
    for → htmlFor
- Bisa langsung dipakai ekspresi JS dengan {} 
    contoh :
    ---------------------------------
    |const name = "Tuan Muda";      |
    |return <h1>Hello, {name}!</h1>;|
    ---------------------------------
- JSX tidak dipahami browser langsung -> perlu di compile jadi JavaScript murni


Singkatnya:
HTML → bahasa markup asli untuk web.
JSX → “rasa HTML” di dalam JavaScript (khususnya React), lebih fleksibel karena bisa sisipkan logika JS.


Nomor 3
-DOM (Document Object Model): Representasi struktur halaman web di browser (kayak struktur HTML: <div>, <p>, dll)
- masalah: mengubah DOM asli itu lambat, apalagi kalau elemen banyak.

-Solusi: Virtual DOM (VDOM)
- sebuah salinan ringan dari DOM asli yang ada di memori(bukan di browser langsung)
- dipakai oleh libary/ framework seperti React, Vue, dll.
- Jadi, saat ada perubahan UI, Framework update virtual DOM dlu, lalu baru dibandingkan dengan DOM asli.

Cara kerja VDOM 
1. Render pertama
- Saat aplikasi React/Vue dijalankan, komponen dirender menjadi struktur Virtual DOM
- Virtual DOM ini adalah representasi pohon objek JavaScript yang mirip HTML
contoh:
------------------------------------------------------------
|VirtualDOM = {
|  type: "div",
|  props: { className: "container" },
|  children: [
|    { type: "h1", props: {}, children: ["Halo"] },
|    { type: "p", props: {}, children: ["Selamat datang!"] }
|  ]
|}
------------------------------------------------------------
- Lalu Virtual DOM dipakai untuk membuat DOM asli pertama kali di browser

2. Perubahan State/Props
- Ketika ada interaksi user (klik tombol, input teks, dll), react akan membuat VirtuaL DOM baru berdasarkan komponen dengan state/props yang baru
- Jadi ada Virtual DOM yang lama (sebelum perubahan) dan Virtual DOM yang baru (sesudah perubahan)

3. Diffing (Perbandingan)
- React membandingkan Virtual DOM lama vs Virtual DOM baru dengan algoritma reconcilation
- proses ini mencari perbedaan node (misalnya teks berubah, atribut berubah, atau elemen ditambah/hilang)
- aturan singkat reconciliation: 
    a. Kalau tipe node sama (misalnya <div> lama dan baru) → React cek props/children.
    b. Kalau tipe node beda (misalnya <div> diganti <p>) → hapus node lama, buat node baru.
    c. Kalau ada list (misalnya <ul><li></li></ul>) → React pakai key untuk melacak elemen mana yang berubah.

4. Patching (Update DOM Asli)
- Setelah tahu perbedaan, React hanya ingin update bagian
yang berubah di DOM asli
- Contoh: kalau cuma teks paragraf yang berubah, React nggak render ulang seluruh halaman, tapi cuma ubah isi teks di node <p> itu saja.
- Inilah kenapa performa SPA jadi lebih cepat dan efisien.

5. Re-render Optimal
- Proses di atas terjadi berulang kali tiap ada perubahan state/props.
- Karena Virtual DOM hanya di memori (objek JS), perhitungannya cepat -> jauh lebih efisien daripada manipulasi DOM asli secara langsung

Jadi kesimpulannya:
 Virtual DOM bekerja dengan siklus Render → Diff → Patch, memastikan update DOM asli seminimal mungkin sehingga UI tetap cepat & smooth.


 Nomor 4
 1. Single Page Application (SPA)
 Website ini hanya punya satu file HTML utama dan semua konten/halaman lain dimuat secara dinamis via JavaScript (biasanya pakai framework seperti React, Vue, dll)

 kelebihan :
 - user Experience lebih halus (nggak ada reload)
 - bisa mirip aplikasi Native( lebih cepat dan interaktif)
 
 kekurangana :
 - SEO susah meski bisa diakalin
 - Loading awal lebih lambat karena banyak file yang harus diload
 - Lebih kompleks untuk dibangun (butuh framework dan manajemen state)

 2. Multi Page Application (MPA)
 website yang memiliki banyak file HTML dan masing masing terpisah. tiap kali user mengklik link maka browser akan request halaman baru ke server dan reload full page.

 kelebihan :
 - SEO lebih gampang 
 - Cocok untuk membuat website konten statis banyak (artikel, berita, company profile)
 - lebih simple dibangun tanpa framework berat

 kekurangan :
 - Navigasi agak lambat karena tiap klik harus reload page baru
 - banyak kode yang berulang
 - tidak seinteraktif SPA