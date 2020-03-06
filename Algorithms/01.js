let nk = readline().split(' ');
let n = parseInt(nk[0]);
let k = parseInt(nk[1]);

let ci = [];
for (let i = 0; i < n; i++) {
    ci.push(parseInt(readline()));
}

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += ci[i];
}

if (k <= sum) {
    print("YES");
} else {
    print("NO");
}
