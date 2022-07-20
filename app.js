let pluto = document.getElementById('pluto');
let darkDesertRight = document.getElementById('right__desert');
let darkDesertLeft = document.getElementById('left__desert');
let mainText = document.getElementById('main__text');
let mountainSide = document.getElementById('mountain__side');

window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    offsetPlutoVal = 250;
    startVal = scrollValue - offsetPlutoVal;

    if (scrollValue > offsetPlutoVal) {
        pluto.style.left = 5 * (startVal) + 'px';
        pluto.style.marginTop = (startVal * 0.16) ** 2 - 5 * startVal + 'px';

    }
    if (scrollValue < 250) {
        // pluto.style = "none";
        pluto.style.marginTop = - 2 * startVal + 'px';
        pluto.style.left = 2 * this.startVal + 'px';
    }

    if (scrollValue > 450) {
        mountainSide.style.top = 1.1 * (scrollValue - 450) + 'px';
        mountainSide.style.left = -1 * (scrollValue - 450) + 'px'
    }

    if (scrollValue > 500) {
        darkDesertRight.style.left = 4 * (scrollValue - 500) + 'px';
        darkDesertLeft.style.right = 4 * (scrollValue - 500) + 'px';
    }
    mainText.style.top = 0.32 * scrollValue + 'vh';
    // pluto.style.top = scrollValue * -1.5 + 'px';
})
