let text = "Hello World";

try {
    text[0] = "A";

}catch(err){
text = err.message
}

console.log(text)


let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);

console.log(result);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 4);
console.log(citrus);

