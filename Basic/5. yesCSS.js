const h1 = document.querySelector("div.hello:first-child h1");

function click(){
    // console.log(h1.computedStyleMap.color); //getter
    // h1.computedStyleMap.color = "blue";     //setter
    // console.log(h1.computedStyleMap.color); //getter
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", click);
