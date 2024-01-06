const reveals = document.querySelectorAll('.reveal');


function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect()
    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
}


reveals.forEach((reveal) => {
    document.addEventListener ('scroll', (event) => {
            if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
            }
            else if (reveal.classList.contains('reveal_active')) {
                    reveal.classList.remove('reveal_active');
            }
    })
})
