// Base of function tag :

function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const val = values[i] !== undefined ? `${values[i]}` : "";
    return acc + str + val;
  }, "");
}

const name = "Alice";
const role = "Admin";

// Use the tag function
const alert = highlight`User ${name} has logged in as ${role}.`;

console.log(alert);

//----------------------------------------------------------------------------------------------------------------------

//A date function:

const getShortDate = () => new Date().toISOString().split('T')[0];

document.getElementById("date").textContent = ("Date : " + getShortDate());

console.log(getShortDate());

//-----------------------------------------------------------------------------------------------------------------------

//Driving licensce :

let adult = 18;

if(adult > 18) {
    document.getElementById("ok").textContent = "The person can get driving licence"
}
else{
    document.getElementById("ok").textContent = "The person can not get driving licence"
}

//-----------------------------------------------------------------------------------------------------------------------

//Palendrom number :

