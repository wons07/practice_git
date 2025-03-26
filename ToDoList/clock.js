const clock = document.querySelector("#hm");

function getClock(){
  const d = new Date();
    const h = String(d.getHours()).padStart(2,"0");
    const m = String(d.getMinutes()).padStart(2,"0");
    const s = String(d.getSeconds()).padStart(2,"0");
    clock.innerText = `${h}:${m}`;
    document.querySelector("#s").innerText = s;
}


  function startClock() {//원래 아래 주석이 맞지만 초에서 미세하게 안맞아서 밀리세컨드까지 계산하여 초단위까지 정확히 맞춰줌
    getClock();
    const now = new Date();
    const nextTick = new Date(now.getTime() + 1000 - now.getMilliseconds());
    const timeout = nextTick - now;
    setTimeout(startClock, timeout);
}

startClock();

// setInterval(getClock, 1000);