// numbers uso para (numeros)🦝
var a= 1;
var b= 2;
// strings  usado em (textos ou valores textuais) 🦊
var c= "1";
var d= "2"; 

// igualdade estrita ===
console.log(a === b);
console.log(a === c);

// diferença estrita ==
// o operador typeof retorna uma string indicando o tipo de um operando.
console.log(typeof a == typeof d);

|Números - Numéricos|
//typeof 37 === "number";
//typeof 3.14 === "number";
//typeof Math.LN2 === "number";
//typeof Infinity === "number";
//typeof NaN === "number"; 
"Apesar de ser 'Não-Numérico'"
//typeof Number(1) === "number"; 
/ mas nunca utilize desta forma acima! /

|Strings - Seqüências de caracteres|
//typeof "" === "string";
//typeof "bla" === "string";
//typeof typeof 1 === "string"; 
//typeof sempre retorna uma string
//typeof String("abc") === "string"; 
/ mas nunca utilize desta forma acima! /

|Booleans - Lógicos booleanos| 
//typeof true === "boolean";
//typeof false === "boolean";
//typeof Boolean(true) === "boolean"; 
/ mas nunca utilize desta forma acima! / 

|Undefined - Indefinidos|
//typeof undefined === "undefined";
//typeof blabla === "undefined"; 
/uma variável indefinida acima/

|Objetos|
//typeof { a: 1 } === "object";
//typeof [1, 2, 4] === "object"; 
`use Array.isArray ou Object.prototype.toString.call para diferenciar os objetos das arrays`
//typeof new Date() === "object";

//typeof new Boolean(true) === "object"; 
/isto é confuso, portanto não use desta forma/
//typeof new Number(1) === "object";  
/isto é confuso, portanto não use desta forma acima! /
//typeof new String("abc") === "object";  
/isso também é confuso, assim evite usar esta construção! /

|Funções|
//typeof function () {} === "function";
//typeof Math.sin === "function";
