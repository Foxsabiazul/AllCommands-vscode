import express from 'express';
import cors from 'cors';
import prod from './routes/prods.js';

const app = express ();

app.use(express.json());
app.use(cors());

app.use("/prods", prod);

const port = process.env.PORT || 8080;

app.listen(port, () => {

    console.log(`Servidor rodando na porta ${port}`);
});


