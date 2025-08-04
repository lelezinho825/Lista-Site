function AdicionarTarefa(){
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;

    let para = document.getElementById("para");

    if(inputTarefa.value == ""){
        para.textContent = "digite uma tarefa";
    }

    else{
        let lista = document.getElementById("lista");
        let li = document.createElement("li");
        lista.appendChild(li);

        li.textContent = tarefa;
        para.textContent = "";
    }

    inputTarefa.value = "";
}