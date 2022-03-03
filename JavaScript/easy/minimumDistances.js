
function minimumDistances(a) {
    
    let distancias = [];
    let numero;
    let distancia;
    
    let encontrado = false;
    
    for (let i = 0; i < a; i++){
        numero = a[i];
        
        for (let x = 0; x < a; x++){
            if (a[x] == a[i]){
                distancia = Mat.abs(x-i);
                distancias[i] = distancia;
                encontrado = true;
            }
        }
        
        if (!encontrado){
            distancias[i] = -1;
        }
    }
    
    return Math.min(distancias);
}

