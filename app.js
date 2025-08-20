
let a = 5;
let b = 10;
let c = 15;

if (a < b && b < c) {
  console.log("O'sish tartibida");
} else if (a > b && b > c) {
  console.log("Kamayish tartibida");
} else {
  console.log("Aralash");
}


let login = "admin";
let parol = "12345";

if (login === "admin" && parol === "12345") {
  console.log("Xush kelibsiz");
} else if (login === "admin") {
  console.log("Parol noto'g'ri");
} else {
  console.log("Login topilmadi");
}


let mat = 70;
let inf = 55;
let eng = 65;

let sanash = 0;

if (mat > 60) sanash++;
if (inf > 60) sanash++;
if (eng > 60) sanash++;

if (sanash === 3) {
  console.log("O'tdi");
} else if (sanash === 2) {
  console.log("Shartli o'tdi");
} else {
  console.log("O'tmadi");
}


let yosh = 16;
let kun = "shanba";

if (yosh < 7) {
  console.log("Bilet bepul");
} else if (yosh >= 7 && yosh <= 18) {
  if (kun === "shanba" || kun === "yakshanba") {
    console.log("Bilet narxi: 25000 so'm");
  } else {
    console.log("Bilet narxi: 20000 so'm");
  }
} else {
  if (kun === "shanba" || kun === "yakshanba") {
    console.log("Bilet narxi: 40000 so'm");
  } else {
    console.log("Bilet narxi: 30000 so'm");
  }
}


