import { useState } from 'react'
import './MenuLateral.css'
import HeaderMenuLateral from './HeaderMenuLateral'
import FilesContainer from './files-container/FilesContainer';

function MenuLateral() {
    const [arquivos, setArquivos] = useState([])

    async function directory() {
        const filePath = await window.electronAPI.openDirectory();
        if (filePath) {
            setArquivos(filePath)
        }
    };

    return (
        <section className='menu-lateral'>
            <HeaderMenuLateral openDirectory={directory}/>
            <FilesContainer files={ arquivos }/>
        </section>
    );
}

export default MenuLateral