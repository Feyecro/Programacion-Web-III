//ejercicio 8
const ejer8 = (mensaje,callback)=>{
    setTimeout(()=>{
        console.log(mensaje);
        callback();
    },2000)
}
const repeticion =()=>console.log("En 2 segndos");
ejer8("Mensaje",repeticion);


//ejercicio 9
const ejer9 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const ej8 = (true)?resolve("Operacion Exitosa"):reject("Operacion fallida");
    },3000);
});
ejer9.then((exito)=>{
    console.log(exito);
}).catch((error)=>{
    console.log(error);
}).finally("Ejercicio Finalizado");


//ejercicio 10
//Callbakcks es mejor para encadenamientos o anidamientos simples, debido a su facilidad a la hora de emplear codigo y al momento de entender
//el codigo, pero en anidamientos y encadenamientos largos se hace mas complejo y dificil de entender al momento de usar callbacks, en su
//lugar se emplean promesas


//ejercicio 11
const encadenamientoPromesa = new Promise((resolve,reject)=>{
    if(true){
        resolve(10);
    }else{
        reject(10/2);
    }
});
encadenamientoPromesa.then(resultado=>{
    console.log("Promesa 1 ",resultado);
    return resultado*13;
}).then(resultado=>{
    console.log("Promesa 2 ",resultado);
    return resultado/21;
}).then(resultado=>{
    console.log("Promesa 3 ",resultado);
    return resultado+3;
}).catch(error=>{
    console.log("Error de la promesa");
}).finally("Promesa encadenadea terminada :)");


//ejercicio 12
//callbacks
function sumar5(numero, callback) {
    callback(null, numero + 5);
}
function multiplicar2(numero, callback) {
    callback(null, numero * 2);
}
function restar3(numero, callback) {
    callback(null, numero - 3);
}
function procesarNumero(numeroInicial) {
    sumar5(numeroInicial, (error, resultado1) => {
        if (error) {
            console.error('Error en suma:', error);
            return;
        }
        console.log('Después de sumar 5:', resultado1);      
        multiplicar2(resultado1, (error, resultado2) => {
            if (error) {
                console.error('Error en multiplicación:', error);
                return;
            }
            console.log('Después de multiplicar por 2:', resultado2);
            restar3(resultado2, (error, resultado3) => {
                if (error) {
                    console.error('Error en resta:', error);
                    return;
                }
                console.log('Después de restar 3:', resultado3);
            });
        });
    });
}
procesarNumero(10);
//async
function sumar5(numero) {
    return new Promise((resolve) => {
        resolve(numero + 5);
    });
}
function multiplicar2(numero) {
    return new Promise((resolve) => {    
        resolve(numero * 2);
    });
}
function restar3(numero) {
    return new Promise((resolve) => {
        resolve(numero - 3);
    });
}
async function procesarNumero(numeroInicial) {
    try {
        const resultado1 = await sumar5(numeroInicial);
        console.log('Después de sumar 5:', resultado1);
        const resultado2 = await multiplicar2(resultado1);
        console.log('Después de multiplicar por 2:', resultado2);
        const resultadoFinal = await restar3(resultado2);
        console.log('Después de restar 3:', resultadoFinal);
        return resultadoFinal;   
    } catch (error) {
        console.error('Error en el proceso:', error);
    }
}
procesarNumero(10).then(resultado => {
    console.log('Proceso completado. Resultado:', resultado);
});


//ejercicio 13
//promesas
function sumar5(numero) {
    return new Promise((resolve) => {
        resolve(numero + 5);
    });
}
function multiplicar2(numero) {
    return new Promise((resolve) => {
        resolve(numero * 2);
    });
}
function restar3(numero) {
    return new Promise((resolve) => {
        resolve(numero - 3);
    });
}
function procesarNumeroConThen(numeroInicial) {
    return sumar5(numeroInicial).then(resultado1 => {
            console.log('Después de sumar 5:', resultado1);
            return multiplicar2(resultado1).then(resultado2 => {
                    console.log('Después de multiplicar por 2:', resultado2);
                    return restar3(resultado2).then(resultadoFinal => {
                            console.log('Después de restar 3:', resultadoFinal);
                            return resultadoFinal
                        });
                });
        }).catch(error => {
            console.error('Error:', error);
        });
}
procesarNumeroConThen(10)
    .then(resultado => {
        console.log('Proceso completado:', resultado);
});
//async
function sumar5(numero) {
    return new Promise((resolve) => {
        resolve(numero + 5);
    });
}
function multiplicar2(numero) {
    return new Promise((resolve) => {
        resolve(numero * 2);
    });
}
function restar3(numero) {
    return new Promise((resolve) => {
        resolve(numero - 3);
    });
}
async function procesarNumeroConAwait(numeroInicial) {
    try {
        const resultado1 = await sumar5(numeroInicial);
        console.log('Después de sumar 5:', resultado1);     
        const resultado2 = await multiplicar2(resultado1);
        console.log('Después de multiplicar por 2:', resultado2);
        const resultadoFinal = await restar3(resultado2);
        console.log('Después de restar 3:', resultadoFinal);
        return resultadoFinal;
    } catch (error) {
        console.error('Error en el proceso:', error);
        throw error;
    }
}
procesarNumeroConAwait(10)
    .then(resultado => {
        console.log('Proceso completado. Resultado:', resultado);
});


//ejercicio 14
//promesa
function sumar5Promesa(numero) {
    return new Promise((resolve, reject) => {
            if (numero !== 'number') {
                reject("El valor debe ser un número");
            } else {
                resolve(numero + 5);
            }
    });
}
sumar5Promesa(10)
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(error => {
        console.error('Error:', error);
    });
//callback
function sumar5Callback(numero, callback) {
        if (numero !== 'number') {
            callback("El valor debe ser un número", null);
        } else {
            callback(null, numero + 5);
        }
}
sumar5Callback(10, (error, resultado) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Resultado:', resultado); 
    }
});


//ejercicio 15
//callback
function sumar5Callback(numero, callback) {
        if ( numero !== 'number') {
            callback("El valor debe ser un número", null);
        } else {
            callback(null, numero + 5);
        }
}
sumar5Callback(10, (error, resultado) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Resultado:', resultado);
    }
});
//promesa
function sumar5Promesa(numero) {
    return new Promise((resolve, reject) => {
            if (numero !== 'number') {
                reject("El valor debe ser un número");
            } else {
                resolve(numero + 5);
            }
    });
}
sumar5Promesa(10)
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(error => {
        console.error('Error:', error);
    });


//ejercicio 16
function sumar5(numero) {
    return new Promise((resolve) => {
        resolve(numero + 5);
    });
}
function multiplicar2(numero) {
    return new Promise((resolve) => {
        resolve(numero * 2);
    });
}
function restar3(numero) {
    return new Promise((resolve) => {
        resolve(numero - 3);
    });
}
//promesas then
function procesarNumeroConThen(numeroInicial) {
    console.log('Iniciando proceso con número:', numeroInicial);
    return sumar5(numeroInicial).then(resultado1 => {
            console.log('Paso 1 - Sumar 5:', resultado1);
            return multiplicar2(resultado1);
        }).then(resultado2 => {
            console.log('Paso 2 - Multiplicar por 2:', resultado2);
            return restar3(resultado2);
        }).then(resultadoFinal => {
            console.log('Paso 4 - Elevar al cuadrado:', resultadoFinal);
            return resultadoFinal;
        }).catch(error => {
            console.error('Error en el proceso:', error);
            throw error;
        });
}
procesarNumeroConThen(10)
    .then(resultado => {
        console.log('Resultado final con .then():', resultado);
    })
    .catch(error => {
        console.error('Error:', error);
    });
// version async
async function procesarNumeroConAwait(numeroInicial) {
    try {
        console.log('Iniciando proceso con número:', numeroInicial);
        const resultado1 = await sumar5(numeroInicial);
        console.log('Paso 1 - Sumar 5:', resultado1);
        const resultado2 = await multiplicar2(resultado1);
        console.log('Paso 2 - Multiplicar por 2:', resultado2);
        const resultadoFinal = await restar3(resultado2);
        console.log('Paso 3 - Restar 3:', resultadoFinal);
        return resultadoFinal;
    } catch (error) {
        console.error('Error en el proceso:', error);
        throw error;
    }
}
async function ejecutarProceso() {
    try {
        const resultado = await procesarNumeroConAwait(10);
        console.log('Resultado final con async/await:', resultado);
    } catch (error) {
        console.error('Error:', error);
    }
}
ejecutarProceso();