for (let i = 20; i >= -20; i--) {
    console.log(i);
}

for (let i = 30; i <= 90; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        console.log(i);
    }
}

let text1 = "Bugun javascript mashqlarini bajarayapmiz"
let countUnli = 0
let unliHarflar = "aeiouAEIOU"

for (let i = 0; i < text1.length; i++) {
    if (unliHarflar.includes(text1[i])) {
        countUnli++
    }
}
console.log("Unli harflar soni: " + countUnli);

let text2 = "Bugun 3-ta mashq 5 daqiqada bajarildi va 100% topshirildi"
let raqamlar = ""

for (let i = 0; i < text2.length; i++) {
    if (!isNaN(text2[i]) && text2[i] !== ' ') {
        raqamlar += text2[i]
    }
}
console.log("Raqamlar: " + raqamlar);

let text3 = "Salom, bu 2025-yilning eng yaxshi  kunlaridan biri!"
let unli = ""
let undosh = ""
let probel = ""
let belgi = ""
let raqam = ""

for (let i = 0; i < text3.length; i++) {
    let char = text3[i]

    if ("aeiouAEIOU".includes(char)) {
        unli += char
    } else if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(char)) {
        undosh += char
    } else if (char === " ") {
        probel += char
    } else if (!isNaN(char) && char !== " ") {
        raqam += char
    } else {
        belgi += char
    }
}

console.log("Unlilar: " + unli);
console.log("Undoshlar: " + undosh);
console.log("Bo'sh joylar soni: " + probel.length);
console.log("Belgilar: " + belgi);
console.log("Raqamlar: " + raqam);
