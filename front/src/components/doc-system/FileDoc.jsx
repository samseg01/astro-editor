import "./Doc.css"

function FileDoc({ fileName, click, chave }) {
    // isClick ? 'file-item on-click' : 'file-item off-click'
    return <li
            id={chave}
            // key={chave} 
            docName={ fileName } 
            onClick={()=>click()} 
            className='file-item off-click'
            >{fileName}</li>
}

export default FileDoc