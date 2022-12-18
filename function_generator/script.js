function* cores() {
    yield "vermelho";
    yield "amarelo";
    yield "preto";
}

const c = cores();

// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);


function* perguntas() {
    const nome = yield '';
    const esporte = yield '';
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp = perguntas();

// console.log(itp.next().value);
// console.log(itp.next("Bruno").value);
// console.log(itp.next("Natação").value);

function* contador() {
    let i = 0;

    while (true) {
        yield i++
        if (i > 5)
            break;
    }
}

const itc = contador();

for (let c of itc) {
    console.log(c);
}
