const h1 = document.querySelector("div.hello:first-child h1");


// //className을 활용한 예제
// function click(){
//     const clcikedClass = "clicked normal"
//     if(h1.className === clcikedClass){
//         h1.className = "";
//     }else{
//         h1.className = clcikedClass;
//     }
// }



// //classList를 활용한 예제
// function click(){
//     const clcikedClass = "clicked normal"
//     if(h1.classList.contains(clcikedClass)){//class가 click되고 있는지 확인
//         h1.classList.remove(clcikedClass);
//     }else{
//         h1.classList.add(clcikedClass);
//   }
// }


//위에 코드와 똑같이 동작하지만 toglle을 써서 1줄로 줄임
function click(){
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", click);






h1.addEventListener("click", click);



