let x = Number(prompt("Enter first number:"));
let y = Number(prompt("Enter second number:"));
let M = prompt("Enter (+, -, *, /, %):");

if (M === "+") {
    document.getElementById("calc").innerHTML = x + y;
} else if (M === "-") {
    document.getElementById("calc").innerHTML = x - y;
} else if (M === "*") {
    document.getElementById("calc").innerHTML = x * y;
} else if (M === "/") {
    document.getElementById("calc").innerHTML = x / y;
} else if (M === "%") {
    document.getElementById("calc").innerHTML = x % y;
}

