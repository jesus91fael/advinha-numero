/*
statusCode e strRequisition, essas duas variáveis "pegam" do localStorage do 
navegador o que foi enviado por meio do arquivo request.js.
*/
const statusCode = localStorage.getItem('status')
const strRequisicao = localStorage.getItem('valor')
let display1 = document.getElementById('display-1')
let display2 = document.getElementById('display-2')
let display3 = document.getElementById('display-3')
let novaPartida = document.getElementById('new-game')
let eventoBtnEnviar = document.getElementById('send')

let numeroRequisicao = parseInt(strRequisicao)

statusErro(statusCode)

/*
essa função tem objetivo de reconhecer o que o usuário digitou e retornar 
uma string para ser usada posteriormente para formar os números em 7 segmentos.
*/
function preencheZero(string, length) {
    for (var i = 0, l = length - string.length; i < l; i++) {
        string = '0' + string
    }
    return string
}

/*
essa função faz a validação para não ter a possibilidade de enviar números negativos e limitar o input 
de até 3 dígitos.
*/
shot.oninput = function () {
    this.value = Math.abs(this.value)

    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3)
    }
};

// nesse ponto é para evitar que o usuário envie entrada com um campo vazio.
document.body.querySelector('#shot').addEventListener('input', function () {

    var habilitaBotao = document.getElementById('send')

    habilitaBotao.disabled = this.value.length >= 1 ? false : true

})

/*
No evento ao clicar o botão "enviar", nesse evento se encontra a função 
"preencheZero()" recebendo o input do usuário para o preenchimento do 
Segmentos, caso seja introduzido mais de 1 digito ele exibe mais um display, e a estrutura de seleção para 
verificar o número que o usuário enviou está correto ou se é maior ou menor.
*/
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

    // Resultado do palpite
    if (numeroRequisicao > valor) {
        document.getElementById('result').style.visibility = 'visible'
        result.innerHTML = 'É maior'
    } else if (numeroRequisicao < valor) {
        document.getElementById('result').style.visibility = 'visible'
        result.innerText = 'É menor'
    } else {
      result.innerHTML = '<span style="color:#32BF00">Você acertou!!!!</span>'
        alteraCor('green')
        desabilitaInput()
    }
})

/* 
caso ocorra o erro de solicitação. será verificado em localStorge o 
número da variável statusCode, se o valor for "502" a função que será atribuída
aos LEDs no formato 502, liberando o display para visualização e forçando o 
usuário a reinicializar através do votão "nova partida".
*/
function statusErro(statusValue) {
    if (statusValue === '502') {

      result.innerHTML = '<span style="color:#CC3300">ERRO</span>'

        alteraCor('red')

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

/*
A função irá habilitar o resultado e o botão para "nova partida" 
do jogo, bloqueando a entrada do usuário e mudando a cor para que o usuário 
veja que não tem mais acesso à entrada.
*/
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

/*
A função alteraCor substituirá o CSS das cores da borda caso o usuário 
ganhe(cor verde) ou a requisição falhe(cor vermelho). Mudança de cor 
passa por uma estrutura repetição para substituir a cor em cada display.
*/
function alteraCor(alterar) {

    if (alterar === 'green') {
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
    } else if (alterar === 'red') {
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
