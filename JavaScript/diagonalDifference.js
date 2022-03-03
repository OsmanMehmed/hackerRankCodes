
function diagonalDifference(arr) {
    let diagonalIzDer = 0;
    let diagonalDerIzq = arr.length;

    console.log(arr);
    
    let sumaDIz = 0;
    let sumaDDr = 0;

    console.log(arr[0][0]);
    
    for (let i = 0; i < arr.length; i++){
        sumaDIz = sumaDIz + arr[i][diagonalIzDer];
        diagonalIzDer++;

        console.log("->: " + sumaDIz);
        
        sumaDDr = sumaDDr + arr[i][diagonalDerIzq-1];
        diagonalDerIzq--;

        console.log("Inverso: " + sumaDDr);
    };

    return Math.abs(sumaDIz - sumaDDr);
}

let array1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];


let resultado = diagonalDifference(array1);

console.log(resultado);



