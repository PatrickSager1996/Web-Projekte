let isBlue = true;
const colors = ['#028B84', '#EE0808'];

window.onload = function() {
    document.body.addEventListener("click", handleClick);
}

function handleClick() {

    if(isBlue) {
        isBlue = false;
        const paragraphs = document.querySelectorAll('p');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        paragraphs.forEach(paragraph => {
            paragraph.style.color = randomColor;
        });
    } else {
        isBlue = true;
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.style.color = '#CBCBCB';
        });
    }
}