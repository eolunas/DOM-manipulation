// h1 { color: red }
const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const paragraph = document.querySelector(".paragraph");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
   h1,
   p,
   paragraph,
   pid,
   input,
});

// Write values:
h1.innerHTML = "Hello, <br>this text was modified<br>";
paragraph.innerText = "<br>this text was also modified<br>";

// Read and write Attribute:
console.log(h1.getAttribute('screen'));
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'title-mod');
h1.classList.add('title-add');
h1.classList.remove('title-mod');
input.value = '2236455';

// Create element from zero:
const img = document.createElement('img');
img.setAttribute('src', 'https://content.instructables.com/ORIG/FD4/OPVM/IYGFPVI2/FD4OPVMIYGFPVI2.jpg?auto=webp&frame=1&fit=bounds&md=1e6c54891a2c1f329732052dafeefab5');
console.log(img);
pid.appendChild(img);