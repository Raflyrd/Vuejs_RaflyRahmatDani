# Materi Vue Helper
## Resume Materi Vue Helper

## Navigasi
### Navigasi adalah kegiatan berpindah dari satu halaman ke halaman lain.

## Cara Vue Melakukan Navigasi
### untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman tersebut ada.

## Navigasi Beranak
### Navigasi beranak adalah sub-path dari path yang ada.

### - user (induk dari setting)
### - setting (Anak dari user dan induk dari privacy)
### - privacy (Anak dari setting)

## Navigasi Dinamis
### Navigasi Dinamis adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu persatu

## Layout Template
### Layout adalah susunan tata letak , sedangkan layout template pada vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing masing halaman.
### Layout (Membuat susunan tata letak yang sama untuk setiap halaman, seperti halnya navbar atau footer)
### Halaman (Memuat komponen yang berubah ubah sesuai konten halaman, namun sudah tidak perlu lagi menyertakan navbar di setiap komponen view halaman)

## layout Template
### Layout juga dapat diterapkan untuk mengisolasi logika tampilan viewport agar kode di setiap halaman bersih dan efisien.

## Cara Kerja Layout
### meneruskan konten dari anak komponennya

## Direktori Layout
### Direktori layout sejajar dengan direktori router atau sejajar dengan direktori view

## Membuat dan Menggunakan Layout

## Penyimpanan Global
### Sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi.

## Penyimpanan Global Dengan Vuex
### Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js
### Penyimpanan terpusat untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi.

## Direktori Vuex Store
### Vuex memiliki direktori sendiri bernama store yang sejajar dengan direktori main.js
### Selain indeks.js biasanya didalam direktori store juga tersimpan modul modul store untuk pengelompokan state agar lebih rapih dan terstruktur.

## Vuex Mutations
### Memodifikasi nilai dari state yang tersimpan didalam store menggunakan sintaks mutation.

## Vuex Actions
### Bertugas sebagai pintu masuk perintah yang menghubungkan komponen dengan store, Actions perlu memanggil fungsi di Mutations untuk memodifikasi nilai state yang ada di store. ( Tempat Komunikasi dengan API )

### Nilai yang ada didalam Vuex store akan dihapus atau disetel ulang sesuai dengan nilai awal jika halaman dimuat ulang. Karena nilai state yang ada di store disimpan di dalam memory instance.

## Penyimpanan Global Permanen
### Pada kasus pemakaian tertentu kita perlu mem permanenkan state yang ada di store agar tidak hilang jika halaman dimuat ulang, konsep ini disebut dengan penyimpanan Global Permanen

## Penyimpanan Permanen dengan Vuex-Persistedstate
### Vuex-Persistedstate dapat mempertahankan dan rehidrasi Vuex state kita di antara pemuatan ulang halaman, dengan menyimpan di localstrorage atau bahkan di dalam cookies.
