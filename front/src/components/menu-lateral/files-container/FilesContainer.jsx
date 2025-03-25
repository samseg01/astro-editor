import { useState } from 'react'
import '../MenuLateral.css'
import FileDoc from '../../doc-system/FileDoc'
import Path from '../../doc-system/Path'

function FilesContainer({ files }) {


    if(files.length <= 0 ) {
        return <p>não ha arquivos..</p>
    }

    function renderLista(elem, id) {
        if(elem.type == 'dir') {
            return <Path chave={id} fileName={elem.nome} filhos={elem.filhos}/>
        }

        return <FileDoc fileName={elem.nome}/>   
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