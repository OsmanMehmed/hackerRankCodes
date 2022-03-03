function superDigit(n, k) {
    let copia = n;
    let valor = 0;

    for (let i = 0; i < n.length; i++){
        valor = valor + parseInt(n[i]);;
    }
    
    valor = valor * k;

    console.log(valor);
    
    let devolver = funcionRecursiva(""+valor, k);
    
    return devolver;
}

function funcionRecursiva(n) {
    let suma = 0;

    if (n.length > 1){
        for (let i = 0; i < n.length; i++){
             suma += parseInt(n[i]);
        }
        
        return funcionRecursiva(""+suma);   
        
    } else {
        return n;
    }   
}

let resultado = superDigit("4757362", 10000);

console.log(resultado);