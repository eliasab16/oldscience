let pluto = document.getElementById('pluto');
let plutoDesc = document.getElementById('pluto__text');
let darkDesertRight = document.getElementById('right__desert');
let darkDesertLeft = document.getElementById('left__desert');
let mainText = document.getElementById('main__text');
let mountainSide = document.getElementById('mountain__side');

window.addEventListener('scroll', function () {
    let scrollValue = window.scrollY;
    offsetPlutoVal = 250;
    startVal = scrollValue - offsetPlutoVal;

    if (scrollValue > offsetPlutoVal) {
        pluto.style.left = 5 * (startVal) + 'px';
        pluto.style.marginTop = (startVal * 0.16) ** 2 - 5 * startVal + 'px';
        plutoDesc.style.left = 5.8 * (startVal) + 'px';
        plutoDesc.style.marginTop = (startVal * 0.172) ** 2 - 5 * startVal + 'px';
    }
    // this moves the elements out of sight when scrolling back up
    if (scrollValue < 250) {
        // pluto.style = "none";
        pluto.style.marginTop = - 2 * startVal + 'px';
        pluto.style.left = 2 * this.startVal + 'px';
        plutoDesc.style.marginTop = - 2 * startVal + 'px';
        plutoDesc.style.left = 2 * this.startVal + 'px';
    }

    if (scrollValue > 450) {
        mountainSide.style.top = 1.1 * (scrollValue - 450) + 'px';
        mountainSide.style.left = -1 * (scrollValue - 450) + 'px'
    }

    if (scrollValue > 550) {
        darkDesertRight.style.left = 3.8 * (scrollValue - 550) + 'px';
        darkDesertLeft.style.left = 3.8 * (scrollValue - 550) + 'px';
    }
    mainText.style.top = 0.32 * scrollValue + 'vh';
    // pluto.style.top = scrollValue * -1.5 + 'px';
})

var activeSubjects = {
    "zoology-book": false,
    "physics-book": false,
    "geo-book": false,
    "evolution-book": false,
    "space-book": false
}

var activePeriods = {
    "c65": false,
    "c70": false,
    "c75": false,
    "c80": false,
    "c90": false,
    "c95": false,
    "c00": false,
    "c05": false,
    "c10": false
}

// activate periods
var yearbooks = document.getElementsByClassName("book__clr--img");
for (var i = 0; i < yearbooks.length; i++) {
    yearbooks[i].addEventListener("click", function () {
        if (this.classList.contains("active")) {
            this.className = this.className.replace(" active", "");
            activePeriods[this.id] = false;
        } else {
            this.className += " active";
            activePeriods[this.id] = true;
        }
    });
}

// activate subjects
var subjectbooks = document.getElementsByClassName("subject__book");
for (var i = 0; i < subjectbooks.length; i++) {
    subjectbooks[i].addEventListener("click", function () {
        if (this.classList.contains("active")) {
            this.className = this.className.replace(" active", "");
            activeSubjects[this.id] = false;
        } else {
            this.className += " active";
            activeSubjects[this.id] = true;
        }
    });
}
