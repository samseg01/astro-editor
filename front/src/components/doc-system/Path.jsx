import './Doc.css'
import FileDoc from './FileDoc'

function Path({ fileName, filhos, chave }) {

    function renderLista(elem) {
        if(elem.type == 'file') {
            return <FileDoc fileName={elem.nome}/>   
        }

    }
    function clickPath(elemi) {
        console.log(elemi)
        
        let elem = document.getElementById(elemi)
        let elementosIrmão = elem.parentNode.children

        for(let i=0; i<elementosIrmão.length; i++) {
            console.log(elementosIrmão[i])

            if(i>0 && window.getComputedStyle(elementosIrmão[i]).display == 'block') {
                elementosIrmão[i].style.display = 'none'
            }else {
                elementosIrmão[i].style.display = 'block'
            }
        }

    }

    return(
        <ul className='dir-item' id={chave}>
            <FileDoc fileName={`> ${fileName}`} click={()=>clickPath(chave+'li')} chave={chave+'li'}/>
            {filhos.map((file, i)=>(
                renderLista(file)
            ))}
        </ul>
    )
}
 export default Path