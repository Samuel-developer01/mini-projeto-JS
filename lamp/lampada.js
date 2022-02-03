
function lampOn() {
    const On = document.getElementById('On')
    const imgOn = './img/ligada.jpg'
    const imgOff = './img/desligada.jpg'
    const lamp = document.getElementById('lamp').src
    if(lamp == On) {
        document.getElementById('lamp').src = imgOff
    } else { document.getElementById('lamp').src = imgOn }
}

function lampOff() {
    const On = document.getElementById('On')
    const imgOn = './img/ligada.jpg'
    const imgOff = './img/desligada.jpg'
    const lamp = document.getElementById('lamp').src
    if(lamp == On) {
        document.getElementById('lamp').src = imgOn
    } else { document.getElementById('lamp').src = imgOff }
}





document.getElementById('On').addEventListener("click", lampOn);
document.getElementById('On').addEventListener("click", lampOff);
