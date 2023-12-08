const firstDiv = document.getElementById('firstDiv');
let img = document.createElement("img");
let h2 = document.createElement("h2");
img.src = "https://tk.wikipedia.org/wiki/JavaScript#/media/Fa%C3%BDl:Unofficial_JavaScript_logo_2.svg";
img.alt = "image";
img.style.width = "700px";
h2.textContent = "image title";
h2.classList.add("title");
h2.style.color = "red";
h2.style.fontSize = "30px";
firstDiv.appendChild(img);
firstDiv.appendChild(h2);
//2

const myDivs = document.querySelectorAll('.myDivs');
myDivs.forEach((div) => {
    let p = document.createElement("p")
    p.textContent = "hello"
    p.classList.add("text")
    div.appendChild(p)
}) ;
//3
const linkElement = document.createElement('a');
linkElement.href = 'https://google.com';
linkElement.target = '_blank';
linkElement.textContent = 'google link';
linkElement.classList.add('link'); 
linkElement.classList.add('link'); 
linkElement.classList.replace("link", "newclass");

const box = document.querySelector('.box');
box.appendChild(linkElement);