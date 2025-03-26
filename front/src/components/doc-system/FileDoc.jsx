import "./Doc.css"

function FileDoc({ fileName, chave, caminho, click }) {
    return  <li
            id={chave}
            key={chave} 
            url={caminho}
            onClick={click} 
            className='file-item off-click'
            >{fileName}
            </li>
}

export default FileDoc