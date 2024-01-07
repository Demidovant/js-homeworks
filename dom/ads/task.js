const rotatorCases = document.querySelectorAll('.rotator__case');
let idx = 0;

// setInterval(() => {
//     idx += 1;
//     rotatorCases.forEach((rotatorCase) => {
//         if (rotatorCase.classList.contains('rotator__case_active')) {
//             rotatorCase.classList.remove('rotator__case_active');
//         }
//     })
//     if (idx === rotatorCases.length) {
//         idx = 0;
//     }
//     rotatorCases[idx].classList.add('rotator__case_active');
//     rotatorCases[idx].style.color = rotatorCases[idx].getAttribute('data-color');
// }, 1000)

function rotator() {
    idx += 1;
    rotatorCases.forEach((rotatorCase) => {
        if (rotatorCase.classList.contains('rotator__case_active')) {
            rotatorCase.classList.remove('rotator__case_active');
        }
    })
    if (idx === rotatorCases.length) {
        idx = 0;
    }
    rotatorCases[idx].classList.add('rotator__case_active');
    rotatorCases[idx].style.color = rotatorCases[idx].getAttribute('data-color');
    let speed = rotatorCases[idx].getAttribute('data-speed');
    // console.log(speed);
    setTimeout(rotator, speed);
}

rotator();