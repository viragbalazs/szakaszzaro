let t = [1, 2, 3, 4, 5, 6, 8, 10, 11];
let darabszam = 0;

for (let i = 0; i < t.length; i++) {
  if (t[i] % 2 === 0) {
    darabszam++;
  }
}

console.log(darabszam);
