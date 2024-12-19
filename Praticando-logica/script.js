// Exercícios de lógica começarão aqui
console.log("Vamos praticar lógica de programação!");

function verificarPouI(numero){
    if(numero % 2 === 0){
        console.log(`${numero} é Par.`);
    }else{
        console.log(`${numero} é ímpar.`);
    };
};

// testa função
verificarPouI(7)
verificarPouI(14)