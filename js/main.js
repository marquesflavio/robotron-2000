
const controle = document.querySelectorAll('[data-controle')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)//como passamos um dataAttribute no HTML, podemos chamar o parâmetro agora sem se preocupar o textContent.
        
        //manipulaDados(evento.target.textContent, evento.target.parentNode) //minha funcação vai pegar o conteúdo clicado (- ou +) e também identificar de qual div estamos clicando (braços, perna, foguetes, núcleos, blindagem)
        atualizaEstatisticas (evento.target.dataset.peca)
    })
})

function manipulaDados (operacao, controle){
    const peca = controle.querySelector('[data-contador]')
    if (operacao === '-'){
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    });

}