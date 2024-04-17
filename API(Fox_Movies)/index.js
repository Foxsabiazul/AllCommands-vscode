import express from 'express';
import cors from 'cors';
import userRoutes  from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/Movies", MoviesRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
})