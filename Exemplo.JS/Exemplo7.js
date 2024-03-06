function somar(){
    const res = 2 + 2;
    console.log(res);   
}

function somar2(num1, num2){
    const res = num1  + num2;
    console.log(res);
}

//somar2(10,10);

function somar3 (num1 , num2){
    const res = num1 + num2;
    return res;
}

//console.log(somar3());

const a = (num1, num2) => {  //arrrow function ou anonymous function
    const res = num1 + num2;
    return res;
}

console.log(a (12, 33));