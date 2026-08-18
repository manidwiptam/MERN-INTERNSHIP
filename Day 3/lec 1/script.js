let welcome = "Welcome to my first JavaScript program!";
let x = 1;
let y = 7;
let a = Math.floor(Math.random()*100);
let count = 10;

console.log(welcome);
console.log("The Sum of x and y is: ", x+y);

document.getElementById("random-value").textContent = a;

while (x < 10){
    console.log("The value of x is: ");
    console.log(x);
    x++;
}

while(count > 0){
    console.log("The value of count is: ");
    console.log(count);
    count--;
}

const reloadButton = document.getElementById('reload-btn');

reloadButton.addEventListener('click', () => {
    window.location.reload();
});