const explorador = document.getElementById('menu-explorator')

document.getElementById('explore').addEventListener('click',()=>{
    if(explorador.classList.contains('oculta')){
        explorador.classList.remove('oculta')
    }else {
        explorador.classList.add('oculta')
    }
})

const btnTextArea = document.getElementById('text')
const btnStartArea = document.getElementById('star')
const starArea = document.querySelector('.view-class')
const textArea = document.querySelector('.editor-container')


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


window.addEventListener('DOMContentLoaded', ()=>{
    // criaDoc('Master');
})