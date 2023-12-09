let dead = document.getElementById('dead')
let lost = document.getElementById('lost')
let getHole = index => document.getElementById(`hole${index}`);

function checkStatus(dead, lost) {
    if (Number(dead.textContent) >= 10) {
        alert(`Вы победили!\nУбито кротов: ${dead.textContent}\nПромахов: ${lost.textContent}`);
        location.reload();
    } else if (Number(lost.textContent) >= 5) {
        alert(`Вы проиграли!\nУбито кротов: ${dead.textContent}\nПромахов: ${lost.textContent}`);
        location.reload();
    }
} 


for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        };
        checkStatus(dead, lost);
    };
};