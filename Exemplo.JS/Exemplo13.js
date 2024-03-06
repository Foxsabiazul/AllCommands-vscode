const nomes = ("Antonio","Lucilene","Carolina","Sara","João","Bruno","Kelly"); 

const nomeProcurado = "Bruno";


if(nomes.includes(nomeProcurado)){
    console.log(`O nome ${nomeProcurado} está na lista!`);
}else{
    console.log(`O nome ${nomeProcurado} não está na lista!`);
}