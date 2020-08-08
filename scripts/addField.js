// Procurar o botão e adicionar o evento de click
document.querySelector("#add-time").addEventListener("click", cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);//boolean: true ou false

    // limpar os campos selecionados
    const fields = newFieldContainer.querySelectorAll('input');

    // pegar os campos
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    }) 

    // Colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}