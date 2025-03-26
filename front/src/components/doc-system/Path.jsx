import OpenFile from '../../utils'
import './Doc.css'
import FileDoc from './FileDoc'
import { useState } from 'react'

function Path({ fileName, filhos, chave }) {
    const [isClick, setClick] = useState(true)

    function renderLista(elem, id) {
        if(elem.type == 'dir') {
            return <Path chave={id} 
                    fileName={elem.nome} 
                    filhos={elem.filhos}
                    />
        }
        return <FileDoc fileName={elem.nome} caminho={elem.caminho} click={()=>OpenFile(elem.caminho)}/>   

    }
    function clickPath(onClick, id) {
        let elem = document.getElementById(id)
        let filhos = elem.childNodes

        filhos.forEach((e, i)=> {
            if(i > 0) {
                if(onClick == false) {
                    e.style.display = 'none'
                }else {
                    e.style.display = 'block'
                }
            }
            console.log(e, i)
        })
        setClick(!onClick)
    }

    return(
        <ul className='dir-item' id={chave}>
            <FileDoc
            fileName={`> ${fileName}`} 
            click={()=>clickPath(isClick, chave)} 
            chave={chave+'li0'}
            />
            {filhos.map((file, i)=>(
                renderLista(file, i+file.nome)
            ))}
        </ul>
    )
}
 export default Path