import express from "express";

const app = express();

// Habilitando suporte a JSON
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});