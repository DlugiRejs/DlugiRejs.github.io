let girlPic = document.getElementById('girlPic');
let eyePic = document.getElementById('eyePic');
let bombPic = document.getElementById('bombPic');
let counter = 0;
let eyeInterval;

function darkBackground() {
    girlPic.style.backgroundImage = 'none';
    girlPic.style.backgroundColor = 'black';
}

function eyeBlinking() {
    counter += 1;
    console.log(counter);
    if (counter >= 5) {
        eyePic.style.display = 'none';
        clearInterval(eyeInterval);
    } else {
        if (eyePic.style.display === 'none') {
            eyePic.style.display = 'inherit';
        } else {
            eyePic.style.display = 'none';
        }
    }
}
girlPic.onclick = (e) => {
    eyePic.style.opacity = '1';
    bombPic.style.opacity = '1';
    setTimeout(darkBackground, 3000);
    setTimeout(() => {
        eyeInterval = setInterval(eyeBlinking, 1000);
    }
        , 4000);
}
girlPic.onmouseout = (e) => {
    eyePic.style.opacity = '0';
    bombPic.style.opacity = '0';
}
//girlPic.onclick = (e) => console.log("Jea");