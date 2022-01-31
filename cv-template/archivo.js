const { prototype } = require("vue/types/umd");

// Invertertir cadena de texto 
const texto1= "Hola Mundo";
const texto2=' Esto es una prueba';
const texto3= 'Logro desbloqueado';

console.log(texto1);
console.log(texto1.split());
console.log(Object.assign({},texto1.split()));


// Invierte el orden de un String 

function invertirTextoConReverse(texto){
    const aux = texto.split('').reverse().join('');
    console.log(aux);
}

// Invierte el orden de un String sin funciones

function invetirConEstructura(texto){
    let aux ='';
    for (let index=texto.length; index>=0;index--){
        aux = aux+texto.charAt(index);
    }
    return aux;
}(String);

invertirTextoConReverse(texto1);
console.log(invetirConEstructura(texto1));


const frase = "Hola soy una palabra en una frase, PALABRA.";
const palabra = "palabra";
const frase2 = "soy frase la frase";
const palabra2= "victor";

function encontrarOcurrencias(frase,palabra){
    frase = filtrarCaracteres(frase);
    palabra = filtrarCaracteres(palabra);
    const arr= frase.split(" ");
    let ocurrencias=0;
    ocurrencias = arr.reduce( (previous,current) =>{
        if(current === palabra){
            ocurrencias++;
        }
                                                                         return ocurrencias;
    });
    return ocurrencias;
}(String);

function filtrarCaracteres(palabra){
    let retorno = palabra;
    retorno = retorno.toLocaleLowerCase();
    retorno = retorno.replace(","," ");
    retorno = retorno.replace("."," ");
    return retorno;
}(String);

console.log(encontrarOcurrencias(frase,palabra));
console.log(encontrarOcurrencias(frase2,palabra2));




function sucesionFibonacci(numero){
    let anterior=0,siguiente=0,resultado=0;
    for (let index = 0; index < numero; index++) {
        if(index===0 || index===1){
            anterior=1;
            resultado=anterior;
            siguiente=1;
        }else{
            resultado = anterior+siguiente;
            anterior = siguiente;
            siguiente = resultado;
        }
    }
    return resultado
}

console.log(sucesionFibonacci(11));