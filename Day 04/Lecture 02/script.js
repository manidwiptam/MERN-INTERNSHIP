let a = 7;
let b = -7;

if (a % 2 === 0) {
    document.getElementById("result").textContent = "The number a is even.";
}
else {
    document.getElementById("result").textContent = "The number a is odd.";
}

console.log("Q1 - The number a is " + a + ".");


if (b > 0) {
    document.getElementById("result2").textContent = "The number b is positive.";
}
else if (b < 0) {
    document.getElementById("result2").textContent = "The number b is negative.";
}
else {
    document.getElementById("result2").textContent = "The number b is zero.";
}

console.log("Q2 - The number b is " + b + ".");
