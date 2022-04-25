# Vue With Nuxt

## HTML 
### Adalah Kerangka kerja yang dibangun diatas Vue yang membuat pengembangan web menjadi sederhana dan ampuh

## Cara Kerja Nuxt
## 1. inisiasi Aplikasi
### untuk membuat sebuah aplikasi baru, jalankan : $npx create-nuxt-app <nama-project>

## 2. jalankan Aplikasi
### Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script didalam package.json

## Pages
### Router di nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori/pages langsung terhubung menjadi path halaman.

## Layout
### Setiap file di direktori/layouts akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman.

## Static
### Semua file yang disertakan akan secara otomatis di ekspose oleh Nuxt dan dapat diakses melalui URL root proyek

## SSG 
### adalah kepanjangan dari Static Site Generation, sebuah metode pengembang ini lebih cocok untuk situs web yang tidak memiliki halaman dinamis.

## Cara Kerja SSG
### Ketika sebuah proyek dibangun untuk produksi, file HTML siap pakai akan dibuat di folder dist, kemudian disuguhkan oleh server dan dapat diakses per masing masing file HTML.

## SSR 
### Server Side Rendering, sebuah metode pengembangan ini adalah solusi terbaik untuk proyek di mana halaman dibuat secara real time, yang melalui panel admin. misalnya, halaman blog dan e-commerce.

## Cara kerja SSR
### Server yang dibangun ke dalam Nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file HTML baru dihasilkan secara real time ketika data baru diterima, misalnya melalui API

## Implementasi SSG
### nuxt.config.js ==> Hasil adalah berupa direktori /dist yang kemudian dapat dideploy ke static hosting.

## Implementasi SSR
### nuxt.config.js ==> hasil berupa direktori /.nuxt yang kemudian dapat dideploy ke NodeJS Server.

## SEO
### Search Engine Optimization , yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau halaman web dari mesin pencari. 
### SEO Meta tag adalah tag tak terlihat didalam <head> yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web.

## Cara Kerja SEO Meta
### SEO Meta Tag dapat diterapkan dari nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi.

## SEO Meta tag Penting
### - Informasi Dasar ; title dan deskripsi
### - identitas unik dengan link canonical
### - informasi untuk media sosial, open graph:og:title

## PWA 
### Progressive Web Apps, dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan , keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja , dimana saja, diperangkat apapun dengan basis kode tunggal.

