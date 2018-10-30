let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6, 8, 10];
let c = [];
let i;
let k = 0;

for (i = 0; i < a.length; i++) {
  c[k] = a[i];
  k++;
}

for (let j = 0; j < b.length; j++) {
  i = 0;
  while (i < a.length && a[i] !== b[j]) {
    i++;
  }
  if (i === a.length) {
    c[k] = b[j];
    k++;
  }
}

console.log(c);
