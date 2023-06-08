const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ''
    //['comprar café','estudar programação']


    minhaListaDeItens.forEach((item, posição) => {
        novaLi = novaLi + `<li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posição} )" >
        <p>${item.tarefa} </p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posição} )">
        </li>`

    })
    listaCompleta.innerHTML = novaLi
localStorage.setItem('lista', JSON.stringify(minhaListaDeItens) )

}
function concluirTarefa(posição) {
    minhaListaDeItens[posição].concluida = !minhaListaDeItens[posição].concluida

    mostrarTarefas()

}


function deletarItem(posição) {
    minhaListaDeItens.splice(posição, 1)
    mostrarTarefas()
}
function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    minhaListaDeItens = JSON.parse (tarefasDoLocalStorage)
    console.log(tarefasDoLocalStorage)
    
mostrarTarefas()

}
recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)