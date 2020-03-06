let nm = readline().split(' ');
let n = parseInt(nm[0]);
let m = parseInt(nm[1]);

let myTable = new Array();
for (let i = 0; i < n; i++) {
    myTable.push(readline().split(''));
}

var result = 0;
for (let i = n - 1; i >= 0; i--) {
    let wStar = 0;
    for (let j = m - 1; j >= 0; j--) {
        if (myTable[i][j] == '*') {
            wStar++;
            if (wStar >= 2) {
                for (let t = 2; t <= wStar; t++)
                {
                    searchVertical(i, j, t);
                }
            }
        }
    }
}

function searchVertical(i, j, wStar) {
    let hStar = 0;
    for (let k = i; k >= 0; k--) {
        if (myTable[k][j] == '*') {
            hStar++;
        }
    }
    if (hStar >= 2 * wStar) {
        result++;
    }
}

print(result)