function staircase(n) {
    let simbolo = "#";
    let espacio = " ";
    let resultado = "";
    
    for (let i = 0; i < n; i++){

        for (let x = 0; x < n; x++){
            
            if (x < (n-i-1)){
                resultado = resultado.concat(espacio);
            } else {
                resultado = resultado.concat(simbolo);
            }
        
        };
        resultado = resultado.concat("\n");
    };

    return resultado;
}

let resultado = staircase(6);

/* console.log(resultado); */