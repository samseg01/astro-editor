const div = document.getElementById('menu-explorator')
const delim = document.getElementById('delimitador')

let redimencionar = false

delim.addEventListener('mousedown', (e)=>{
    redimencionar = true
    console.log('click',e.clientX)
})

window.addEventListener('mousemove', (e)=>{
    if(redimencionar) {
        const novaLargura = e.clientX - div.offsetLeft
        // console.log(novaLargura)
        div.style.width = `${novaLargura+50}px`
        // const novaLargura = e.clientX - direcMenu.offsetLeft
        // // const novaAltura = e.
        // direcMenu.style.width = `${Math.max(novaLargura, 50)}px`
        // div.style.left = `${e.clientX}px`

    }
})

window.addEventListener('mouseup', (e)=>{
    redimencionar = false
    // console.log('solte', e.clientX)
})