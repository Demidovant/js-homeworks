t = document.getElementById('timer')
let timerId = setInterval(() => {
    if (Number(t.textContent) === 0) {
        clearTimeout(timerId);
        alert("Вы победили в конкурсе!")
    } else {
        t.textContent = Number(t.textContent) - 1;
    }
}, 1000)


  