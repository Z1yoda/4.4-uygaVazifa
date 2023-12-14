// 1-masala n gacha 3 && 7 ga karrali sonlar soni
console.log("1-masala");
let n = 45;
let soni = 0;

for (let i = 1; i <= n; i++) {
  if (i % 3 == 0 && i % 7 == 0) {
    soni = soni + 1;
  }
}

console.log(soni);

// 2-masala n dan 1 gacha juft sonlar yigindisi
console.log("2-masala");
let N = 9;
let yigindisi = 0;

for (let i = N; i > 1; i--) {
  if (i % 2 == 0) {
    yigindisi += i;
  }
}
console.log(yigindisi);

// 3-masala m soni berilgan son(k) gacha 5 ga bolinadigan
// && 7 ga bolinmaydiganlarning yigindisi
console.log("3-masala");
let m = 5;
let k = 20;
let yigindi = 0;

for (let i = 5; i <= 20; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    yigindi += i;
  }
}
console.log(yigindi);

// 4-masala a va b soni berilgan (a<b). Ular orasidagi manfiy sonlar yigindisi
console.log("4-masala");
let a = -5;
let b = 3;
let manfiySonYigindi = 0;

for (let i = a; i <= b; i++) {
  if (i > 0) {
    manfiySonYigindi += i;
  }
}
console.log(manfiySonYigindi);

// 5-masala sonning faktorialini topadigan funksiya yozing
console.log("5-masala");

let num = 5;
let faktorial = 1;

for (let i = 1; i <= num; i++) {
  faktorial *= i;
}
console.log(faktorial);

//6-masala sonning bo'luvchilarini topuvchi algoritm tuzing
console.log("6-masala");

let son = 8;

for (let i = 1; i <= son; i++) {
  if (son % i === 0) {
    console.log(i);
  }
}

// 7-masala Sonning bo'luvchilari sonini topuvchi algoritm tuzing
console.log("7-masala");

// let son = 8
let number;
let buluvchi = 0;

for (let i = 1; i <= son; i++) {
  if (son % i === 0) {
    buluvchi += 1;
  }
}
console.log(buluvchi);

// 8-masala sonning tub yoki tubmasligini tekshiruvchi algoritm tuzing
console.log("8-masala");

let buluvchiSoni = 0;
let son1 = 13;

for (let i = 1; i <= son1; i++) {
  if (son1 % i === 0) {
    buluvchiSoni += 1;
  }
}
if (buluvchiSoni <= 2) {
  console.log("Berilgan son tub son");
} else {
  console.log("Son tub emas");
}

// 9-masala 1^2 + 2^2 + 3^2 + 4^2 + ... + n^2=?
console.log("9-masala");

let c = 4; // 1+4+9+16=30
let kvadratYigindi = 0;

for (let i = 1; i <= c; i++) {
  kvadratYigindi = kvadratYigindi + i ** 2;
}
console.log(kvadratYigindi);

// 10-masala n sonigacha barcha tub sonlar yigindisini toping
console.log("10-masala");
