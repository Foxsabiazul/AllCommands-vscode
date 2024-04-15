import { db } from '../database/db.js';

export const getProduto = (_, res) => {
    const sql = "select * from produto"

    db.query(sql, (err, data) => {
        if (err) {
            console.log("ERRO AO PROCESSAR A REQUISIÇÃO DO PROD.")
            return res.status(500).json(err);

        }else{

            console.log("Dados do prod obtidos com sucesso.")
            return res.status(200).json(data);
        }
    });
};

export const getAddProduto = (req, res) => {
    const sql = "insert into categoria (produto) values (?)";

    const {nome} = req.body;

    db.query(sql, [nome], (err, data) => {
        if(err){
            console.log("ERRO! ao Processar a Requisição do produto.");
            return res.status(500).json(err);  
        }else{
            console.log("Produto adicionado com sucesso.");
            return res.status(200).json(data);
        }
    });

}

export const getUpdateProduto = (req, res) => {
    const sql = "update categoria set produto = ? where id = ?"; 

    const {id, nome} = req.body;

    db.query(sql, [nome, id], (err, data) => {
        if(err){
            console.log("ERRO! ao Processar a Requisição do produto.");
            return res.status(500).json(err);  
        }else{
            console.log("Dados do produto alterado com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const getDeleteProduto = (req, res) => {
    const sql = "delete from categoria where id = ?"; 

    const {id} = req.body;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("ERRO! ao Processar a Requisição do prod.");
            return res.status(500).json(err);  
        }else{
            console.log("Dados do produto deletado com sucesso!.");
            return res.status(200).json(data);
        }
    });
}