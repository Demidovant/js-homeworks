let c = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
img.onclick = () => {
    c.textContent = Number(c.textContent) + 1;
    if (Number(c.textContent) % 2 === 0) {
        img.width -= 20;
        img.height -= 20;
    } else {
        img.width += 20;
        img.height += 20;
    }
}
