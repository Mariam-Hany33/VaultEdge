// Q2
// let x = 5;
// let y = 6;
// let z = 8;

// 2) Get 3 numbers from user and calculate max and minimum.   -----------(required)

let x = Number(prompt("Enter first number:"));
let y = Number(prompt("Enter second number:"));
let z = Number(prompt("Enter third number:"));

if(x>=y && x >= z){
    document.getElementById("max-min").innerHTML = "max: " + x ;
}else if(y>=z && y >= x)
{
    document.getElementById("max-min").innerHTML = "max: " + y ;
}else if(z>=x && z >= y)
{
    document.getElementById("max-min").innerHTML = "max: " + z ;
}
if(x<=y && x <= z){
    document.getElementById("max-min").innerHTML += "  min: " + x ;
}else if(y<=z && y <= x)
{
    document.getElementById("max-min").innerHTML += "  min: " + y ;
}else if(z<=x && z <= y)
{
    document.getElementById("max-min").innerHTML += "  min: " + z ;
}