
function lampOn() {
    const On = document.getElementById('On')
    const Off = document.getElementById('Off')
    const lamp = document.getElementById('lamp').src
    if(lamp == On) {
        document.getElementById('lamp').src = './img/desligada.jpg'
    } else { document.getElementById('lamp').src = './img/ligada.jpg' }
}

function lampOff() {
    const On = document.getElementById('On')
    const Off = document.getElementById('Off')
    const lamp = document.getElementById('lamp').src
    if(lamp == On) {
        document.getElementById('lamp').src = './img/ligada.jpg'
    } else { document.getElementById('lamp').src = './img/desligada.jpg' }
}




document.getElementById('On').addEventListener("click", lampOn);
document.getElementById('Off').addEventListener("click", lampOff);
