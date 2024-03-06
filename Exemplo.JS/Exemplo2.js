var a = 1;

if(true){
    // a Vavriável let está sendo declarada dentro do bloco "if"  e deverá ser usada dentrpo das chaves {}
    let b = 2;
}  

//Neste ponto dará um erro de referência, pois a variável "b" foi chamada fora do if
console.log(b);
console.log(a);