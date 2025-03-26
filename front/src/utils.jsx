import { useState } from 'react'

async function OpenFile(caminho) {
    const [text, setText] = useState('')

    const tela = document.getElementById('editor')
    const conteudo = await window.electronAPI.lerArquivo(caminho);
    if (conteudo) {
        tela.innerHTML = text 
        setText(conteudo)
    } else {
        console.log('erro ao ler arquivo')
    }
}

export default OpenFile