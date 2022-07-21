const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo-1");
const input2 = document.querySelector("#calculo-2");
const btn = document.querySelector("#calculate");
const p = document.querySelector("#result");

// Listen the events:
function btnOnclick() {
   const result = (parseInt(input1.value) + parseInt(input2.value));
   p.innerText = `Result: ${result}`;
}
