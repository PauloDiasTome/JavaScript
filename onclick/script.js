const cursos = [...document.querySelectorAll(".curso")];

cursos.map((elm) => {
    elm.addEventListener("click", (event) => {
        const elm = event.target;
        elm.classList.add("desctaque");
        console.log(elm.innerHTML + " Foi criado")
    })
})