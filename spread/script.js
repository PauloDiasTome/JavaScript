const list1 = { name: "Maria", idade: 50, sexo: "F" };
const list2 = { name: "jose", idade: 40, sexo: "M" };


console.log({ ...list1, ...list2 });