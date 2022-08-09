const statusCode = localStorage.getItem('status')
const strRequisicao = localStorage.getItem('valor')
let display1 = document.getElementById('display-1')
let display2 = document.getElementById('display-2')
let display3 = document.getElementById('display-3')
let novaPartida = document.getElementById('new-game')
let eventoBtnEnviar = document.getElementById('send')

let numeroRequisicao = parseInt(strRequisicao)

statusErro(statusCode)

function preencheZero(string, length) {
    for (var i = 0, l = length - string.length; i < l; i++) {
        string = '0' + string
    }
    return string
}

shot.oninput = function () {
    this.value = Math.abs(this.value)

    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3)
    }
};

document.body.querySelector('#shot').addEventListener('input', function () {

    var habilitaBotao = document.getElementById('send')

    habilitaBotao.disabled = this.value.length >= 1 ? false : true

})

eventoBtnEnviar.addEventListener("click", function (evento) {
    evento.preventDefault()

    const shot = document.querySelector('#shot')

    const valor = preencheZero(shot.value)

    let formaNumero = 'main-content-display display-num-'

    display1.className = formaNumero + valor[0]
    display2.className = formaNumero + valor[1]
    display3.className = formaNumero + valor[2]

    // Mostra ou ocultar segmento
    if (valor.length == 1) {
        document.getElementById('display-2').style.display = 'none'
        document.getElementById('display-3').style.display = 'none'
    } else if (valor.length == 2) {
        document.getElementById('display-2').style.display = 'block'
        document.getElementById('display-3').style.display = 'none'
    } else {
        document.getElementById('display-2').style.display = 'block'
        document.getElementById('display-3').style.display = 'block'
    }

    if (numeroRequisicao > valor) {
        document.getElementById('result').style.visibility = 'visible'
        result.innerHTML = 'É maior'
    } else if (numeroRequisicao < valor) {
        document.getElementById('result').style.visibility = 'visible'
        result.innerText = 'É menor'
    } else {
      result.innerHTML = '<span style="color:#32BF00">Você acertou!!!!</span>'
        alteraCor('Verde')
        desabilitaInput()
    }
})


function statusErro(statusValue) {
    if (statusValue === '502') {

      result.innerHTML = '<span style="color:#CC3300">ERRO</span>'

        alteraCor('Vermelho')

        const valor = statusValue;
        let baseClass = 'main-content-display display-num-'

        display1.className = baseClass + valor[0]
        display2.className = baseClass + valor[1]
        display3.className = baseClass + valor[2]

        document.getElementById('display-2').style.display = 'block'
        document.getElementById('display-3').style.display = 'block'

        desabilitaInput()
    }
}

function desabilitaInput() {

    document.getElementById('new-game').style.visibility = 'visible'
    document.getElementById('result').style.visibility = 'visible'

    shot.disabled = true
    send.disabled = true

    send.style.cssText =
        'background-color: #DDDDDD;' +
        'border: 1px solid #DDDDDD;'
    shot.style.cssText =
        'background-color: #F5F5F5;' +
        'border: 1px solid #DDDDDD;'


    novaPartida.addEventListener('click', function () {
        location.reload()
    })
}

function alteraCor(alterar) {

    if (alterar === 'Verde') {
        for (var i = 1; i <= 3; i++) {
            document.getElementById('display-' + i).getElementsByClassName('shape-line-a')[0].style.borderTop = '15px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-d')[0].style.borderBottom = '15px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-g')[0].style.borderBottom = '11px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-mirror')[0].style.borderTop = '11px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-b')[0].style.borderRight = '15px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-c')[0].style.borderRight = '15px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-e')[0].style.borderLeft = '15px solid #32BF00'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-f')[0].style.borderLeft = '15px solid #32BF00'
        }
    } else if (alterar === 'Vermelho') {
        for (var i = 1; i <= 3; i++) {
            document.getElementById('display-' + i).getElementsByClassName('shape-line-a')[0].style.borderTop = '15px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-d')[0].style.borderBottom = '15px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-g')[0].style.borderBottom = '11px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-mirror')[0].style.borderTop = '11px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-b')[0].style.borderRight = '15px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-c')[0].style.borderRight = '15px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-e')[0].style.borderLeft = '15px solid #CC3300'
            document.getElementById('display-' + i).getElementsByClassName('shape-line-f')[0].style.borderLeft = '15px solid #CC3300'
        }
    }
}
