const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function chcolor() {
    //console.log("title was clicked!");
    h1.style.color = "blue";
}

function mouse(){
    //console.log("mouse is here");
    h1.innerText = "Mouse is here!";
}

function nomouse(){
    //console.log("mouse isn't here");
    h1.innerText = "Mouse is gone!";
}

function windowResizes(){
    document.body.style.backgroundColor = "tomato";
}

function windowCopy(){
    alert("copier!!");
}

function off(){
    alert("yout WIFI is down");
}

function on(){
    alert("your WIFI is connected!")
}


//h1.onclick = chcolor;
h1.addEventListener("click", chcolor);
//h1.onmouseenter = mouse;
h1.addEventListener("mouseenter", mouse);
//h1.mouseleave = nomouse;
h1.addEventListener("mouseleave", nomouse);
//addEventListener를 선호하는 이유는 removeEventListener를 통해 제거가 가능해서

window.addEventListener("resize", windowResizes);   
window.addEventListener("copy", windowCopy);
window.addEventListener("offline", off);
window.addEventListener("online", on);