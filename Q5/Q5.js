let X = Number(prompt("Enter a number:"));
let M = 0;

for (let i=1 ; i<= X;  i++ ) {
    if (i* i== X) {
        M = i;
        break;
    }
}

document.getElementById("root").innerHTML = M;