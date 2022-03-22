# Komponen Vue

## Resume Materi Komponen Vue

## Javascript Module
### Modul yang bisa berisi kelas pustaka atau fungsi untuk tujuan tertentu
### Modul hanya sebuah file. Satu kode skrip adalah satu modul

## Export
### Digunakan untuk menyediakan fungsi, objek , atau nilai primitive dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import.
### a.	Name Exports ( Ekspor nol atau lebih permodul ) ( export const )
### b.	Default Export ( Satu permodul ) ( export default )

## Import
### Digunakan untuk mengambil variabel objek, atau fungsi yang disediakan oleh modul lain.
### a.	Importing defaults ( import target )
### b.	Import multiple export ( import { target } )
### c.	Rename multiple exports ( import { targer as t } )
### d.	Import defaults + multiple ( import targerDefault, { target as t } )

## Komponen VUE
### Sebuah Komponen file tunggal Vue yang bertujuan untuk dapat digunakan lebih dari satu kali ditempat yang berbeda.
## Cara Kerja Komponen Vue
### 1.	Induk ( parent )
### 2.	Anak ( child )
## Direktori Komponen
### Pada umumnya komponen dijadikan satu dengan komponen lain dan dipisah dengan komponen yang bertugas sebagai halaman.
### -	Halaman dapat menggunakan komponen namun komponen tidak dapat menggunakan halaman
### -	Komponen dapat menggunakan komponen lain.
## Paradigma Fungsi Pembantu
### Sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali ditempat yang berbeda.

## Direktori Komponen
### Pada umumnya fungsi pembantu dijadikan satu pada direktori yang sejajar dengan komponen atau halaman.

## Fungsi Pembantu
### -	Utilities
### -	Utils
### -	Helpers
### -	Tools

## Contoh :
### -	Operator ( penambahan, rata rata, median, min-max, hitung umur dll )
### -	Formatter ( tanggal, waktu, mata uang dll )
### -	Validator ( email, nomor telfon, nomor kartu kredit dll )
### -	Generator ( angka random, text random, warna, format text, dll )

## Lifecycle
### Setiap Vue Instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai Lifecycle atau siklus hidup.

## Cara Kerja Vue
### Siklus hidup sebuah Vue instance berawal ketika inisiasi dan berakhir ketika penghancuran.
### Setiap siklus memiliki hook-nya masing masing yang berbentuk fungsi.

## 3 Lifecyle Utama
### 1.	Created 
### Berlangsung setelah instance terbentuk dan sebelum DOM dirender
### 2.	Mounted
### Berlangsung setelah DOM dirender
### 3.	Destroyed
### Berlangsung sebelum instance dihancurkan
