function kangaroo(x1, v1, x2, v2) {
    let respuesta = "";
    let acabar = false;
    let posicionMax = 0;
    let contador = 0;
 
    let menor = 0;
    let mayor = 0;
    let vMayor = 0;
    let vMenor = 0;

    if (x1 == x2){
        respuesta = "YES"
        acabar = true;

    } else if (x1 < x2){
         menor = x1;
         vMenor = v1;

         mayor = x2;
         vMayor = v2;

    } else {
         menor = x2;
         vMenor = v2;

         mayor = x1;
         vMayor = v1;
    }

    if (vMayor > vMenor){

        respuesta = "NO";
        acabar = true;
    
    } else {
        while (!acabar){

            if (menor == mayor){
                acabar = true;
                respuesta = "YES";

            } else if (contador > 100000){
                
                acabar = true;
                respuesta = "NO";

            } else if (menor > mayor){
            
                acabar = true;
                respuesta = "NO";

            } else {

                contador++;
                mayor = mayor + vMayor;   
                menor = menor + vMenor;
            }
        }
    }
    return respuesta;
}


let resultado = kangaroo(0, 3, 4, 2);

console.log(resultado);