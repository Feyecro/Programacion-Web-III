//ejercicio 1
function contadorVoca (varEjer1) {
    let ca=0;
    let ce=0;
    let ci=0;
    let co=0;
    let cu=0;
    for(let i=0;i<varEjer1.length;i++){
        x=varEjer1.substring(i,i+1);
        if(x==="a"||x==="A"){
            ca+=1;
        }
        else if (x==="e"||x==="E"){
            ce+=1;
        } 
        else if (x==="i"||x==="I"){
            ci+=1;
        }
        else if (x==="o"||x==="O"){
            co+=1;
        }
        else if (x==="u"||x==="U"){
            cu+=1;
        }       
    }
    return `a: ${ca}, e: ${ce}, i: ${ci}, o: ${co}, u: ${cu}`;
};
let ejer1=contadorVoca("euforia");
console.log(ejer1);

//ejercicio 2
function invertir (varEjer2){
    let invertida="";
    for(let i=varEjer2.length-1;i>=0;i--){
        invertida+=varEjer2[i];
    }
    return invertida
};
let ejer2=invertir("Programacion Web Tres");
console.log(ejer2);

//ejercicio 3
function parImpar(varEjer3){
    let a=[];
    let b=[];
    for(let i=0;i<varEjer3.length;i++){
        if(varEjer3[i]%2==0){
            a.push;
        }else{
            b.push;
        }
    }
    return `Pares: ${a}, Impares: ${b}`;
};
let ejer3=parImpar([1,2,3,4,5,6]);
console.log(ejer3);

//ejercicio 4
function mayMen (varEjer4){
    let mayor=0;
    let menor=9999;
    for(let i=0;i<varEjer4[i];i++){
        if(varEjer4[i]>mayor){
            mayor=varEjer4[i];
        }
        if(varEjer4[i]<menor){
            menor=varEjer4[i];
        }
    }
    return `Menor: ${menor} y el Mayor: ${mayor}`;
};
let ejer4=mayMen([1,9,6,4,8,24,11]);
console.log(ejer4);

//ejercicio 5
function palindromo (varEjer5){
    let original=varEjer5;
    let invertida="";
    for(let i=varEjer5.length-1;i>=0;i--){
        invertida+=varEjer5[i];
    }
    if(original===invertida){
        return true;
    }else{
        return false;
    }
}
let ejer5=palindromo("oruro");
console.log(ejer5);
let ejer5a=palindromo("cochabamba");
console.log(ejer5a);

//ejercicio 6 y ejercicio 7
let arreglo=[7,13,17,21,48,99];
const [var61,var62]=arreglo;
console.log(var61,var62);
const [var71, var72, ...var7]=arreglo;
console.log(var7);
