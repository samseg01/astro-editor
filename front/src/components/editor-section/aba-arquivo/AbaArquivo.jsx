import './Aba.css'

function AbaArquivo({nome}) {
    return (
        <li className='aba-arquivo'>
            {nome}
            <button>x</button>
        </li>
    )
}
export default AbaArquivo