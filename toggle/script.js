const newCurso = () => {
    const newElm = document.createElement("div");
    newElm.addEventListener("click", function () {
        evt.target.classList.toggle("selecionado")
    });
}

//  Toggle remove a class selecionado caso a class exista
//  Ou adicionada se não existir