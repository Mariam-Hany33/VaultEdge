let x = Number(prompt("enter a number:"));
if (x > 0) {
    document.getElementById("P-N").innerHTML = "Positive" ;
} else if (num < 0) {
    document.getElementById("P-N").innerHTML = "Negative" ;
} else {
    document.getElementById("P-N").innerHTML = "Zero" ;
}

