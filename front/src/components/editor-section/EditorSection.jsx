import ContainerAbaArquivos from './ContainerAbaArquivos'
import './EditorSection.css'

function EditorSection() {
    
    return(
        <section className='sectionText'>
            <ContainerAbaArquivos/>
            <textarea name="" id="editor">

            </textarea>
        </section>
    )
}

export default EditorSection