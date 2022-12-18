function aluno(name, nota) {
    this.name = name;
    this.nota = nota;

    this.dados_anonimo = function () {
        setTimeout(() => {
            console.log(this.name)
        }, 2000);
    }

    // console.log(this.name)
}


// console.log(this.name)

const all = new aluno("Paulo", 100)
all.dados_anonimo();

// aluno("Paulo", 100)