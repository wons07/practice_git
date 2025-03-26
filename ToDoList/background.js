const imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const chosenImage =imgs[Math.floor(Math.random() * imgs.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// bgImage.style = ""

// document.body.appendChild(bgImage);

//원래 img태그에 적용시켰지만 background적용을 위해 body에 적용시킴
const bg = document.querySelector("body");

bg.style.backgroundImage = `url(img/${chosenImage}`;
bg.style.backgroundRepeat = "no-repeat";
bg.style.backgroundSize = "cover";
