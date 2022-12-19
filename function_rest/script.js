function soma(...values) {
    let qtde = values.length;
    let res = 0;

    for (let i = 0; i < qtde; i++) {
        res += values[i];
    }

    return res;
}

console.log(soma(10, 30, 50, 90));


const f= new Function("v1", "v2", "return v1+v2");

console.log(f(10,5))
