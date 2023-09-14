const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump') // adicionar a palavra jump a class mario que está selecionado na codigo acima
    
    setTimeout(() =>{
        mario.classList.remove('jump') // remover a palavra jump a class mario que está selecionado na codigo acima
    }, 500)
}

const loop = setInterval(()=>{

    console.log('loop')
    const pipePosition = pipe.offsetLeft /*Definir a posição*/ 
    /*console.log(pipePosition)*/
    /*const marioPosition = mario.offsetBottom*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(marioPosition)
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    
        mario.src = "./imagens/game-over.png"
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump) // o jS ficar em alerta quando qualquer tecla for pressionada ele executara o comando jump

