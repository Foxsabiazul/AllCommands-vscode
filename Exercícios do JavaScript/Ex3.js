function boletim(){
    var notas = [100,30,40,100]
    for (let i = 0; i < notas.length; i++) {
       var soma = notas.reduce((acumulador, valor) => acumulador + valor,0);
        var resultado = soma/notas.length;
        return resultado;
    }
}

console.log(boletim());

function apRp (){

    if (boletim() > 60) {
        
    console.log("Você foi ap")

    }else{

        console.log("Você foi rp")
    }

}

apRp();