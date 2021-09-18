let mePic = document.getElementById('mePic');
let glassesPic = document.getElementById('glassesPic');
let bombPic = document.getElementById('bombPic');
let bombButton = document.getElementById('bombButton');
let counter = 0;
let glassesInterval;

function darkBackground() {
    bombPic.style.opacity = '0';
    mePic.style.backgroundImage = 'none';
    mePic.style.backgroundColor = '#0C2427';
}

function glassesBlinking() {
    glassesPic.style.opacity = '1';
    counter += 1;
    //console.log(counter);
    if (counter >= 7) {
        glassesPic.style.display = 'inherit';
        clearInterval(glassesInterval);
    } else {
        if (glassesPic.style.display === 'none') {
            glassesPic.style.display = 'inherit';
        } else {
            glassesPic.style.display = 'none';
        }
    }
}
bombButton.onclick = (e) => {
    bombButton.disabled = true;
    bombPic.style.opacity = '1';
    setTimeout(darkBackground, 1500);
    setTimeout(() => {
        glassesInterval = setInterval(glassesBlinking, 1000);
    }
        , 1000);
}
/*girlPic.onmouseout = (e) => {
    eyePic.style.opacity = '0';
    bombPic.style.opacity = '0';
}*/
//girlPic.onclick = (e) => console.log("Jea");