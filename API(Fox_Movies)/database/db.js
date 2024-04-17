import mysql from 'mysql2';

export const db = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: 'root',
        password: "admin",
        database: "db_exemplo"
});


db.connect((err) => {
if(err){
    console.log(`ERRO DE CONEXÃO COM O BANCO DE DADOS: ${err}`)
        return;
    }
    console.log(`CONEXÃO BEM-SUCEDIDA COM BANCO DE DADOS MYSQL.`);

});