const counter_main = document.getElementById("counter_main");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

let count = 0;

increment.onclick=function(){
    count++;
    counter_main.innerHTML=count;
}

decrement.onclick=function(){
    if(!count==0){
        count--;
        counter_main.innerHTML=count;
    }
}

reset.onclick=function(){
    count = 0;
    counter_main.innerHTML=count;
}

