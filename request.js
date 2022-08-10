const apiUrl = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'
// const apiUrl = '1'

/* 
quando a requisição é solicitada e salvo o status da 
requisição e também seu valor no localStorage do navegador, posteriormente 
no arquivo "script.js", ele "pega" este status e valor com localStorage.getItem
*/

fetch(apiUrl)
    .then(resposta => {
        localStorage.setItem('status', resposta.status)
        return resposta.json()
    })
    .then(corpo => {
        localStorage.setItem('valor', corpo.value)
    })
    .catch(error => console.log(error))