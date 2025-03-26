import AbaArquivo from './aba-arquivo/AbaArquivo'
import './EditorSection.css'

function ContainerAbaArquivos() {
    return (
        <ul className="header-aba">
            <AbaArquivo nome={'aaaaaaaaaaaaaaaaa'}/>
            <AbaArquivo nome={'aaaaaaaaaa'}/>
        </ul>
    )
}

export default ContainerAbaArquivos