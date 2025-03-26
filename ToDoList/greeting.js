//const loginForm = document.getElementById("login-form");
const toDoform = document.getElementById("todo-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

function LoginSubmit(event){
    event.preventDefault();//제출할때 화면 넘어감 방지(브라우저 기본동작을 막음)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    // greeting.innerText = "hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoform.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", LoginSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    toDoform.classList.add(HIDDEN_CLASSNAME);
}else{
    paintGreetings(savedUsername);
}
