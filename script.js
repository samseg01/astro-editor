const explorador = document.getElementById('menu-explorator')

document.getElementById('explore').addEventListener('click',()=>{
    if(explorador.classList.contains('oculta')){
        explorador.classList.remove('oculta')
    }else {
        explorador.classList.add('oculta')
    }
})

const linhaDivisa = document.querySelector('hr')

linhaDivisa.addEventListener('resize', (e)=>{
    console.log(e)
    explorador.setAttribute('resise')
})

const btnTextArea = document.getElementById('text')
const btnStartArea = document.getElementById('star')
const starArea = document.querySelector('.view-class')
const textArea = document.getElementById('editor')


btnStartArea.addEventListener('click',()=>{
    verificaVision(false)
})
btnTextArea.addEventListener('click', ()=>{
    verificaVision(true)
})

function verificaVision(cond) {
    if(cond) {
        starArea.classList.add('oculta')
        textArea.classList.remove('oculta')
    }else {
        starArea.classList.remove('oculta')
        textArea.classList.add('oculta')
    }
}

const containerDoc = document.getElementById('arquivo-container')

document.getElementById('new-document').addEventListener('click', ()=>{
    criaDoc('aaaa')
})

function criaDoc(title) {
    let arquivoDiv = document.createElement('div')
    arquivoDiv.innerText = title
    arquivoDiv.setAttribute('class', 'arquivo')
    containerDoc.appendChild(arquivoDiv)
    
    let classDiv = document.createElement('div')
    classDiv.innerText = title
    classDiv.setAttribute('class', 'class-star')
    starArea.appendChild(classDiv)
    
}

window.addEventListener('DOMContentLoaded', ()=>{
    criaDoc('Master')
})