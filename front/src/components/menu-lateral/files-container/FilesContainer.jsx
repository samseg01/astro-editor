import { useState } from 'react'
import '../MenuLateral.css'
import FileDoc from '../../doc-system/FileDoc'
import Path from '../../doc-system/Path'
import OpenFile from '../../../utils'

function FilesContainer({ files }) {


    if(files.length <= 0 ) {
        return <p>não ha arquivos..</p>
    }

    function renderLista(elem, id) {
        if(elem.type == 'dir') {
            return <Path 
                    chave={id} 
                    fileName={elem.nome} 
                    filhos={elem.filhos}

                    />
        }
        return <FileDoc 
                fileName={elem.nome} 
                chave={id} 
                caminho={elem.caminho}
                click={()=>OpenFile(elem.caminho)}
                />   
    }

    return (
        <ul className="files-container">
            {files.map((file, i)=>(
                renderLista(file, i+file.nome)
            ))}
        </ul>

    )
}

export default FilesContainer