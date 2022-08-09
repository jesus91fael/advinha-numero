const apiUrl = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'
// const apiUrl = '1'

fetch(apiUrl)
    .then(resposta => {
        localStorage.setItem('status', resposta.status)
        return resposta.json()
    })
    .then(corpo => {
        localStorage.setItem('valor', corpo.value)
    })
    .catch(error => console.log(error))