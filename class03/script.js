const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo-1");
const input2 = document.querySelector("#calculo-2");
const btn = document.querySelector("#calculate");
const p = document.querySelector("#result");


// Listen the events:
form.addEventListener('submit', sumInputs);

function sumInputs(event) {
   console.log({event});
   event.preventDefault();
   const result = (parseInt(input1.value) + parseInt(input2.value));
   p.innerText = `Result: ${result}`;
}


// Other form to solve [add type = 'button' in last button in HTML]: 
// <button type = 'button' id="calculate">Calculate</button>
// btn.addEventListener('click', btnOnclick);
// function btnOnclick(event) {
//    const result = (parseInt(input1.value) + parseInt(input2.value));
//    p.innerText = `Result: ${result}`;
// }

