function speedxx(speed){
let li = document.createElement("li");
let span = document.createElement("span");

li.setAttribute("class", "mejs-speed");
li.setAttribute("data-speed", `${speed}`);
li.innerHTML = `${speed}x`;

span.setAttribute("class", "speed-tooltip");
span.innerHTML = `${speed}x`;

li.appendChild(span);

let sibling = document.querySelector('.mejs-speed');
sibling.parentNode.appendChild(li);
}

speedxx(3);