const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const fixLight = document.getElementById('fixLight');
const lamp = document.getElementById('lamp');
const breakLight = document.getElementById('breakLight');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function fixLamp() {
    lamp.src = './img/desligada.jpg';
}

function breakLamp() {
    lamp.src = './img/quebrada.jpg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
fixLight.addEventListener('click', fixLamp);
breakLight.addEventListener('click', breakLamp);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


