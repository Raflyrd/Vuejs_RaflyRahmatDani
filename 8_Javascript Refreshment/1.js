var a = 5;
let b = "Kampus Merdeka";
const nama = "Budi";

//1.a mengambil index kedua
console.log("array = " + lengkap_arr[2]);
console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

//1.b mengubah let dari false menjadi truee
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];
let asal = "Indonesia";

function perkenalan() {
  return console.log("perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + " berasal dari " + asal);
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

//1.c pemanggilan function perkenalan
perkenalan();


 //1.d menampilkan output pada console
a == b;
nama == b;


