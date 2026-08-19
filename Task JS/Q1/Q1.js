// Q1
// 1) Write a js program to input marks of five subjects Physics/50,  Chemistry, Biology, Math and Computer. 
// 	Calculate and show to the user (the percentage and the grade) according to following: 
// 	Percentage >= 90%: Grade A
// 	Percentage >= 80%: Grade B
// 	Percentage >= 70%: Grade C
// 	Percentage >= 60%: Grade D
// 	Percentage >= 40%: Grade E
// 	Percentage <   40%: Grade F
// 	NOTE:-
// 	* The full mark of each subject is 50 and max grade: 250  -----------(required)

let physics = Number(prompt("Enter Physics marks (50):"));
let chemistry = Number(prompt("Enter Chemistry marks (50):"));
let biology = Number(prompt("Enter Biology marks (50):"));
let math = Number(prompt("Enter Math marks (50):"));
let computer = Number(prompt("Enter Computer marks (50):"));

let Score = physics + chemistry + biology + Math + computer;
let full_Mark = 250;
let myScore = (Score / full_Mark) * 100;

if (myScore >= 90) {
    document.getElementById("myScore").innerHTML = "Grade A";
} else if (myScore >= 80) {
    document.getElementById("myScore").innerHTML = "Grade B";
} else if (myScore >= 70) {
    document.getElementById("myScore").innerHTML = "Grade C";
} else if (myScore >= 60) {
    document.getElementById("myScore").innerHTML = "Grade D";
} else if (myScore >= 40) {
    document.getElementById("myScore").innerHTML = "Grade E";
} else {
    document.getElementById("myScore").innerHTML = "Grade F";
}





