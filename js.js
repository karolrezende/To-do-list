const botao = document.querySelector("#form-botao")
const tarefa = document.querySelector("#form-text")
const lista = document.querySelector(".form-lista")
const botaoPendente = document.querySelector(".pendentes")
botao.addEventListener("click", () => criaElemento())

function criaElemento(){
    const texto = tarefa.value
    if(texto == ""){
        elemento.classList.add("form-vazio")
    }
    const divItens = document.createElement("div")
    divItens.classList.add("form-div-itens")
    lista.appendChild(divItens)

    const tagInput = document.createElement("input")
    tagInput.setAttribute("type","checkbox")
    tagInput.classList.add("input-checkbox")
    
    const elemento = document.createElement("p")
    elemento.classList.add("form-p")
    elemento.innerHTML = texto 

    divItens.appendChild(elemento)
    divItens.appendChild(tagInput)  
}

/*botaoPendente.addEventListener("click", ()=>{
    const tagInput = document.querySelectorAll(".input-checkbox")
    const divItens = document.querySelectorAll(".form-div-itens")
    const tagInputChecked = tagInput.checked

    for(const i = 0; i <= divItens.length; i++){
        if(tagInputChecked[i] == false){
            console.log(divItens[0].value)
        }
    }

}) */