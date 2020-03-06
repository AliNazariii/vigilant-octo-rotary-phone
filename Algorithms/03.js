let n = parseInt(readline());

let ai = []
let state = new Array(n).fill(0)
let result = new Array(n).fill(0)

for (let i = 0; i < n; i++) {
    ai.push(parseInt(readline()));
    preCheck(i)
}

function preCheck(i) {
    if (ai[i] == 1) {
        state[0] = 2;
        waitress(i)
        result[0] = i + 1;
    }
    else {
        if (state[ai[i] - 2] == 2) {
            state[ai[i] - 1] = 2;
            waitress(i)
            result[ai[i] - 1] = i + 1;
        }
        else {
            state[ai[i] - 1] = 1;
        }
    }
}

function waitress(i) {
    for (let j = ai[i]; j < n; j++) {
        if (state[j] == 1) {
            state[j] = 2;
            waitress(i)
            result[j] = i + 1;
        }
        else {
            return
        }
    }
}

print(result.toString().split(',').join('\r\n'))