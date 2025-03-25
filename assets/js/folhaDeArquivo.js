const listaDiretorios = document.getElementById('arquivo-container')
const abaDiretorios = document.querySelector('.aba-paginas')
const folhaArquivoContainer = document.getElementById('editor-content')


class Doc {
    constructor(file) {
        // this.title = title
        this.data = readLocalFile()

        // console.log(this.title)
        // console.log(this.nomeArquivo)

        // const reader = new FileReader();
        // this.data = reader.readAsText(files[0]);
        // console.log(this.data)
        // console.log(handleFile(arquivo))
    }
    get title() {
        return this.data
    }
    get data() {
        return this.data
    }

    readLocalFile() {
        return new Promise((resolve, reject) => {
          if (!(this.file instanceof File)) {
            return reject(new Error('O parâmetro fornecido não é um arquivo válido.'));
          }
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          reader.readAsText(this.file); // Lê como texto
        });
    }

}

// function addDoc(title) {
//     let arquivoDiv = document.createElement('div')
//     arquivoDiv.innerText = title
//     arquivoDiv.setAttribute('class', 'arquivo')
//     arquivoDiv.setAttribute('id', `list.${title}`)
//     arquivoDiv.setAttribute('onclick', `clickArquivo('${title}')`)
//     arquivoDiv.innerText = title
//     listaDiretorios.appendChild(arquivoDiv)

// }
// let listaArquivos = {}

// function clickArquivo(arquivo) {
//     console.log(arquivo)

//     if(!document.getElementById(arquivo)) {
//         let textArea = document.createElement('textarea')
//         textArea.setAttribute('name', 'editor')
//         textArea.setAttribute('class', 'editor')
//         textArea.setAttribute('id', arquivo)
//         textArea.value = listaArquivos[arquivo] 
//         folhaArquivoContainer.appendChild(textArea)

//         let itemAba = document.createElement('div')
//         itemAba.setAttribute('class', 'item')
//         itemAba.setAttribute('id', `aba.${arquivo}`)
//         itemAba.setAttribute('onclick', `abreFolha('${arquivo}')`)

//         let textoItemAba = document.createElement('p')
//         textoItemAba.innerText = arquivo
//         itemAba.appendChild(textoItemAba)

//         let buttonItemAba = document.createElement('button')
//         buttonItemAba.setAttribute('onclick', `fechaAba('${arquivo}')`)
//         buttonItemAba.innerText = 'x'
//         itemAba.appendChild(buttonItemAba)

//         abaDiretorios.appendChild(itemAba)
//     }
// }

// function abreFolha(arquivo) {
//     let folhas = document.querySelectorAll('.editor')

//     folhas.forEach((e)=>{
//         folhaArquivoContainer.removeChild(e)
//     })
//     let textArea = document.createElement('textarea')
//     textArea.setAttribute('name', 'editor')
//     textArea.setAttribute('class', 'editor')
//     textArea.setAttribute('id', arquivo)
//     textArea.value = listaArquivos[arquivo] 
//     folhaArquivoContainer.appendChild(textArea)
// }

// function fechaAba(arquivo) {
//     // if(document.getElementById(arquivo)) {
//     console.log('saiu', arquivo)
//         folhaArquivoContainer.removeChild(document.getElementById(arquivo))
//     // }
//     abaDiretorios.removeChild(document.getElementById(`aba.${arquivo}`))  
// }


function handleFile(files){
    const reader = new FileReader();
    reader.onload = (event) => {
        let data = event.target.result;
        let i = new Doc(files[0])
        console.log(i.data)
         
    };
    reader.readAsText(files[0]);
}