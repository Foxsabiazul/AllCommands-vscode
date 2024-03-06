const nomes = ["Antonio","Lucilene","Carolina","Sara","João","Bruno","Kelly"]; 
    const nomeProcurado = "Antonio";
    var encontrado = false;

for(i = 0; i < nomes.length; i++){
        if (nomeProcurado === nomes[i]){
            encontrado = true;
            break;
        }
    }

if(encontrado){
    console.log(`O nome ${nomeProcurado} está na lista!`);
}else{
    console.log(`O nome ${nomeProcurado} não está na lista!`);
}
