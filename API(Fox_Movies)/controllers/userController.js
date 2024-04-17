import { db } from "../database/db.js";


export const getMovie = (_, res) => {
    const sql = "select * from filmes";

    db.query(sql, (err, data) => {
        if(err){
            console.log("ERRO! ao processar a requisição do filme.");
            return res.status(500).json(err);  
        }else{
            console.log("Dados do filme obtido com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const addMovie = (req, res) => {
    const sql = "insert into filme (nome) values (?)";

    const {nome} = req.body;

    db.query(sql, [nome], (err, data) => {
        if(err){
            console.log("ERRO! ao adicionar o filme.");
            return res.status(500).json(err);  
        }else{
            console.log("Filme adicionado com sucesso.");
            return res.status(200).json(data);
        }
    });

}

export const updateMovie = (req, res) => {
    const sql = "update filme set  = ? where id = ?"; 

    const {id, nome} = req.body;

    db.query(sql, [nome, id], (err, data) => {
        if(err){
            console.log("ERRO! ao processar a alteração do filme.");
            return res.status(500).json(err);  
        }else{
            console.log("Dados do usuário alterado com sucesso.");
            return res.status(200).json(data);
        }
    });
}

export const deleteMovie = (req, res) => {
    const sql = "delete from filme where id = ?"; 

    const {id} = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("ERRO! ao deletar o filme.");
            return res.status(500).json(err);  
        }else{
            console.log("Dados do filme deletados com sucesso.");
            return res.status(200).json(data);
        }
    });
}